const API_BASE = '/api';

function getAuthHeaders() {
  const token = localStorage.getItem('pb_token');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}

export const api = {
  async getFiles() {
    const res = await fetch(`${API_BASE}/files`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Falha ao buscar arquivos');
    return res.json();
  },

  async getStats() {
    const res = await fetch(`${API_BASE}/stats`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Falha ao buscar estatísticas');
    return res.json();
  },

  async uploadFile(file, coverFile, displayName, description, onProgress) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
      formData.append('file', file);
      if (coverFile) {
        formData.append('cover', coverFile);
      }
      if (displayName) {
        formData.append('displayName', displayName);
      }
      if (description) {
        formData.append('description', description);
      }

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && onProgress) {
          onProgress(Math.round((e.loaded / e.total) * 100));
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          try {
            const err = JSON.parse(xhr.responseText);
            reject(new Error(err.error || 'Erro no upload'));
          } catch {
            reject(new Error('Erro no upload'));
          }
        }
      });

      xhr.addEventListener('error', () => reject(new Error('Erro de conexão')));
      xhr.addEventListener('abort', () => reject(new Error('Upload cancelado')));

      xhr.open('POST', `${API_BASE}/upload`);
      // Add auth header
      const token = localStorage.getItem('pb_token');
      if (token) {
        xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      }
      xhr.send(formData);
    });
  },

  async renameFile(id, displayName, description) {
    const res = await fetch(`${API_BASE}/files/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders()
      },
      body: JSON.stringify({ displayName, description })
    });
    if (!res.ok) throw new Error('Falha ao atualizar arquivo');
    return res.json();
  },

  async deleteFile(id) {
    const res = await fetch(`${API_BASE}/files/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Falha ao deletar arquivo');
    return res.json();
  },

  async getUsers() {
    const res = await fetch(`${API_BASE}/users`, {
      headers: getAuthHeaders()
    });
    if (!res.ok) throw new Error('Falha ao buscar usuários');
    return res.json();
  },

  async createUser(username, password) {
    const res = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders()
      },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Falha ao criar usuário');
    return data;
  },

  async deleteUser(id) {
    const res = await fetch(`${API_BASE}/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Falha ao deletar usuário');
    return data;
  },

  getFileUrl(filePath) {
    return `/${filePath}`;
  }
};
