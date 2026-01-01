import { motion } from 'framer-motion';

const profiles = [
  {
    type: "positive",
    title: "É Para Você",
    items: [
      "Busca solucionar a causa raiz, não apenas mascarar sintomas.",
      "Entende que saúde estética depende de saúde interna.",
      "Está disposta a ajustar rotina e alimentação para ter resultados.",
      "Valoriza acompanhamento médico próximo e personalizado."
    ]
  },
  {
    type: "negative",
    title: "Não É Para Você",
    items: [
      "Procura uma pílula mágica ou solução imediata sem esforço.",
      "Não quer abrir mão de hábitos inflamatórios.",
      "Acredita que estética se resolve apenas com cremes e procedimentos.",
      "Não tem interesse em investir na própria longevidade."
    ]
  }
];

export function ForWhoSection() {
  return (
    <section className="relative bg-[#080808] py-32 overflow-hidden border-t border-white/5">

      {/* 1. Engineer Grid Background */}
      <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

      <div className="container-clinical relative z-10">

        <div className="text-center mb-24">
          <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-[0.2em]">
            Critérios de Elegibilidade
          </span>
          <h2 className="font-instrument text-[clamp(3rem,5vw,5rem)] text-white mt-6">
            Alinhamento de Expectativa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">

          {/* Positive Column */}
          <div className="relative group">
            <div className="absolute inset-0 bg-clinical-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative border border-white/10 p-8 lg:p-12 rounded-sm bg-[#080a0a] hover:border-clinical-accent/30 transition-colors duration-300 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-clinical-accent/10 border border-clinical-accent/30 flex items-center justify-center text-clinical-accent">
                  ✓
                </div>
                <h3 className="font-instrument text-3xl text-white">{profiles[0].title}</h3>
              </div>

              <ul className="space-y-6">
                {profiles[0].items.map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/70 font-light leading-relaxed">
                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-clinical-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Negative Column */}
          <div className="relative group opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="relative border border-white/5 p-8 lg:p-12 rounded-sm bg-[#080a0a] hover:border-white/20 transition-colors duration-300 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/30">
                  ✕
                </div>
                <h3 className="font-instrument text-3xl text-white/50">{profiles[1].title}</h3>
              </div>

              <ul className="space-y-6">
                {profiles[1].items.map((item, i) => (
                  <li key={i} className="flex gap-4 text-white/40 font-light leading-relaxed">
                    <span className="shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Final Trigger */}
        <div className="mt-24 text-center">
          <p className="font-mono-tech text-xs text-white/30 uppercase tracking-widest mb-8">
            Você se encaixa no perfil positivo?
          </p>
          <a href="https://wa.me/5511999999999" className="inline-block border-b border-clinical-accent text-clinical-accent font-instrument text-2xl hover:text-white hover:border-white transition-colors pb-1">
            Agendar Avaliação de Candidatura
          </a>
        </div>

      </div>
    </section>
  );
}