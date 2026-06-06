import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/procedimentos', label: 'Procedimentos' },
    { to: '/resultados', label: 'Resultados' },
    { to: '/treinamentos', label: 'Treinamentos' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-md' : 'py-5'
      } bg-[#FBF9F4]/92 backdrop-blur-md border-b border-[#d3c3c2]/30`}
    >
      <nav className="flex justify-between items-center max-w-[1280px] mx-auto px-6 md:px-10 h-12">
        {/* Logo */}
        <Link
          to="/"
          className="font-['Playfair_Display'] text-xl md:text-2xl font-semibold text-[#543C3C] tracking-tight hover:opacity-80 transition-opacity"
        >
          Palomares Beauty
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 pb-0.5 ${
                  isActive
                    ? 'text-[#543C3C] border-b-2 border-[#CAB2A1]'
                    : 'text-[#8E7E73] hover:text-[#543C3C]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.12em] text-[#8E7E73] hover:text-[#543C3C] transition-colors"
          >
            Área do Aluno
          </Link>
          <a
            href="https://wa.me/5565981501744"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#543C3C] text-white font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded hover:bg-opacity-85 active:scale-95 transition-all"
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#543C3C] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FBF9F4] border-t border-[#d3c3c2]/30 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-['Manrope'] text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                  isActive ? 'text-[#543C3C]' : 'text-[#8E7E73]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <hr className="border-[#d3c3c2]/40 my-1" />
          <Link
            to="/login"
            className="font-['Manrope'] text-sm font-bold uppercase tracking-[0.12em] text-[#8E7E73]"
          >
            Área do Aluno
          </Link>
          <a
            href="https://wa.me/5565981501744"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#543C3C] text-white font-['Manrope'] text-sm font-bold uppercase tracking-[0.15em] px-5 py-3 rounded text-center hover:bg-opacity-85 transition-all"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}

function PublicFooter() {
  return (
    <footer className="bg-[#f4eceb] border-t border-[#d3c3c2]/40 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-['Playfair_Display'] text-2xl font-semibold text-[#543C3C] mb-4">
              Palomares<br />Beauty
            </div>
            <p className="font-['Manrope'] text-sm text-[#8E7E73] leading-relaxed">
              Onde a sofisticação encontra o cuidado orgânico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.15em] text-[#543C3C] mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Início' },
                { to: '/sobre', label: 'A Clínica' },
                { to: '/procedimentos', label: 'Procedimentos' },
                { to: '/resultados', label: 'Resultados' },
                { to: '/treinamentos', label: 'Treinamentos' },
                { to: '/contato', label: 'Contato' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-['Manrope'] text-sm text-[#8E7E73] hover:text-[#CAB2A1] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.15em] text-[#543C3C] mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {['Políticas de Privacidade', 'Termos de Uso'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-['Manrope'] text-sm text-[#8E7E73] hover:text-[#CAB2A1] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Palomares+Beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Manrope'] text-sm text-[#8E7E73] hover:text-[#CAB2A1] transition-colors"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.15em] text-[#543C3C] mb-5">
              Redes Sociais
            </h4>
            <ul className="space-y-3">
              {[
                { href: 'https://instagram.com', label: 'Instagram' },
                { href: 'https://wa.me/5565981501744', label: 'WhatsApp' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Manrope'] text-sm text-[#8E7E73] hover:text-[#CAB2A1] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.15em] text-[#543C3C] mb-3">
                Área Restrita
              </h4>
              <Link
                to="/login"
                className="inline-block font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.12em] border border-[#CAB2A1] text-[#543C3C] px-4 py-2 hover:bg-[#543C3C] hover:text-white hover:border-[#543C3C] transition-all rounded"
              >
                Acessar Sistema
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d3c3c2]/40 pt-6 text-center md:text-left">
          <p className="font-['Manrope'] text-xs text-[#8E7E73]">
            © 2026 Palomares Beauty. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/5565981501744"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#543C3C] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
      </a>
    </footer>
  );
}

export default function PublicLayout({ children }) {
  // Scroll reveal effect for .sp-reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll('.sp-reveal');
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="public-area min-h-screen flex flex-col">
      {/* Google Fonts for SITE PALOMA */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@400;500;600;700&family=Montserrat:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <PublicHeader />
      <main className="flex-1 pt-20">{children}</main>
      <PublicFooter />
    </div>
  );
}
