import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    document.title = 'Palomares Beauty | A Essência da Beleza Natural';
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevyZHSduHiRVGWXwg3WC_lwqDB0r6G96TfZa62a3_ACqay8yPlSeu7s-53PLjsojfHSyCtexkRbxtL63Tiz0jX7ixJ0Mbb11hfxcgQfmn5GsVOINXI-wBZ3_3Y2zTb-kHiyQ5FaTyJlD1qe_Bntx-KOYC-eF4AGGoasj6R0Ni84Y-TggkYw4h2X7Vho1pDh8aRd8e5HRfQkUUJ2kEJFe7NFhfHt2o24Y_J9pVi9knYL-yUwRAUUi9sypQ-09UO1IPfczmV4FCexqs"
            alt="Ambiente de clínica estética luxuosa"
          />
          <div className="absolute inset-0 sp-hero-gradient" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 w-full">
          <div className="max-w-2xl sp-reveal active">
            <span className="inline-block font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#CAB2A1] mb-4">
              Bem-vinda à Palomares
            </span>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-semibold text-[#543C3C] mb-6 leading-tight">
              A Essência da{' '}
              <span className="italic font-normal">Beleza Natural</span>
            </h1>
            <p className="font-['Manrope'] text-lg text-[#8E7E73] mb-10 max-w-lg leading-relaxed">
              Aliamos ciência avançada e sensibilidade artística para realçar sua melhor versão através de cuidados estéticos de alto padrão em um ambiente de serenidade absoluta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5565981501744"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#543C3C] text-white font-['Manrope'] font-bold px-8 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all text-center"
              >
                Agendar Avaliação
              </a>
              <Link
                to="/procedimentos"
                className="border-2 border-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold px-8 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all text-center"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILOSOFIA ===== */}
      <section className="bg-[#FBF9F4] py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center text-center gap-16">
            <div className="sp-reveal max-w-3xl mx-auto">
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-8">Nossa Filosofia</h2>
              <div className="space-y-5 text-[#8E7E73] font-['Manrope'] text-lg leading-relaxed">
                <p>
                  Na Palomares Beauty, temos excelência em cada detalhe, do primeiro contato ao pós-atendimento. Compromisso real com resultados visíveis e consistentes. Respeito à individualidade e à beleza única de cada cliente.
                </p>
                <p>
                  Atendimento consultivo, personalizado e altamente estratégico — com escuta ativa para entender desejos, não apenas executar procedimentos. Jornada premium: acolhimento, diagnóstico e acompanhamento contínuo.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sp-reveal w-full max-w-5xl mx-auto">
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKBVr4EYmgbzbg6PCIBAj8ALTrIZiOMbAwhqhHs-ZLw-2QGT82Cd_4LEGpAu2HeTqeItq1UWWb-Qozrr5faocfny3EtkHwveC34QF4g9n4eyT9VaJVstkLpuz6MQAHmbIIkx3D8tNLTJiTJ3rFFvXFg2Of1hPdzPK0SoQAZV2Ftr-6BTsppYrc58iBYjeypg6x2PhM601Mv88Q0DylwDQDYz393jFgnxgirQ-mOuR2YQyAx9gt2aL3OGQaD3ZhMNbDy3FDAdrkGlzU"
                alt="Resultado do procedimento Hidragloss"
              />
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-D8ZWHc8Nj5RSl1xS9lQMGKjFVLJqkpzeInKvCOWpUUPQnUIv-C-kYYQpFzxcQceFLbnVaB67fQqignFhkMACjR3Yi12pwn4eGRGn2lNsSnoQLnBZm0_F8TSaee4HwTFTd7N20YHJjlhD3bCtZcW96ao0DpxWALuywwEKlFaN1begz2aom3ZT02t9a0tCvwhRn7kMDCzGub4xj9Iy1n4eMYk1X68TOocPAI52GbUM_W2LZ6w3fifpeAeh15UHNDOLsLgE0VUZD4VG"
                alt="Profissional realizando procedimento de sobrancelhas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS PREVIEW ===== */}
      <section className="bg-[#f9f2f1] py-20 md:py-32" id="servicos">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 sp-reveal">
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-3 block">
              Especialidades
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C]">Tratamentos Sob Medida</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: 'face', title: 'Pele', desc: 'Protocolos de rejuvenescimento e hidratação profunda.', dark: false },
              { icon: 'visibility', title: 'Sobrancelhas', desc: 'Design estratégico para realçar o seu olhar naturalmente.', dark: false },
              { icon: 'spa', title: 'Lábios', desc: 'Revitalização labial com foco em cor e contorno suave.', dark: false },
              { icon: 'eye_tracking', title: 'Cílios', desc: 'Extensões delicadas que imitam o fio natural.', dark: false },
              { icon: 'clinical_notes', title: 'Avaliação', desc: 'Análise personalizada para o seu plano de beleza.', dark: true },
            ].map(({ icon, title, desc, dark }, i) => (
              <div
                key={title}
                className={`group p-8 rounded-lg transition-all duration-500 hover:-translate-y-2 sp-reveal ${
                  dark
                    ? 'bg-[#543C3C] text-white'
                    : 'bg-white border border-[#E5E0D8] hover:shadow-xl hover:border-[#CAB2A1]'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="material-symbols-outlined text-[#CAB2A1] text-3xl mb-6 block">{icon}</span>
                <h3
                  className={`font-['Playfair_Display'] text-2xl mb-4 ${dark ? 'text-white' : 'text-[#543C3C]'}`}
                >
                  {title}
                </h3>
                <p className={`font-['Manrope'] text-sm mb-6 ${dark ? 'text-[#e1bebe]' : 'text-[#8E7E73]'}`}>
                  {desc}
                </p>
                <Link
                  to="/procedimentos"
                  className={`font-['Manrope'] font-bold text-sm inline-flex items-center gap-1 transition-all group-hover:gap-2 ${
                    dark ? 'text-[#CAB2A1]' : 'text-[#543C3C]'
                  }`}
                >
                  {dark ? 'Agendar Agora' : 'Ver Detalhes'}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOBRE PROFISSIONAL ===== */}
      <section className="py-20 md:py-32 overflow-hidden" id="sobre">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <div className="w-full lg:w-1/2 relative sp-reveal">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#CAB2A1]/20 rounded-full blur-3xl" />
              <div className="relative z-10 border-8 border-white shadow-2xl rounded-lg overflow-hidden">
                <img
                  alt="Profissional Palomares Beauty"
                  className="w-full aspect-[0.67] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvswADrH5JsPIRQjCkhRUDjjYxNzIFQFBhp73vf-EJVF45tBU6sXxb8HJ1d9Q1LIIDB1NGtmCgKYZ1OKNQQpvo0oxg3hDrOm09Am0tHpQwt3aM170rY0AAsAK-54KTtDPiMkeRMrGZ2Khg1_zZYy7qi-Q6C87Qg82jW2YKQnKVcGL6rXtbARHWWnnRTUcATqvvjHFhZsVtA3WV0n9MBWVEL8Zc6lDEAmiGxU1Xpu2U1HTrRBQ6hUq-5IHyDl2mXhYL3DYvd7ixFmYG"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 sp-reveal" style={{ transitionDelay: '200ms' }}>
              <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-6">Excelência & Dedicação</h2>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#CAB2A1] mb-6">Flavia Palomares</h3>
              <p className="font-['Manrope'] text-lg text-[#8E7E73] mb-8 leading-relaxed">
                Com especialização internacional e um olhar voltado para a estética humanizada, Flavia Palomares fundou a clínica para ser um refúgio onde a técnica se encontra com a arte. Sua trajetória é marcada pela busca incessante por protocolos que respeitem a anatomia e a saúde da pele.
              </p>
              <Link
                to="/sobre"
                className="inline-block bg-[#543C3C] text-white font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all"
              >
                Saiba mais sobre a clínica
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="bg-[#FBF9F4] py-20 md:py-32 border-y border-[#d3c3c2]/30" id="resultados">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16 sp-reveal">
            <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-3 block">
              Experiências
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C]">O que dizem nossas pacientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: '"Conheço a Flávia desde a época em que ela trabalhava em sua casa: sempre foi uma profissional impecável, gentil e alegre. Agora, em sua clínica, não poderia ser diferente. Só faço minhas sobrancelhas lá. Não encontrei nenhuma outra profissional que supere a precisão e o perfeccionismo dela."',
                name: 'Isabella Ariane',
                role: 'Paciente',
              },
              {
                text: '"Minha experiência na Palomares foi perfeita, desde a chegada fui recebida com muito carinho. As meninas são maravilhosas e o atendimento impecável. Utilizam os melhores produtos do mercado. Com certeza voltarei e indico muito!"',
                name: 'Lorena Carvalho',
                role: 'Paciente',
              },
            ].map(({ text, name, role }, i) => (
              <div
                key={name}
                className="bg-white p-10 rounded-xl border border-[#CAB2A1]/20 shadow-sm flex flex-col sp-reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-[#CAB2A1] mb-6">
                  <span className="material-symbols-outlined text-4xl">format_quote</span>
                </div>
                <p className="font-['Manrope'] text-lg italic text-[#8E7E73] mb-8 flex-1">{text}</p>
                <div>
                  <p className="font-['Manrope'] font-bold text-[#543C3C]">{name}</p>
                  <p className="font-['Manrope'] text-sm text-[#8E7E73]">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA CONTATO ===== */}
      <section className="py-20 md:py-32 bg-[#f4eceb]" id="contato">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center sp-reveal">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#543C3C] mb-6">
              Pronta para realçar sua beleza natural?
            </h2>
            <p className="font-['Manrope'] text-lg text-[#8E7E73] mb-12">
              Agende sua avaliação personalizada e descubra o plano ideal para as suas necessidades. Estamos ansiosas para recebê-la em nosso espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5565981501744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#543C3C] text-white font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">chat</span>
                Agendar via WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center border-2 border-[#CAB2A1] text-[#543C3C] font-['Manrope'] font-bold px-10 py-4 rounded-lg hover:bg-[#CAB2A1] hover:text-white active:scale-95 transition-all"
              >
                Ver Outras Formas de Contato
              </Link>
            </div>
            <p className="font-['Manrope'] text-[#8E7E73] mt-6">
              Ou ligue: <span className="font-bold text-[#543C3C]">65 98150-1744</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
