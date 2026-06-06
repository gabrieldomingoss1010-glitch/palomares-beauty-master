import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import flaviaPalomares from '../../assets/flavia_palomares.jpg';

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
              alt="Dra. Flavia Palomares"
            />
          </div>
          <div className="md:pl-8 sp-reveal">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-8">Nossa História</h2>
            <div className="space-y-5 font-['Manrope'] text-lg text-[#8E7E73] leading-relaxed">
              <p>
                Fundada pela Dra. Flavia Palomares, a clínica nasceu de uma visão singular: transformar a estética em uma experiência de cuidado profundo, onde cada detalhe é milimetricamente planejado.
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHEZNOCmJq0ehMGun4WjLKUvWNmcUqtIVFaZh0vQViLHSTh75QJ9Yr08SjiBhJwQji9dRY_9te8ariA1TV9eCm2l_oM3rrZQvB3QJLXdZyFy2lUE53WKB4VqsEsj5kosITNLfxv60HzW4n9q4BVWg8hrlqlXerIMM4hEOGK6Gf2QTVvTX7bPYQnf7smkRFbHf2JNyrZ_ltclnKSlimn7QxEDAlwNWRHECTLeuMckOUX7qQgYUndUJ-HaicK7cSfB4QJyf-gjYWi8JU"
                alt="Recepção da clínica"
              />
            </div>
            <div className="sp-image-reveal h-80 md:h-[500px] bg-[#f4eceb] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAMSvp7nyTIsXTwhNuFf21XlwfKYlLnfYn9Yh3P8t65xoEeDBee4lLkHMu3H_C6CPSDPwyrGETnTQJjLNvWGb5xJt3_GFRWMNDLHicwqd9hBGlRe9gost0BLUODPVcw-fB38Ojeiiy-lpEvq8YG0kGd8h1GjOg_7D1-dec-Ub8vA3B6tklPgZ36MIRZPK-iTjhu-4RwAlTjSk5Zw8bFldYPcrOOiR7aVWh3MwtEv-5ODqeXwOkuUAlKRHk52f6BXQaIE_6J0eg8tmD"
                alt="Sala de procedimentos"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CERTIFICAÇÕES ===== */}
      <section className="py-24 border-t border-[#d3c3c2]/30">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E7E73] opacity-60 block mb-12">
            Parceiros em Tecnologia e Ciência
          </span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
            {['Sculptra', 'RADIESSE', 'ULTRAFORMER', 'botox', 'RESTYLANE'].map((brand) => (
              <div key={brand} className="font-['Playfair_Display'] text-2xl font-semibold text-[#543C3C] italic">
                {brand}
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-[#f9f2f1] border border-[#d3c3c2]/20 inline-block max-w-2xl rounded-lg sp-reveal">
            <h4 className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.2em] text-[#543C3C] mb-4">
              Protocolos Certificados
            </h4>
            <p className="font-['Manrope'] text-[#8E7E73] leading-relaxed">
              Utilizamos apenas produtos de procedência garantida e tecnologias aprovadas pela ANVISA e FDA, assegurando segurança absoluta em cada procedimento realizado.
            </p>
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
