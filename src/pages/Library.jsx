import { useState, useContext, useMemo, useEffect } from 'react';
import { FilesContext } from '../context/FilesContext';
import { Search, Filter, Download, Eye, Trash2, Loader2, FileText, Video, Image as ImageIcon, Edit2, Check, X } from 'lucide-react';
import { api } from '../services/api';
import VideoModal from '../components/VideoModal';
import PdfModal from '../components/PdfModal';
import ConfirmModal from '../components/ConfirmModal';

export default function Library() {
  const { files, loading, deleteFile, renameFile } = useContext(FilesContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [viewingFile, setViewingFile] = useState(null);
  const [deletingFile, setDeletingFile] = useState(null); // file object to confirm
  const [deletingId, setDeletingId] = useState(null);    // id while in progress
  
  // Renaming state
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editDesc, setEditDesc] = useState('');

  const filteredFiles = useMemo(() => {
    return files.filter(file => {
      const nameToSearch = (file.displayName || file.name).toLowerCase();
      const matchesSearch = nameToSearch.includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'all' || file.type === filter;
      return matchesSearch && matchesFilter;
    });
  }, [files, searchTerm, filter]);

  const handleDeleteRequest = (file) => {
    setDeletingFile(file);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingFile) return;
    setDeletingId(deletingFile.id);
    try {
      await deleteFile(deletingFile.id);
    } catch (err) {
      alert('Erro ao deletar: ' + err.message);
    }
    setDeletingId(null);
    setDeletingFile(null);
  };

  const handleStartRename = (file) => {
    setEditingId(file.id);
    setEditValue(file.displayName || file.name);
    setEditDesc(file.description || '');
  };

  const handleSaveRename = async (id) => {
    if (!editValue.trim()) return;
    try {
      await renameFile(id, editValue.trim(), editDesc.trim());
      setEditingId(null);
    } catch (err) {
      alert('Erro ao renomear: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="animate-spin text-rose" size={40} />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-wine/10 p-4 mb-6 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 shadow-sm">
        <div className="flex items-center justify-between sm:justify-start gap-2 overflow-x-auto pb-1 md:pb-0">
          <Filter size={18} className="text-wine/60 flex-shrink-0" />
          <div className="flex bg-rose-light/20 p-1 rounded-xl flex-shrink-0">
            {[
              { key: 'all', label: 'Todos' },
              { key: 'pdf', label: 'PDFs' },
              { key: 'video', label: 'Vídeos' },
              { key: 'image', label: 'Imagens' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  filter === item.key
                    ? 'bg-white text-wine-dark shadow-sm'
                    : 'text-wine/60 hover:text-wine-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-wine/50" size={18} />
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-cream/50 border border-wine/10 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all text-xs font-medium"
          />
        </div>
      </div>

      {/* File count */}
      {filteredFiles.length > 0 && (
        <p className="text-xs font-semibold text-wine/50 mb-4 px-1">
          {filteredFiles.length} {filteredFiles.length === 1 ? 'arquivo encontrado' : 'arquivos encontrados'}
        </p>
      )}

      {filteredFiles.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-wine/10 shadow-sm">
          <div className="text-5xl mb-4">📂</div>
          <p className="text-wine/60 font-semibold text-lg">Nenhum arquivo encontrado.</p>
          <p className="text-wine/40 text-xs mt-1">Tente mudar os filtros ou faça upload de novos conteúdos.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-wine/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[700px] md:min-w-full">
              <thead>
                <tr className="border-b border-wine/8 text-left bg-cream/10">
                  <th className="px-5 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider w-16">Capa</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider">Nome</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider w-24">Tipo</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider w-24">Tamanho</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider w-28">Data</th>
                  <th className="px-5 py-3.5 text-xs font-bold text-wine-dark/50 uppercase tracking-wider text-right w-44">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-wine/5">
                {filteredFiles.map(file => (
                  <FileRow
                    key={file.id}
                    file={file}
                    isEditing={editingId === file.id}
                    editValue={editValue}
                    setEditValue={setEditValue}
                    editDesc={editDesc}
                    setEditDesc={setEditDesc}
                    onStartRename={() => handleStartRename(file)}
                    onSaveRename={() => handleSaveRename(file.id)}
                    onCancelRename={() => setEditingId(null)}
                    onView={() => setViewingFile(file)}
                    onDelete={() => handleDeleteRequest(file)}
                    isDeleting={deletingId === file.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modals */}
      {viewingFile && viewingFile.type === 'video' && (
        <VideoModal file={viewingFile} onClose={() => setViewingFile(null)} />
      )}
      {viewingFile && viewingFile.type === 'pdf' && (
        <PdfModal file={viewingFile} onClose={() => setViewingFile(null)} />
      )}
      {viewingFile && viewingFile.type === 'image' && (
        <ImagePreviewModal file={viewingFile} onClose={() => setViewingFile(null)} />
      )}

      {deletingFile && (
        <ConfirmModal
          title="Excluir arquivo"
          message={`Tem certeza que deseja excluir "${deletingFile.displayName || deletingFile.name}"? Esta ação não pode ser desfeita.`}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingFile(null)}
          loading={deletingId === deletingFile?.id}
        />
      )}
    </div>
  );
}

function FileRow({
  file,
  isEditing,
  editValue,
  setEditValue,
  editDesc,
  setEditDesc,
  onStartRename,
  onSaveRename,
  onCancelRename,
  onView,
  onDelete,
  isDeleting
}) {
  // Styling configurations
  const typeConfigs = {
    pdf: { color: '#be185d', bg: '#fdf2f8', icon: FileText, label: 'PDF' },
    video: { color: '#7c3aed', bg: '#f5f3ff', icon: Video, label: 'Vídeo' },
    image: { color: '#10b981', bg: '#ecfdf5', icon: ImageIcon, label: 'Imagem' }
  };

  const currentConfig = typeConfigs[file.type] || typeConfigs.pdf;
  const Icon = currentConfig.icon;

  return (
    <tr className="hover:bg-wine-light/5 transition-colors group">
      {/* Cover / Thumbnail Column */}
      <td className="px-5 py-3.5">
        {file.coverPath ? (
          <img
            src={api.getFileUrl(file.coverPath)}
            alt="Capa"
            className="w-10 h-10 object-cover rounded-lg border border-wine/10 shadow-sm"
          />
        ) : (
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shadow-sm"
            style={{ background: currentConfig.bg }}
          >
            <Icon size={18} style={{ color: currentConfig.color }} />
          </div>
        )}
      </td>

      {/* Name Column */}
      <td className="px-4 py-3.5">
        {isEditing ? (
          <div className="flex flex-col gap-2 max-w-sm">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="px-2 py-1 text-xs border border-rose rounded focus:outline-none focus:ring-1 focus:ring-rose bg-cream/15 font-semibold text-wine-dark w-full"
              placeholder="Nome de exibição"
            />
            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              className="px-2 py-1 text-xs border border-rose rounded focus:outline-none focus:ring-1 focus:ring-rose bg-cream/15 text-wine-dark w-full resize-none"
              placeholder="Descrição"
              rows={2}
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={onSaveRename}
                className="p-1 rounded bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
                title="Salvar"
              >
                <Check size={14} />
              </button>
              <button
                onClick={onCancelRename}
                className="p-1 rounded bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                title="Cancelar"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 group/name">
              <span className="font-semibold text-wine-dark text-sm truncate max-w-[220px]" title={file.displayName || file.name}>
                {file.displayName || file.name}
              </span>
              <button
                onClick={onStartRename}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-wine/40 hover:text-wine-dark hover:scale-105"
                title="Renomear"
              >
                <Edit2 size={12} />
              </button>
            </div>
            {file.description && (
              <p className="text-xs text-wine/50 max-w-md line-clamp-2" title={file.description}>
                {file.description}
              </p>
            )}
          </div>
        )}
      </td>

      {/* Type Column */}
      <td className="px-4 py-3.5">
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: currentConfig.bg, color: currentConfig.color }}
        >
          {currentConfig.label}
        </span>
      </td>

      {/* Size Column */}
      <td className="px-4 py-3.5">
        <span className="text-xs font-semibold text-wine/60">{formatSize(file.size)}</span>
      </td>

      {/* Date Column */}
      <td className="px-4 py-3.5">
        <span className="text-xs font-semibold text-wine/60">{formatDate(file.createdAt)}</span>
      </td>

      {/* Actions Column */}
      <td className="px-5 py-3.5 text-right">
        <div className="flex items-center justify-end gap-1.5">
          <button
            onClick={onView}
            title="Visualizar"
            className="p-1.5 rounded-lg border border-wine/10 hover:bg-wine/5 text-wine/70 hover:text-wine-dark transition-colors"
          >
            <Eye size={14} />
          </button>

          <a
            href={api.getFileUrl(file.path)}
            download={file.displayName || file.name}
            title="Baixar"
            className="p-1.5 rounded-lg border border-wine/10 hover:bg-wine/5 text-wine/70 hover:text-wine-dark transition-colors"
          >
            <Download size={14} />
          </a>

          <button
            onClick={onDelete}
            disabled={isDeleting}
            title="Excluir"
            className="p-1.5 rounded-lg border border-red-100 hover:bg-red-50 text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
          >
            {isDeleting ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
          </button>
        </div>
      </td>
    </tr>
  );
}

function ImagePreviewModal({ file, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!file) return null;
  const imageUrl = api.getFileUrl(file.path);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl flex flex-col animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-5 py-3 border-b border-wine/10 bg-cream/10">
          <span className="font-semibold text-wine-dark text-sm truncate">{file.displayName || file.name}</span>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-wine/5 text-wine/50 hover:text-wine-dark transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 bg-cream/5 p-4 flex items-center justify-center max-h-[70vh] overflow-hidden">
          <img src={imageUrl} alt={file.name} className="max-w-full max-h-[60vh] object-contain rounded-lg" />
        </div>
      </div>
    </div>
  );
}

function formatSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
