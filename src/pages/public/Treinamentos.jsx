import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const CURSOS = [
  {
    icon: 'architecture',
    titulo: 'Design de Sobrancelhas — Método RSP',
    nivel: 'Iniciante a Avançado',
    duracao: '40h',
    modalidade: 'Presencial',
    desc: 'Formação completa no método exclusivo RSP de design de sobrancelhas, cobrindo visagismo, mapeamento facial e técnicas de harmonização do olhar.',
    destaques: ['Técnica de mapeamento e leitura facial', 'Materiais inclusos', 'Certificado de conclusão', 'Suporte pós-curso no grupo exclusivo'],
  },
  {
    icon: 'flare',
    titulo: 'Nanopigmentação de Alta Definição',
    nivel: 'Intermediário',
    duracao: '32h',
    modalidade: 'Presencial',
    desc: 'Domine a arte da nanopigmentação realista com equipamentos de última geração e protocolos clínicos seguros.',
    destaques: ['Fios realistas e fio a fio', 'Técnica para diferentes tipos de pele', 'Colorimetria avançada', 'Acesso ao material didático online'],
  },
  {
    icon: 'water',
    titulo: 'Revitalização Labial — Hidragloss & Nanolabial',
    nivel: 'Iniciante a Avançado',
    duracao: '24h',
    modalidade: 'Presencial + Online',
    desc: 'Aprenda os protocolos de revitalização labial mais requisitados do mercado, da teoria à prática em modelos reais.',
    destaques: ['Protocolo Hidragloss completo', 'Pigmentação natural e sem batom pesado', 'Ética e legislação em cosmetologia', 'Certificado reconhecido no mercado'],
  },
  {
    icon: 'visibility',
    titulo: 'Lash Lifting & Design de Cílios',
    nivel: 'Iniciante',
    duracao: '16h',
    modalidade: 'Online + Presencial',
    desc: 'Formação para profissionais que desejam entrar ou aprimorar na área de cílios com técnicas de lifting, curvatura e coloração.',
    destaques: ['Modulação de curvatura', 'Coloração de cílios', 'Fio-a-fio natural', 'Material incluído'],
  },
];

