import { useState, useRef, useContext } from 'react';
import { FilesContext } from '../context/FilesContext';
import { FileText, Video, CheckCircle2, AlertCircle, UploadCloud, X, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function Upload() {
  const { addFile } = useContext(FilesContext);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  
  // Selected main file to upload
  const [selectedFile, setSelectedFile] = useState(null);
  // Custom display name
  const [displayName, setDisplayName] = useState('');
  // Description
  const [description, setDescription] = useState('');
  // Selected cover file
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(null);
  
  const [history, setHistory] = useState([]);
  const fileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const resetForm = () => {
    setSelectedFile(null);
    setDisplayName('');
    setDescription('');
    setCoverFile(null);
    if (coverPreview) {
      URL.revokeObjectURL(coverPreview);
      setCoverPreview(null);
    }
  };

  const handleRealUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);
    setProgress(0);
    setSuccess(false);
    setError(null);

    try {
      const newFile = await addFile(selectedFile, coverFile, displayName, description, (pct) => setProgress(pct));
      setUploading(false);
      setSuccess(true);
      setHistory(prev => [newFile, ...prev]);
      resetForm();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      setUploading(false);
      setError(err.message || 'Erro ao fazer upload');
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Pre-fill display name (file name without extension)
      const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      setDisplayName(nameWithoutExt);
    }
    e.target.value = '';
  };

  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('O arquivo de capa precisa ser uma imagem.');
        setTimeout(() => setError(null), 4000);
        return;
      }
      setCoverFile(file);
      if (coverPreview) {
        URL.revokeObjectURL(coverPreview);
      }
      setCoverPreview(URL.createObjectURL(file));
    }
    e.target.value = '';
  };

  const handleCardClick = (accept) => {
    if (uploading) return;
    if (fileInputRef.current) {
      fileInputRef.current.accept = accept;
      fileInputRef.current.click();
    }
  };

  const removeCover = () => {
    setCoverFile(null);
    if (coverPreview) {
      URL.revokeObjectURL(coverPreview);
      setCoverPreview(null);
    }
  };

  // Helper to determine file color and icons
  const getFileDetails = (file) => {
    if (!file) return { color: '#7a3a4a', bg: '#fdf8f5', icon: FileText, label: 'Documento' };
    const name = file.name.toLowerCase();
    if (name.endsWith('.pdf')) {
      return { color: '#be185d', bg: '#fdf2f8', icon: FileText, label: 'PDF' };
    } else if (name.endsWith('.mp4') || name.endsWith('.mov') || name.endsWith('.webm')) {
      return { color: '#7c3aed', bg: '#f5f3ff', icon: Video, label: 'Vídeo' };
    } else {
      return { color: '#10b981', bg: '#ecfdf5', icon: ImageIcon, label: 'Imagem' };
    }
  };

  const fileDetails = getFileDetails(selectedFile);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        type="file"
        ref={coverInputRef}
        onChange={handleCoverChange}
        accept="image/*"
        className="hidden"
      />

      {/* Success and Error notifications */}
      {success && (
        <div className="flex items-center gap-3 rounded-xl p-4 mb-6 border animate-fade-in" style={{ background: '#ecfdf5', borderColor: '#a7f3d0' }}>
          <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
          <span className="font-medium text-emerald-800">Upload concluído com sucesso! O arquivo já está disponível na biblioteca.</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-xl p-4 mb-6 border animate-fade-in" style={{ background: '#fef2f2', borderColor: '#fca5a5' }}>
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <span className="font-medium text-red-800">{error}</span>
        </div>
      )}

      {/* Upload Selector (if no file is currently selected for upload) */}
      {!selectedFile && !uploading && (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-wine-dark flex items-center justify-center gap-2">
              <Sparkles className="text-rose" size={24} /> Gerenciador de Uploads
            </h2>
            <p className="text-sm text-wine/60 mt-1">Selecione o tipo de mídia que deseja enviar para a plataforma</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UploadCard
              icon={FileText}
              title="Apostilas & PDFs"
              description="Manuais, e-books e certificados (.pdf)"
              colorClass="hover:border-pink-300 group hover:shadow-pink-100/50"
              accentColor="#be185d"
              bgColor="#fdf2f8"
              onClick={() => handleCardClick('.pdf')}
            />
            <UploadCard
              icon={Video}
              title="Aulas & Vídeos"
              description="Tutoriais, aulas gravadas (.mp4, .mov, .webm)"
              colorClass="hover:border-purple-300 group hover:shadow-purple-100/50"
              accentColor="#7c3aed"
              bgColor="#f5f3ff"
              onClick={() => handleCardClick('.mp4,.mov,.webm')}
            />
            <UploadCard
              icon={ImageIcon}
              title="Capas & Imagens"
              description="Banners, slides e capas (.jpg, .png, .webp)"
              colorClass="hover:border-emerald-300 group hover:shadow-emerald-100/50"
              accentColor="#10b981"
              bgColor="#ecfdf5"
              onClick={() => handleCardClick('.jpg,.jpeg,.png,.webp')}
            />
          </div>
        </div>
      )}

      {/* Confirm Upload / Preview State */}
      {selectedFile && (
        <div className="bg-white rounded-2xl border border-wine/10 shadow-lg overflow-hidden animate-fade-in-up">
          <div className="p-6 md:p-8 border-b border-wine/5 flex justify-between items-center bg-cream/15">
            <div>
              <h3 className="text-xl font-semibold text-wine-dark">Configurar Upload</h3>
              <p className="text-xs text-wine/50 mt-0.5">Revise os detalhes do arquivo e adicione uma capa personalizada.</p>
            </div>
            <button
              onClick={resetForm}
              className="p-2 rounded-full hover:bg-wine/5 text-wine/40 hover:text-wine-dark transition-colors"
              title="Cancelar"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* File Info Box */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-wine/5" style={{ background: fileDetails.bg }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
                <fileDetails.icon size={24} style={{ color: fileDetails.color }} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: fileDetails.color }}>
                    {fileDetails.label}
                  </span>
                  <span className="text-xs text-wine/40">{formatSize(selectedFile.size)}</span>
                </div>
                <p className="font-semibold text-wine-dark text-sm truncate mt-1">{selectedFile.name}</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Display Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-wine-dark flex items-center gap-1.5">
                  Nome de Exibição
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Ex: Guia de Modelagem de Cílios"
                  className="w-full px-4 py-2.5 rounded-xl border border-wine/15 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all text-sm font-medium"
                />
                <p className="text-[11px] text-wine/40">Este nome aparecerá para os alunos (a extensão original será preservada).</p>
              </div>

              {/* Cover Image Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-wine-dark">
                  Capa / Thumbnail do Arquivo
                </label>
                
                {coverPreview ? (
                  <div className="relative group rounded-xl overflow-hidden border border-wine/10 h-28 w-full">
                    <img src={coverPreview} alt="Capa preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity gap-2">
                      <button
                        onClick={() => coverInputRef.current?.click()}
                        className="bg-white/95 text-wine-dark text-xs px-3 py-1.5 rounded-full font-bold shadow-md hover:bg-white transition-colors"
                      >
                        Alterar
                      </button>
                      <button
                        onClick={removeCover}
                        className="bg-red-500/90 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-md hover:bg-red-600 transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => coverInputRef.current?.click()}
                    className="w-full h-28 border-2 border-dashed border-wine/10 hover:border-wine/25 rounded-xl flex flex-col items-center justify-center text-wine/50 hover:text-wine-dark bg-wine-light/5 hover:bg-wine-light/10 transition-all group"
                  >
                    <ImageIcon size={24} className="mb-2 text-wine/30 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold">Upload de capa personalizada</span>
                    <span className="text-[10px] text-wine/40 mt-0.5">JPEG, PNG ou WEBP</span>
                  </button>
                )}
              </div>

              {/* Description Field */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-wine-dark">
                  Descrição
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ex: Apostila contendo o passo a passo da técnica de design..."
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-wine/15 focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose transition-all text-sm font-medium resize-none"
                />
                <p className="text-[11px] text-wine/40">Adicione uma descrição breve para orientar as alunas sobre o conteúdo.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 border-t border-wine/5 pt-6">
              <button
                type="button"
                onClick={resetForm}
                disabled={uploading}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border border-wine/15 text-wine hover:bg-wine/5 transition-colors disabled:opacity-50"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={handleRealUpload}
                disabled={uploading}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                style={{ background: `linear-gradient(135deg, #7a3a4a 0%, ${fileDetails.color} 100%)` }}
              >
                <UploadCloud size={16} />
                Confirmar & Enviar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Uploading State */}
      {uploading && selectedFile && (
        <div className="bg-white rounded-2xl border border-wine/10 p-6 md:p-8 shadow-lg animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: fileDetails.bg }}>
              <fileDetails.icon size={22} style={{ color: fileDetails.color }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-wine-dark truncate">{displayName || selectedFile.name}</p>
                <span className="text-sm font-bold text-wine-dark ml-2">{progress}%</span>
              </div>
              <p className="text-xs text-wine/40 mt-0.5">{formatSize(selectedFile.size)} · Enviando...</p>
            </div>
          </div>

          <div className="w-full h-2 rounded-full overflow-hidden bg-wine-light/20">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, #7a3a4a 0%, ${fileDetails.color} 100%)`,
              }}
            />
          </div>
        </div>
      )}

      {/* Session history */}
      {history.length > 0 && (
        <section className="bg-white rounded-2xl border border-wine/10 p-6 shadow-sm mt-8">
          <h3 className="text-lg font-semibold text-wine-dark mb-4 border-b border-wine/5 pb-3">
            Histórico de Uploads da Sessão ({history.length})
          </h3>
          <div className="space-y-3">
            {history.map(file => {
              const histDetails = getFileDetails({ name: file.name });
              return (
                <div key={file.id} className="flex justify-between items-center py-2.5 px-4 rounded-xl hover:bg-wine-light/5 transition-colors border border-wine/5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
                      style={{ background: histDetails.bg }}
                    >
                      <histDetails.icon size={16} style={{ color: histDetails.color }} />
                    </div>
                    <div>
                      <p className="font-semibold text-wine-dark text-sm">{file.displayName || file.name}</p>
                      <p className="text-xs text-wine/40">{formatSize(file.size)}</p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100"
                  >
                    ✓ Enviado
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function UploadCard({ icon: Icon, title, description, colorClass, accentColor, bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border-2 border-dashed border-wine/15 bg-white hover:scale-[1.02] hover:shadow-xl cursor-pointer ${colorClass}`}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
        style={{ background: bgColor }}
      >
        <Icon size={28} style={{ color: accentColor }} />
      </div>
      <h3 className="text-lg font-bold text-wine-dark mb-1">{title}</h3>
      <p className="text-xs text-wine/50 mb-6 leading-relaxed px-4">{description}</p>

      <div
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all duration-300"
        style={{ background: `linear-gradient(135deg, #7a3a4a 0%, ${accentColor} 100%)` }}
      >
        <UploadCloud size={14} />
        Selecionar Arquivo
      </div>
    </button>
  );
}

function formatSize(bytes) {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}
