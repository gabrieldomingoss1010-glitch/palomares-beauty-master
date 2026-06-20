import { useEffect, useState } from 'react';
import imgNanoFio from '../../assets/nano_fio_pos_laser.jpeg';
import imgNanoLabial from '../../assets/nano_labial.jpeg';
import imgLimpeza from '../../assets/limpeza_de_pele.jpeg';
import imgHidroGloss from '../../assets/hidrogloss.jpeg';

const FILTROS = ['TODOS', 'SOBRANCELHAS', 'LÁBIOS', 'PELE'];

const RESULTADOS = [
  {
    img: imgNanoFio,
    alt: 'Nano Fio Pós-Laser',
    titulo: 'Nano Fio Pós-Laser',
    desc: 'Técnica avançada para reconstrução e preenchimento de sobrancelhas após tratamentos a laser, proporcionando um efeito extremamente natural e harmonioso.',
    tags: ['SOBRANCELHAS'],
  },
  {
    img: imgNanoLabial,
    alt: 'Nano Labial',
    titulo: 'Nano Labial',
    desc: 'Procedimento que realça a beleza natural dos lábios, promovendo definição, uniformização da tonalidade e aparência saudável com resultado delicado e sofisticado.',
    tags: ['LÁBIOS'],
  },
  {
    img: imgLimpeza,
    alt: 'Limpeza de Pele',
    titulo: 'Limpeza de Pele',
    desc: 'Tratamento essencial para remover impurezas, controlar a oleosidade e revitalizar a pele, deixando-a mais limpa, saudável e luminosa.',
    tags: ['PELE'],
  },
  {
    img: imgHidroGloss,
    alt: 'HidroGloss',
    titulo: 'HidroGloss',
    desc: 'Protocolo de hidratação profunda para os lábios, devolvendo maciez, brilho e aspecto saudável, ideal para combater ressecamento e melhorar a aparência labial.',
    tags: ['LÁBIOS'],
  },
];

export default function Resultados() {
  const [filtroAtivo, setFiltroAtivo] = useState('TODOS');

  useEffect(() => {
    document.title = 'Resultados | Palomares Beauty';
  }, []);

  const resultadosFiltrados = filtroAtivo === 'TODOS'
    ? RESULTADOS
    : RESULTADOS.filter(r => r.tags.includes(filtroAtivo));

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 sp-reveal">
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-4 block">
              Transformações Reais
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#543C3C] mb-8 leading-tight">
              A Ciência da{' '}
              <em className="italic font-normal">Beleza Natural.</em>
            </h1>
            <p className="font-['Manrope'] text-lg text-[#8E7E73] max-w-xl leading-relaxed">
              Nossa galeria de resultados reflete o compromisso com a harmonia facial e a excelência clínica. Cada protocolo é desenhado para realçar sua melhor versão, sem perder a essence.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end pb-4 sp-reveal">
            <div className="bg-[#f4eceb] p-8 border-l-4 border-[#CAB2A1] rounded-r-lg">
              <p className="font-['Playfair_Display'] text-4xl font-bold text-[#543C3C] mb-1">+5.000</p>
              <p className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1]">
                Protocolos de Sucesso em 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTROS ===== */}
      <section className="sticky top-[72px] z-40 bg-[#FBF9F4]/95 backdrop-blur-sm border-y border-[#d3c3c2]/30 py-4 mb-12 overflow-x-auto">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex gap-4 md:gap-6 items-center whitespace-nowrap">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#543C3C] mr-2">
            Filtrar por:
          </span>
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltroAtivo(f)}
              className={`font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 transition-all ${
                filtroAtivo === f
                  ? 'text-[#543C3C] border-b-2 border-[#543C3C]'
                  : 'text-[#8E7E73] hover:text-[#543C3C]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ===== GALERIA ===== */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
          {resultadosFiltrados.map(({ img, alt, titulo, desc, tags }, i) => (
            <div key={titulo} className={`group sp-reveal ${i % 2 === 1 ? 'md:mt-20' : ''}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative overflow-hidden aspect-[4/5] bg-[#f4eceb] mb-8 rounded-lg">
                <img
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  src={img}
                  alt={alt}
                />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#543C3C]">
                    Antes
                  </span>
                  <span className="bg-[#543C3C]/90 backdrop-blur px-3 py-1 font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Depois
                  </span>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap mb-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-1 bg-[#CAB2A1]/10 text-[#CAB2A1] border border-[#CAB2A1]/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#543C3C] mb-2">{titulo}</h3>
              <p className="font-['Manrope'] text-sm text-[#8E7E73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 text-center sp-reveal">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl text-[#543C3C] mb-8">
          Inicie sua Própria<br />Jornada de Beleza.
        </h2>
        <p className="font-['Manrope'] text-lg text-[#8E7E73] max-w-2xl mx-auto mb-12 leading-relaxed">
          Agende uma avaliação personalizada e descubra qual protocolo é o mais indicado para suas necessidades.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5565981501744"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#543C3C] text-white font-['Manrope'] font-bold uppercase tracking-[0.12em] px-12 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all shadow-lg"
          >
            Agendar Consulta
          </a>
          <a
            href="https://wa.me/5565981501744"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold uppercase tracking-[0.12em] px-12 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </>
  );
}
