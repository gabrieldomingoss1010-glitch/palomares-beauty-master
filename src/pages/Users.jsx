import { useState, useEffect, useContext } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { UserPlus, Trash2, Calendar, Shield, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import ConfirmModal from '../components/ConfirmModal';

export default function Users() {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Delete modal state
  const [deletingUser, setDeletingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      setError('');
      setSuccess('');
      setActionLoading(true);
      await api.createUser(username.trim(), password);
      setSuccess(`Usuário "${username}" criado com sucesso!`);
      setUsername('');
      setPassword('');
      await fetchUsers();
    } catch (err) {
      setError(err.message || 'Erro ao criar usuário');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!deletingUser) return;
    try {
      setError('');
      setSuccess('');
      setActionLoading(true);
      await api.deleteUser(deletingUser.id);
      setSuccess(`Usuário "${deletingUser.username}" excluído com sucesso!`);
      await fetchUsers();
    } catch (err) {
      setError(err.message || 'Erro ao excluir usuário');
    } finally {
      setActionLoading(false);
      setDeletingUser(null);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-wine-dark mb-2">Gestão de Usuários</h1>
        <p className="text-wine/60 text-sm">Adicione e gerencie as contas que têm permissão de acesso ao painel administrativo da Palomares Beauty.</p>
      </div>

      {/* Notifications */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-fade-in">
          <AlertCircle size={20} className="flex-shrink-0 text-red-500" />
          <span className="text-sm font-medium">{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-fade-in">
          <CheckCircle size={20} className="flex-shrink-0 text-emerald-500" />
          <span className="text-sm font-medium">{success}</span>
        </div>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Create User Form */}
        <div className="bg-white rounded-2xl border border-wine/10 p-6 h-fit shadow-sm">
          <h2 className="text-xl font-semibold text-wine-dark mb-6 flex items-center gap-2">
            <UserPlus size={20} className="text-rose" /> Novo Acesso
          </h2>

          <form onSubmit={handleCreateUser} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-wine/70 uppercase tracking-wider mb-2">
                Nome de Usuário
              </label>
              <input
                type="text"
                placeholder="Ex: paloma_admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={actionLoading}
                className="w-full px-4 py-3 rounded-xl border border-wine/10 focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose bg-cream/10 text-wine-dark text-sm transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-wine/70 uppercase tracking-wider mb-2">
                Senha de Acesso
              </label>
              <input
                type="password"
                placeholder="Defina uma senha segura"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={actionLoading}
                className="w-full px-4 py-3 rounded-xl border border-wine/10 focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose bg-cream/10 text-wine-dark text-sm transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={actionLoading}
              className="w-full py-3 px-4 rounded-xl bg-wine hover:bg-wine-dark text-cream font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
            >
              {actionLoading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <UserPlus size={18} />
              )}
              Criar Usuário
            </button>
          </form>
        </div>

        {/* Users List */}
        <div className="bg-white rounded-2xl border border-wine/10 p-6 lg:col-span-2 shadow-sm">
          <h2 className="text-xl font-semibold text-wine-dark mb-6 flex items-center gap-2">
            <Shield size={20} className="text-rose" /> Usuários Ativos
          </h2>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-rose" size={32} />
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-12 text-wine/40">
              Nenhum usuário cadastrado.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-wine/5">
                    <th className="pb-3 text-xs font-semibold text-wine/50 uppercase tracking-wider">Usuário</th>
                    <th className="pb-3 text-xs font-semibold text-wine/50 uppercase tracking-wider hidden sm:table-cell">Criado em</th>
                    <th className="pb-3 text-right text-xs font-semibold text-wine/50 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-wine/5">
                  {users.map((u) => {
                    const isSelf = currentUser && currentUser.username === u.username;
                    return (
                      <tr key={u.id} className="group hover:bg-cream/10 transition-colors">
                        <td className="py-4 pr-3">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-rose-light/40 flex items-center justify-center text-wine font-semibold text-sm">
                              {u.username.substring(0, 2).toUpperCase()}
                            </div>
                            <div>
                              <span className="font-medium text-wine-dark text-sm block">
                                {u.username}
                              </span>
                              {isSelf && (
                                <span className="text-[10px] bg-rose/15 text-wine px-1.5 py-0.5 rounded-full font-semibold">
                                  Você
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 hidden sm:table-cell text-xs text-wine/60">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-wine/40" />
                            {formatDate(u.createdAt)}
                          </div>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => setDeletingUser(u)}
                            disabled={isSelf || actionLoading}
                            className={`p-2 rounded-lg transition-colors inline-flex items-center justify-center ${
                              isSelf
                                ? 'text-wine/20 cursor-not-allowed'
                                : 'text-wine/40 hover:text-red-500 hover:bg-red-50'
                            }`}
                            title={isSelf ? 'Você não pode se excluir' : 'Excluir usuário'}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Confirmation Modal */}
      {deletingUser && (
        <ConfirmModal
          title="Excluir Usuário"
          message={`Tem certeza que deseja excluir o acesso do usuário "${deletingUser.username}"? Esta ação não pode ser desfeita.`}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeletingUser(null)}
          loading={actionLoading}
        />
      )}
    </div>
  );
}
