import { useEffect } from 'react';

export default function Contato() {
  useEffect(() => {
    document.title = 'Contato | Palomares Beauty';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const service = e.target.service.value;
    const msg = e.target.message.value;
    const text = encodeURIComponent(
      `Olá! Meu nome é ${name}.\nTelefone: ${phone}\nInteresse: ${service}\n${msg ? 'Mensagem: ' + msg : ''}`
    );
    window.open(`https://wa.me/5565981501744?text=${text}`, '_blank');
  };

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[55vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover grayscale-[20%]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdQIG9yale-nadhX0z6XgR2GsytEDnx1l28gpwIERdv1SjrkrdcAeGPnEpOrH-4i-DZf5c_YEo6worrf32ZgdW_euD3QxJ54xSUL1dpbA26HVm-wSckAkPfEoPxNc7LEoyyMNHr1iQ3GP2mbjBb2beTQt6xwbwSbHKjuvAXw13XZYIC-sX6rzu7O9V3ppdHS15T-a6CTOLdce4M1qmCNU0vdAiCAYVXOhZkIiO4qI01vG9SNWXzW0c8kX01NJ81EnfMupoBhD3EXWe"
            alt="Contato Palomares Beauty"
          />
          <div className="absolute inset-0 bg-white/40 sp-hero-gradient" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.3em] text-[#CAB2A1] block mb-6">
            Contato & Agendamento
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-[#543C3C] mb-8">
            Reserve seu momento de excelência
          </h1>
          <p className="font-['Manrope'] text-lg text-[#8E7E73] max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para planejar seu atendimento personalizado.
          </p>
        </div>
      </section>

      {/* ===== CONTATO GRID ===== */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form */}
        <div className="lg:col-span-7 bg-[#f9f2f1] p-10 md:p-14 rounded-xl sp-luxury-shadow">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#543C3C] mb-10">Solicite um Contato</h2>
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative pt-5">
                <label className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] absolute top-0">
                  Nome Completo
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Como podemos chamá-la?"
                  className="w-full bg-transparent border-b border-[#d3c3c2] py-3 font-['Manrope'] text-[#543C3C] placeholder:text-[#d3c3c2] focus:outline-none focus:border-[#543C3C] transition-colors"
                />
              </div>
              <div className="relative pt-5">
                <label className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] absolute top-0">
                  WhatsApp
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full bg-transparent border-b border-[#d3c3c2] py-3 font-['Manrope'] text-[#543C3C] placeholder:text-[#d3c3c2] focus:outline-none focus:border-[#543C3C] transition-colors"
                />
              </div>
            </div>
            <div className="relative pt-5">
              <label className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] absolute top-0">
                Procedimento de Interesse
              </label>
              <select
                name="service"
                className="w-full bg-transparent border-b border-[#d3c3c2] py-3 font-['Manrope'] text-[#543C3C] focus:outline-none focus:border-[#543C3C] transition-colors appearance-none cursor-pointer"
              >
                <option>Design de Sobrancelhas</option>
                <option>Nanopigmentação</option>
                <option>Revitalização Labial</option>
                <option>Lash Lifting</option>
                <option>Tratamento de Pele</option>
                <option>Avaliação Personalizada</option>
                <option>Treinamentos & Cursos</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="relative pt-5">
              <label className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] absolute top-0">
                Mensagem (opcional)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Conte-nos brevemente sua necessidade..."
                className="w-full bg-transparent border-b border-[#d3c3c2] py-3 font-['Manrope'] text-[#543C3C] placeholder:text-[#d3c3c2] focus:outline-none focus:border-[#543C3C] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#543C3C] text-white font-['Manrope'] font-bold uppercase tracking-[0.2em] py-4 px-12 rounded-lg hover:bg-opacity-85 active:scale-95 transition-all sp-luxury-shadow w-full md:w-auto"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>

        {/* Side info */}
        <div className="lg:col-span-5 space-y-10">
          {/* WhatsApp */}
          <div className="bg-[#f4eceb] p-8 rounded-xl border border-[#CAB2A1]/20">
            <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-4 block">
              Atendimento Imediato
            </span>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#543C3C] mb-6">Fale agora pelo WhatsApp</h3>
            <a
              href="https://wa.me/5565981501744"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white rounded-lg hover:bg-[#CAB2A1]/5 transition-colors sp-luxury-shadow mb-3"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#CAB2A1]">chat_bubble</span>
                <div>
                  <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.1em] text-[#8E7E73]">Palomares Beauty</p>
                  <p className="font-['Manrope'] font-semibold text-[#543C3C]">65 98150-1744</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#CAB2A1]">arrow_forward</span>
            </a>
          </div>

          {/* Horários */}
          <div className="p-4">
            <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#CAB2A1] mb-5 block">
              Horários de Atendimento
            </span>
            <div className="space-y-3">
              {[
                { day: 'Segunda — Sexta', hours: '08:00 — 20:00' },
                { day: 'Sábados', hours: '09:00 — 14:00' },
                { day: 'Domingos e Feriados', hours: 'Fechado' },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between border-b border-[#d3c3c2]/40 pb-2">
                  <span className="font-['Manrope'] text-sm text-[#8E7E73]">{day}</span>
                  <span className={`font-['Manrope'] font-semibold text-sm ${hours === 'Fechado' ? 'text-[#d3c3c2]' : 'text-[#543C3C]'}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Localização */}
          <div className="bg-[#f4eceb] p-6 border-l-4 border-[#CAB2A1] rounded-r-lg">
            <p className="font-['Manrope'] font-bold text-[11px] uppercase tracking-[0.15em] text-[#543C3C] mb-2">Localização</p>
            <p className="font-['Manrope'] text-sm text-[#8E7E73] leading-relaxed mb-3">
              Cuiabá, Mato Grosso
            </p>
            <a
              href="https://www.google.com/maps/place/Cl%C3%ADnica+Palomares+Beauty"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.1em] text-[#CAB2A1] hover:text-[#543C3C] transition-colors flex items-center gap-1"
            >
              Ver no Google Maps
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
