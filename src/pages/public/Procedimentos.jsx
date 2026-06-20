import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PROCEDIMENTOS = [
  {
    categoria: 'Pele',
    icon: 'face',
    desc: 'Cuidados avançados para uma derme saudável, luminosa e rejuvenescida através de tecnologias de ponta.',
    items: [
      { nome: 'Depilação de Buço', desc: 'Remoção delicada e duradoura para uma região suave e livre de imperfeições.', icon: 'face' },
      { nome: 'Limpeza de Pele', desc: 'Protocolo profundo de higienização e extração, devolvendo o viço e a saúde aos poros.', icon: 'water_drop' },
      { nome: 'Lifting Facial', desc: 'Técnicas manuais e tecnológicas para reposicionamento tecidual e contorno definido.', icon: 'auto_awesome' },
      { nome: 'Peeling Hollywood', desc: 'O segredo das celebridades: renovação celular imediata e brilho instantâneo sem downtime.', icon: 'star' },
      { nome: 'Laser CO2', desc: 'Tratamento fracionado potente para cicatrizes, manchas e rejuvenescimento estrutural profundo.', icon: 'blur_on' },
      { nome: 'Ultraformer III', desc: 'Ultrassom micro e macrofocado para ancoragem muscular e redução de gordura localizada.', icon: 'bolt' },
    ],
  },
  {
    categoria: 'Sobrancelhas',
    icon: 'architecture',
    desc: 'Arquitetura do olhar através de métodos exclusivos e restauração de fios naturais.',
    items: [
      { nome: 'Design & Método RSP', desc: 'Nosso método exclusivo RSP analisa a visagismo facial para criar o design perfeito, respeitando sua anatomia única.', icon: 'architecture' },
      { nome: 'Nanofios Realistas', desc: 'A evolução da micropigmentação. Fios ultra finos e hiper-realistas que preenchem falhas com naturalidade absoluta.', icon: 'flare' },
      { nome: 'Reconstrução', desc: 'Protocolo para estimular o nascimento de novos fios.', icon: 'healing' },
      { nome: 'Laser', desc: 'Remoção segura de pigmentos antigos e indesejados.', icon: 'bolt' },
      { nome: 'Reparo Tecidual', desc: 'Saúde da pele na região das sobrancelhas.', icon: 'spa' },
      { nome: 'Lamination', desc: 'Efeito volumoso e alinhamento moderno dos fios.', icon: 'auto_fix_high' },
    ],
  },
  {
    categoria: 'Lábios',
    icon: 'spa',
    desc: 'Harmonia, cor e hidratação profunda. Descubra como revitalizar seus lábios com sutileza.',
    items: [
      { nome: 'Hidragloss', desc: 'Hidratação ultra profunda com entrega de vitaminas.', icon: 'water' },
      { nome: 'Nanolabial', desc: 'Pigmentação suave para definição e cor duradoura sem o efeito de batom pesado.', icon: 'palette' },
      { nome: 'SPA Labial', desc: 'Esfoliação e nutrição intensa para lábios ressecados e sem vitalidade.', icon: 'local_florist' },
    ],
  },
  {
    categoria: 'Cílios & Avaliação',
    icon: 'visibility',
    desc: 'Extensões naturais e análise personalizada para o seu plano de beleza.',
    items: [
      { nome: 'Lash Lifting', desc: 'Curvatura e tingimento dos seus próprios cílios. Um olhar aberto e radiante sem a necessidade de extensões sintéticas.', icon: 'visibility' },
      { nome: 'Avaliação Personalizada', desc: 'O primeiro passo para sua transformação. Uma consulta detalhada para entender suas necessidades e traçar um plano de tratamento exclusivo.', icon: 'assignment_ind' },
    ],
  },
];

export default function Procedimentos() {
  useEffect(() => {
    document.title = 'Procedimentos | Palomares Beauty';
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 text-center sp-reveal">
        <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-4 block">
          Excelência em Estética
        </span>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#543C3C] mb-6">Nossos Procedimentos</h1>
        <p className="font-['Manrope'] text-lg text-[#8E7E73] max-w-2xl mx-auto leading-relaxed">
          Uma curadoria de tratamentos faciais e corporais desenhados para realçar sua beleza natural com a precisão técnica que você merece.
        </p>
      </section>

      {/* ===== CATEGORIAS ===== */}
      {PROCEDIMENTOS.map(({ categoria, desc, items }, catIdx) => (
        <section
          key={categoria}
          className={`py-16 md:py-24 border-t border-[#d3c3c2]/30 ${catIdx % 2 === 1 ? 'bg-[#f4eceb]' : ''}`}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            {/* Category header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 sp-reveal">
              <div>
                <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-2 block">
                  Categoria
                </span>
                <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C]">{categoria}</h2>
              </div>
              <p className="font-['Manrope'] text-[#8E7E73] max-w-md leading-relaxed">{desc}</p>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(({ nome, desc: itemDesc, icon }, i) => (
                <div
                  key={nome}
                  className="bg-white p-8 rounded-lg border border-[#E5E0D8] hover:border-[#CAB2A1] hover:-translate-y-1 transition-all duration-300 sp-reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-['Playfair_Display'] text-xl text-[#543C3C]">{nome}</h3>
                    <span className="material-symbols-outlined text-[#CAB2A1]">{icon}</span>
                  </div>
                  <p className="font-['Manrope'] text-sm text-[#8E7E73] mb-6 leading-relaxed">{itemDesc}</p>
                  <a
                    href="https://wa.me/5565981501744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Manrope'] font-bold text-sm text-[#543C3C] border-b border-[#543C3C] hover:border-[#CAB2A1] hover:text-[#CAB2A1] transition-all inline-block"
                  >
                    Saiba Mais
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-[#543C3C] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-4xl text-white mb-6">Pronta para começar?</h2>
          <p className="font-['Manrope'] text-[#e1bebe] text-lg mb-10 leading-relaxed">
            Agende uma avaliação personalizada e deixe nossa equipe criar o protocolo ideal para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5565981501744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#543C3C] font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Agendar via WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center border-2 border-[#CAB2A1] text-white font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-[#543C3C] active:scale-95 transition-all"
            >
              Outras Formas de Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
