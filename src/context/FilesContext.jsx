import { createContext, useState, useEffect, useCallback, useRef } from 'react';
import { api } from '../services/api';

export const FilesContext = createContext();

const POLL_INTERVAL = 30000; // atualiza a cada 30 segundos

export function FilesProvider({ children }) {
  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState({ total: 0, pdfs: 0, videos: 0, storage: '0 B', storagePercentage: 0 });
  const [loading, setLoading] = useState(true);
  const pollingRef = useRef(null);

  const fetchFiles = useCallback(async () => {
    try {
      const data = await api.getFiles();
      setFiles(data);
    } catch (err) {
      console.error('Erro ao buscar arquivos:', err);
    }
  }, []);

  const fetchStats = useCallback(async () => {
    try {
      const data = await api.getStats();
      setStats(data);
    } catch (err) {
      console.error('Erro ao buscar stats:', err);
    }
  }, []);

  const refresh = useCallback(async () => {
    await Promise.all([fetchFiles(), fetchStats()]);
  }, [fetchFiles, fetchStats]);

  // Carregamento inicial
  useEffect(() => {
    setLoading(true);
    refresh().finally(() => setLoading(false));
  }, [refresh]);

  // Polling automático a cada 30 segundos
  useEffect(() => {
    pollingRef.current = setInterval(() => {
      refresh();
    }, POLL_INTERVAL);

    return () => clearInterval(pollingRef.current);
  }, [refresh]);

  // Refresh ao voltar para a aba (ex: usuário estava em outra aba)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        refresh();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [refresh]);

  const addFile = async (file, coverFile, displayName, description, onProgress) => {
    const newFile = await api.uploadFile(file, coverFile, displayName, description, onProgress);
    await refresh();
    return newFile;
  };

  const renameFile = async (id, displayName, description) => {
    const updatedFile = await api.renameFile(id, displayName, description);
    await refresh();
    return updatedFile;
  };

  const deleteFile = async (id) => {
    await api.deleteFile(id);
    await refresh();
  };

  return (
    <FilesContext.Provider value={{ files, stats, loading, addFile, renameFile, deleteFile, refresh }}>
      {children}
    </FilesContext.Provider>
  );
}
