import { motion } from 'framer-motion';

const benefits = [
  {
    category: "Estrutura",
    title: "Densidade & Firmeza",
    desc: "Aumento real de colágeno e elastina através da fotobiomodulação. A pele ganha corpo e sustentação.",
    spec: "RESULTADO BIOLÓGICO"
  },
  {
    category: "Superfície",
    title: "Textura & Poros",
    desc: "O ciclo de renovação celular é acelerado. Poros retraem e a textura se torna uniforme e lisa.",
    spec: "ACABAMENTO"
  },
  {
    category: "Tom",
    title: "Luminosidade Real",
    desc: "Correção de microinflamações que causam opacidade. O 'glow' vem da saúde celular, não de produto.",
    spec: "VITALIDADE"
  },
  {
    category: "Longo Prazo",
    title: "Barreira Fortalecida",
    desc: "Sua pele para de reagir a tudo e passa a se defender sozinha. Menos sensibilidade, mais resistência.",
    spec: "SAÚDE FUNCIONAL"
  }
];

export function DeliverySection() {
  return (
    <section className="relative bg-[#EAE9E5] text-[#1A1A1A] py-32 border-t border-black/5 overflow-hidden">

      {/* 1. Engineer Grid - Low Contrast Dark on Beige */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-clinical relative z-10">

        {/* Header */}
        <div className="mb-24 lg:flex justify-between items-end">
          <div>
            <span className="font-mono-tech text-xs text-[#1A1A1A]/60 uppercase tracking-[0.2em] border border-[#1A1A1A]/20 px-3 py-1 rounded-full bg-[#EAE9E5]">
              Expectativa Clínica
            </span>
            <h2 className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] text-[#1A1A1A] mt-8 leading-[0.95]">
              O que esperar em <br /> 3 Meses.
            </h2>
          </div>

          <div className="mt-8 lg:mt-0 text-right hidden lg:block">
            <span className="font-mono-tech text-xs text-[#1A1A1A]/40 uppercase tracking-widest">
              Ciclo: 11 Sessões<br />
              Resultado: Progressivo
            </span>
          </div>
        </div>

        {/* Deliverables Grid - Results Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10">
          {benefits.map((item, i) => (
            <div key={i} className="group relative bg-[#F2F1ED] p-12 hover:bg-[#EAE9E5] transition-colors duration-500 h-full flex flex-col justify-between">

              {/* Product Number */}
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#1A1A1A]/30 mb-8 block">
                0{i + 1}
              </span>

              <div className="relative z-10">
                {/* Category Badge */}
                <span className="inline-block px-2 py-1 bg-[#1A1A1A]/5 rounded text-[10px] font-mono-tech uppercase tracking-wider text-[#1A1A1A]/60 mb-4 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-300">
                  {item.category}
                </span>

                <h3 className="font-instrument text-3xl md:text-4xl text-[#1A1A1A] mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>

                <p className="font-sans text-base text-[#1A1A1A]/60 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </div>

              {/* Footer Spec */}
              <div className="mt-12 pt-6 border-t border-[#1A1A1A]/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                <span className="font-mono-tech text-[9px] uppercase tracking-[0.1em] text-[#1A1A1A]">
                  {item.spec}
                </span>
                <div className="w-1 h-1 bg-[#1A1A1A] rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}