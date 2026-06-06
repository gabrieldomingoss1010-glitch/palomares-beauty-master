import { createContext, useState, useEffect, useCallback } from 'react';
import { api } from '../services/api';

export const FilesContext = createContext();

export function FilesProvider({ children }) {
  const [files, setFiles] = useState([]);
  const [stats, setStats] = useState({ total: 0, pdfs: 0, videos: 0, storage: '0 B', storagePercentage: 0 });
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setLoading(true);
    refresh().finally(() => setLoading(false));
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
