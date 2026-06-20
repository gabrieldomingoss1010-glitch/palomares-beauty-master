import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { initDb, getDb, saveDb } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'palomares-beauty-secret-key-2026';

// Ensure upload directories exist
const uploadsBase = path.join(__dirname, 'uploads');
const pdfDir = path.join(uploadsBase, 'pdfs');
const videoDir = path.join(uploadsBase, 'videos');
const imageDir = path.join(uploadsBase, 'images');
const coverDir = path.join(uploadsBase, 'covers');
fs.mkdirSync(pdfDir, { recursive: true });
fs.mkdirSync(videoDir, { recursive: true });
fs.mkdirSync(imageDir, { recursive: true });
fs.mkdirSync(coverDir, { recursive: true });

// Middleware
app.use(cors({ origin: '*' })); // Allow all origins in production, or configure properly
app.use(express.json());

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsBase));

// Serve React frontend statically in production
const frontendDist = path.join(__dirname, '../dist');
if (fs.existsSync(frontendDist)) {
  app.use(express.static(frontendDist));
}

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'cover') {
      cb(null, coverDir);
    } else if (file.mimetype === 'application/pdf') {
      cb(null, pdfDir);
    } else if (file.mimetype.startsWith('image/')) {
      cb(null, imageDir);
    } else {
      cb(null, videoDir);
    }
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    // Keep original name but make it filesystem-safe
    const safeName = Buffer.from(file.originalname, 'latin1').toString('utf8')
      .replace(/[<>:"/\\|?*]/g, '_');
    cb(null, `${timestamp}-${safeName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 * 1024 }, // 2GB max
  fileFilter: (req, file, cb) => {
    const allowed = [
      'application/pdf',
      'video/mp4', 'video/quicktime', 'video/webm', 'video/x-msvideo', 'video/x-matroska',
      'image/jpeg', 'image/png', 'image/webp'
    ];
    if (file.fieldname === 'cover') {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('A imagem de capa deve ser um formato de imagem válido (jpg, png, webp).'));
      }
    } else {
      if (allowed.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Tipo de arquivo não permitido. Envie PDF, vídeo ou imagem.'));
      }
    }
  }
});

// Helper: convert sql.js rows to objects
function queryAll(sql, params = []) {
  const db = getDb();
  const stmt = db.prepare(sql);
  if (params.length) stmt.bind(params);
  const results = [];
  while (stmt.step()) {
    results.push(stmt.getAsObject());
  }
  stmt.free();
  return results;
}

function queryOne(sql, params = []) {
  const rows = queryAll(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

function runSql(sql, params = []) {
  const db = getDb();
  db.run(sql, params);
  saveDb();
}

// ─── AUTH MIDDLEWARE ────────────────────────────────────
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido ou expirado' });
  }
}

// ─── AUTH ROUTES (public) ──────────────────────────────

// POST /api/login — authenticate user
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
  }

  const user = queryOne('SELECT * FROM users WHERE username = ?', [username]);
  if (!user) {
    return res.status(401).json({ error: 'Usuário ou senha incorretos' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Usuário ou senha incorretos' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: { id: user.id, username: user.username }
  });
});

// ─── PROTECTED ROUTES ──────────────────────────────────

// GET /api/files — list all files
app.get('/api/files', authenticateToken, (req, res) => {
  const files = queryAll('SELECT * FROM files ORDER BY createdAt DESC');
  res.json(files);
});

// GET /api/files/:id — get single file
app.get('/api/files/:id', authenticateToken, (req, res) => {
  const file = queryOne('SELECT * FROM files WHERE id = ?', [Number(req.params.id)]);
  if (!file) return res.status(404).json({ error: 'Arquivo não encontrado' });
  res.json(file);
});

// POST /api/upload — upload a file and optionally a cover image
app.post('/api/upload', authenticateToken, upload.fields([{ name: 'file', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), (req, res) => {
  const files = req.files;
  if (!files || !files.file || files.file.length === 0) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' });
  }

  const mainFile = files.file[0];
  const coverFile = files.cover && files.cover.length > 0 ? files.cover[0] : null;

  let type = 'video';
  if (mainFile.mimetype === 'application/pdf') {
    type = 'pdf';
  } else if (mainFile.mimetype.startsWith('image/')) {
    type = 'image';
  }

  const originalName = Buffer.from(mainFile.originalname, 'latin1').toString('utf8');
  
  let relativePath = '';
  if (type === 'pdf') {
    relativePath = `uploads/pdfs/${mainFile.filename}`;
  } else if (type === 'image') {
    relativePath = `uploads/images/${mainFile.filename}`;
  } else {
    relativePath = `uploads/videos/${mainFile.filename}`;
  }

  let coverPath = null;
  if (coverFile) {
    coverPath = `uploads/covers/${coverFile.filename}`;
  }

  // displayName defaults to name without extension if not provided
  let displayName = req.body.displayName || originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
  let description = req.body.description || '';

  const db = getDb();
  db.run(
    'INSERT INTO files (name, displayName, type, size, path, coverPath, description) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [originalName, displayName, type, mainFile.size, relativePath, coverPath, description]
  );
  saveDb();

  // Get the inserted row
  const newFile = queryOne('SELECT * FROM files ORDER BY id DESC LIMIT 1');

  res.status(201).json(newFile);
});

// PATCH /api/files/:id — rename/update file (edit displayName and description)
app.patch('/api/files/:id', authenticateToken, (req, res) => {
  const { displayName, description } = req.body;
  if (displayName === undefined && description === undefined) {
    return res.status(400).json({ error: 'Nenhum campo para atualizar' });
  }
  const file = queryOne('SELECT * FROM files WHERE id = ?', [Number(req.params.id)]);
  if (!file) return res.status(404).json({ error: 'Arquivo não encontrado' });

  if (displayName !== undefined && description !== undefined) {
    runSql('UPDATE files SET displayName = ?, description = ? WHERE id = ?', [displayName, description, Number(req.params.id)]);
  } else if (displayName !== undefined) {
    runSql('UPDATE files SET displayName = ? WHERE id = ?', [displayName, Number(req.params.id)]);
  } else if (description !== undefined) {
    runSql('UPDATE files SET description = ? WHERE id = ?', [description, Number(req.params.id)]);
  }

  const updatedFile = queryOne('SELECT * FROM files WHERE id = ?', [Number(req.params.id)]);
  res.json(updatedFile);
});

// DELETE /api/files/:id — delete a file and its cover if any
app.delete('/api/files/:id', authenticateToken, (req, res) => {
  const file = queryOne('SELECT * FROM files WHERE id = ?', [Number(req.params.id)]);
  if (!file) return res.status(404).json({ error: 'Arquivo não encontrado' });

  // Delete physical file
  const filePath = path.join(__dirname, file.path);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  // Delete physical cover image if any
  if (file.coverPath) {
    const coverPath = path.join(__dirname, file.coverPath);
    if (fs.existsSync(coverPath)) {
      fs.unlinkSync(coverPath);
    }
  }

  // Delete from database
  runSql('DELETE FROM files WHERE id = ?', [Number(req.params.id)]);
  res.json({ message: 'Arquivo deletado com sucesso' });
});

// GET /api/stats — storage statistics
app.get('/api/stats', authenticateToken, (req, res) => {
  const total = queryOne('SELECT COUNT(*) as count FROM files');
  const pdfs = queryOne("SELECT COUNT(*) as count FROM files WHERE type = 'pdf'");
  const videos = queryOne("SELECT COUNT(*) as count FROM files WHERE type = 'video'");
  const images = queryOne("SELECT COUNT(*) as count FROM files WHERE type = 'image'");
  const totalSize = queryOne('SELECT COALESCE(SUM(size), 0) as total FROM files');

  const storageBytes = totalSize ? totalSize.total : 0;

  res.json({
    total: total ? total.count : 0,
    pdfs: pdfs ? pdfs.count : 0,
    videos: videos ? videos.count : 0,
    images: images ? images.count : 0,
    storageBytes,
    storage: formatBytes(storageBytes),
    storagePercentage: Math.min(Math.round((storageBytes / (10 * 1024 * 1024 * 1024)) * 100), 100)
  });
});

// ─── USER ROUTES (protected) ──────────────────────────

// GET /api/users — list all users
app.get('/api/users', authenticateToken, (req, res) => {
  const users = queryAll('SELECT id, username, createdAt FROM users ORDER BY createdAt DESC');
  res.json(users);
});

// POST /api/users — create a new user
app.post('/api/users', authenticateToken, async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
  }

  // Check if username already exists
  const existingUser = queryOne('SELECT * FROM users WHERE username = ?', [username]);
  if (existingUser) {
    return res.status(400).json({ error: 'Este nome de usuário já está em uso' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const db = getDb();
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    saveDb();

    const newUser = queryOne('SELECT id, username, createdAt FROM users WHERE username = ?', [username]);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// DELETE /api/users/:id — delete a user
app.delete('/api/users/:id', authenticateToken, (req, res) => {
  const userIdToDelete = Number(req.params.id);

  // Prevent self-deletion
  if (req.user && req.user.id === userIdToDelete) {
    return res.status(400).json({ error: 'Você não pode excluir o seu próprio usuário enquanto está conectado' });
  }

  const user = queryOne('SELECT * FROM users WHERE id = ?', [userIdToDelete]);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }

  // Prevent deleting the last remaining user
  const totalUsers = queryOne('SELECT COUNT(*) as count FROM users');
  if (totalUsers && totalUsers.count <= 1) {
    return res.status(400).json({ error: 'Não é possível excluir o único usuário do sistema' });
  }

  runSql('DELETE FROM users WHERE id = ?', [userIdToDelete]);
  res.json({ message: 'Usuário excluído com sucesso' });
});

// Error handler for multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: `Erro de upload: ${err.message}` });
  }
  if (err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// CATCH-ALL ROUTE FOR REACT ROUTER
app.get(/(.*)/, (req, res) => {
  if (fs.existsSync(frontendDist)) {
    res.sendFile(path.join(frontendDist, 'index.html'));
  } else {
    res.status(404).send('Frontend not built. Run npm run build.');
  }
});

// Initialize DB then start server
initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`🌹 Palomares Beauty API rodando em http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Falha ao inicializar banco de dados:', err);
  process.exit(1);
});
