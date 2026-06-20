import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FilesProvider } from './context/FilesContext';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import Library from './pages/Library';
import Login from './pages/Login';
import Users from './pages/Users';

// ===== PUBLIC SITE PALOMA IMPORTS =====
import PublicLayout from './components/public/PublicLayout';
import Home from './pages/public/Home';
import Sobre from './pages/public/Sobre';
import Procedimentos from './pages/public/Procedimentos';
import Resultados from './pages/public/Resultados';
import Contato from './pages/public/Contato';

// ===== PRIVATE APP LAYOUT (unchanged) =====
function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex-1 md:ml-[220px] flex flex-col min-w-0">
        <Topbar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <FilesProvider>
        <BrowserRouter>
          <Routes>
            {/* ===== PUBLIC SITE PALOMA ROUTES ===== */}
            <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
            <Route path="/sobre" element={<PublicLayout><Sobre /></PublicLayout>} />
            <Route path="/procedimentos" element={<PublicLayout><Procedimentos /></PublicLayout>} />
            <Route path="/resultados" element={<PublicLayout><Resultados /></PublicLayout>} />
            <Route path="/contato" element={<PublicLayout><Contato /></PublicLayout>} />

            {/* ===== PRIVATE APP ROUTES (unchanged) ===== */}
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout><Dashboard /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/upload" element={
              <ProtectedRoute>
                <Layout><Upload /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/library" element={
              <ProtectedRoute>
                <Layout><Library /></Layout>
              </ProtectedRoute>
            } />
            <Route path="/users" element={
              <ProtectedRoute>
                <Layout><Users /></Layout>
              </ProtectedRoute>
            } />

            {/* Fallback: public home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </FilesProvider>
    </AuthProvider>
  );
}

export default App;
