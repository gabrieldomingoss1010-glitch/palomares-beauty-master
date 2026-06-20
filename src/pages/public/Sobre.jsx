import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import flaviaPalomares from '../../assets/flavia_palomares.jpg';
import espaco1 from '../../assets/espaco_1.jpg';
import espaco2 from '../../assets/espaco_2.jpg';

export default function Sobre() {
  useEffect(() => {
    document.title = 'Sobre Nós | Palomares Beauty';
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <header className="relative w-full h-[70vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[20%] opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdwRgqBTJBc8dnx-H-hxw5BdM_lOmtk_q4J-wotxgK8i3T-25tjGaT70i2Q1gLzsL5e1_fz-I5WWscDUzPUGbJQZCzBTr4PqBpl3hVNB_fqHZg70NWVSbON8XQ6sbaiquxUmVYVSdBAelCppM5knOJdWsT0WXaxX_U2bigNc3yBr3-z52TI9nVi03Dpe-UCX2WpRVsvLxfuYNEYqPQNs_3AwacJkxFZoxpIrk9seKC3r5rjbjeIR_Bk-H-vYl4IQbUrRU_1701BY8-"
            alt="Interior da clínica Palomares Beauty"
          />
          <div className="absolute inset-0 sp-hero-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.3em] text-[#CAB2A1] block mb-6">
            Excelência em Dermatologia
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#543C3C] mb-8">
            A Ciência por Trás da Beleza Atemporal
          </h1>
          <p className="font-['Manrope'] text-lg text-[#8E7E73] max-w-2xl mx-auto italic">
            Onde o rigor médico encontra a sofisticação da estética de luxo para criar resultados que honram a sua essência.
          </p>
        </div>
      </header>

      {/* ===== HISTÓRIA ===== */}
      <section className="py-24 md:py-32 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="sp-image-reveal aspect-[4/5] bg-[#f4eceb] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={flaviaPalomares}
              alt="Flavia Palomares"
            />
          </div>
          <div className="md:pl-8 sp-reveal">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-8">Nossa História</h2>
            <div className="space-y-5 font-['Manrope'] text-lg text-[#8E7E73] leading-relaxed">
              <p>
                Fundada pela Flavia Palomares, a clínica nasceu de uma visão singular: transformar a estética em uma experiência de cuidado profundo, onde cada detalhe é milimetricamente planejado.
              </p>
              <p>
                Na Palomares Beauty, acreditamos que a estética vai muito além dos procedimentos. Nosso propósito é proporcionar uma experiência de cuidado, acolhimento e reconexão, onde cada mulher se sinta valorizada, compreendida e única.
              </p>
              <p>
                Oferecemos um atendimento consultivo, personalizado e altamente estratégico, baseado na escuta ativa e na compreensão dos desejos, expectativas e necessidades de cada cliente. Não enxergamos pessoas como números ou procedimentos agendados, mas como histórias, objetivos e individualidades que merecem atenção genuína.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="w-12 h-px bg-[#CAB2A1]" />
              <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#CAB2A1] italic">
                Assinatura de Excelência
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFRAESTRUTURA ===== */}
      <section className="py-24 bg-[#f9f2f1]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl sp-reveal">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-4">Um Espaço de Respiro</h2>
              <p className="font-['Manrope'] text-lg text-[#8E7E73] leading-relaxed">
                Nossa infraestrutura foi desenhada para oferecer conforto térmico, acústico e visual. Cada sala é um santuário de tecnologia envolto em design neo-modernista.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="sp-image-reveal h-80 md:h-[500px] bg-[#f4eceb] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={espaco1}
                alt="Recepção da clínica"
              />
            </div>
            <div className="sp-image-reveal h-80 md:h-[500px] bg-[#f4eceb] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={espaco2}
                alt="Sala de procedimentos"
              />
            </div>
          </div>
        </div>
      </section>



      {/* ===== CTA ===== */}
      <section className="bg-[#543C3C] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-4xl text-white mb-6">Venha nos Conhecer</h2>
          <p className="font-['Manrope'] text-[#e1bebe] text-lg mb-10 leading-relaxed">
            Agende uma visita e experimente pessoalmente o ambiente que criamos para cuidar de você.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 border-2 border-[#CAB2A1] text-white font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-[#543C3C] active:scale-95 transition-all"
          >
            Entrar em Contato
          </Link>
        </div>
      </section>
    </>
  );
}