function CTAPrivado({ variant = 'primary' }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  if (variant === 'outline') {
    return (
      <button
        onClick={handleClick}
        className="border-2 border-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold uppercase tracking-[0.12em] px-8 py-3 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all flex items-center gap-2 justify-center"
      >
        <span className="material-symbols-outlined text-base">school</span>
        {user ? 'Acessar Meus Cursos' : 'Entrar na Área do Colaborador'}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#543C3C] text-white font-['Manrope'] font-bold uppercase tracking-[0.12em] px-8 py-3 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all flex items-center gap-2 justify-center"
    >
      <span className="material-symbols-outlined text-base">lock_open</span>
      {user ? 'Ir para Dashboard' : 'Acessar o Sistema de Cursos'}
    </button>
  );
}

export default function Treinamentos() {
  const { user } = useAuth();

  useEffect(() => {
    document.title = 'Treinamentos | Palomares Beauty';
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvswADrH5JsPIRQjCkhRUDjjYxNzIFQFBhp73vf-EJVF45tBU6sXxb8HJ1d9Q1LIIDB1NGtmCgKYZ1OKNQQpvo0oxg3hDrOm09Am0tHpQwt3aM170rY0AAsAK-54KTtDPiMkeRMrGZ2Khg1_zZYy7qi-Q6C87Qg82jW2YKQnKVcGL6rXtbARHWWnnRTUcATqvvjHFhZsVtA3WV0n9MBWVEL8Zc6lDEAmiGxU1Xpu2U1HTrRBQ6hUq-5IHyDl2mXhYL3DYvd7ixFmYG"
            alt="Treinamentos Palomares Beauty"
          />
          <div className="absolute inset-0 bg-[#543C3C]/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.3em] text-[#CAB2A1] block mb-6">
            Formação de Alto Padrão
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white mb-8 leading-tight">
            Aprenda com Quem Faz<br />
            <em className="italic font-normal text-[#e1bebe]">na Prática</em>
          </h1>
          <p className="font-['Manrope'] text-lg text-[#e1bebe] max-w-2xl mx-auto leading-relaxed mb-10">
            Formações presenciais e online conduzidas pela equipe Palomares Beauty. Cursos certificados para profissionais da estética que buscam excelência técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#cursos" className="bg-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold uppercase tracking-[0.12em] px-8 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all">
              Ver Cursos Disponíveis
            </a>
            <CTAPrivado variant="outline" />
          </div>
        </div>
      </section>

      {/* ===== BANNER SISTEMA ONLINE ===== */}
      <section className="bg-[#543C3C] py-8">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#CAB2A1] text-4xl">school</span>
            <div>
              <p className="font-['Manrope'] font-bold text-white text-base">
                {user ? `Bem-vinda de volta!` : 'Já é aluna da Palomares?'}
              </p>
              <p className="font-['Manrope'] text-[#e1bebe] text-sm">
                {user
                  ? 'Acesse sua área privada para continuar seus treinamentos.'
                  : 'Faça login para acessar seus treinamentos, certificados e materiais exclusivos.'}
              </p>
            </div>
          </div>
          <CTAPrivado />
        </div>
      </section>

      {/* ===== CURSOS ===== */}
      <section className="py-20 md:py-32 max-w-[1280px] mx-auto px-6 md:px-10" id="cursos">
        <div className="text-center mb-16 sp-reveal">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-3 block">
            Catálogo de Cursos
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C]">Nossas Formações</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CURSOS.map(({ icon, titulo, nivel, duracao, modalidade, desc, destaques }, i) => (
            <div
              key={titulo}
              className="bg-white rounded-xl border border-[#E5E0D8] hover:border-[#CAB2A1] hover:shadow-lg transition-all duration-300 overflow-hidden sp-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card header */}
              <div className="bg-[#f9f2f1] p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-[#543C3C] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#CAB2A1]">{icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display'] text-xl text-[#543C3C] mb-2">{titulo}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.12em] bg-[#CAB2A1]/20 text-[#8E7E73] px-2 py-0.5 rounded">
                      {nivel}
                    </span>
                    <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.12em] bg-[#CAB2A1]/20 text-[#8E7E73] px-2 py-0.5 rounded">
                      {duracao}
                    </span>
                    <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.12em] bg-[#CAB2A1]/20 text-[#8E7E73] px-2 py-0.5 rounded">
                      {modalidade}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="font-['Manrope'] text-sm text-[#8E7E73] mb-6 leading-relaxed">{desc}</p>
                <ul className="space-y-2 mb-8">
                  {destaques.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#CAB2A1] text-base flex-shrink-0 mt-0.5">check_circle</span>
                      <span className="font-['Manrope'] text-sm text-[#8E7E73]">{d}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/5565981501744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#543C3C] text-white font-['Manrope'] font-bold text-sm uppercase tracking-[0.1em] py-3 rounded-lg text-center hover:bg-opacity-85 active:scale-95 transition-all"
                  >
                    Solicitar Informações
                  </a>
                  <CTAPrivado variant="outline" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== POR QUE TREINAR COM A GENTE ===== */}
      <section className="bg-[#f4eceb] py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 sp-reveal">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C]">
              Por que se Formar com a Palomares?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'workspace_premium',
                titulo: 'Metodologia Exclusiva',
                desc: 'Técnicas proprietárias desenvolvidas e aprimoradas ao longo de anos de prática clínica de alto padrão.',
              },
              {
                icon: 'verified',
                titulo: 'Certificação Reconhecida',
                desc: 'Certificado digital com validação e registro no nosso sistema de cursos online. Acesso vitalício ao material.',
              },
              {
                icon: 'support_agent',
                titulo: 'Suporte Contínuo',
                desc: 'Acesso ao grupo exclusivo de alunas para dúvidas, revisão de casos e atualização constante das técnicas.',
              },
            ].map(({ icon, titulo, desc }, i) => (
              <div
                key={titulo}
                className="text-center sp-reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-[#543C3C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-[#CAB2A1] text-2xl">{icon}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl text-[#543C3C] mb-4">{titulo}</h3>
                <p className="font-['Manrope'] text-sm text-[#8E7E73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ÁREA PRIVADA ===== */}
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center sp-reveal">
          <div className="inline-flex items-center gap-2 bg-[#CAB2A1]/20 text-[#543C3C] font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-8">
            <span className="material-symbols-outlined text-base">lock</span>
            Área Exclusiva para Alunas
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#543C3C] mb-8 leading-tight">
            Acesse sua Plataforma<br />
            <em className="italic font-normal text-[#CAB2A1]">de Treinamentos</em>
          </h2>
          <p className="font-['Manrope'] text-lg text-[#8E7E73] mb-12 leading-relaxed">
            Como aluna da Palomares Beauty, você tem acesso exclusivo à nossa plataforma digital: materiais de aula, biblioteca de conteúdos, certificados, vídeos e muito mais. Tudo em um só lugar.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
            {[
              { icon: 'video_library', text: 'Biblioteca de videoaulas exclusivas' },
              { icon: 'description', text: 'Materiais didáticos em PDF' },
              { icon: 'workspace_premium', text: 'Certificados digitais' },
              { icon: 'cloud_upload', text: 'Upload de trabalhos práticos' },
              { icon: 'dashboard', text: 'Dashboard de progresso' },
              { icon: 'group', text: 'Comunidade de alunas' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-[#f9f2f1] rounded-lg p-4">
                <span className="material-symbols-outlined text-[#CAB2A1]">{icon}</span>
                <span className="font-['Manrope'] text-sm text-[#543C3C] font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={user ? '/dashboard' : '/login'}
              className="inline-flex items-center justify-center gap-2 bg-[#543C3C] text-white font-['Manrope'] font-bold uppercase tracking-[0.12em] px-10 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all shadow-lg text-sm"
            >
              <span className="material-symbols-outlined">lock_open</span>
              {user ? 'Acessar Meu Dashboard' : 'Fazer Login na Plataforma'}
            </Link>
            {!user && (
              <a
                href="https://wa.me/5565981501744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold uppercase tracking-[0.12em] px-10 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all text-sm"
              >
                <span className="material-symbols-outlined">chat</span>
                Quero me Inscrever
              </a>
            )}
          </div>
          {!user && (
            <p className="font-['Manrope'] text-xs text-[#8E7E73] mt-6">
              Ainda não é aluna?{' '}
              <a
                href="https://wa.me/5565981501744"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#543C3C] font-bold underline decoration-[#CAB2A1] hover:text-[#CAB2A1] transition-colors"
              >
                Entre em contato via WhatsApp
              </a>{' '}
              para saber sobre as próximas turmas.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
