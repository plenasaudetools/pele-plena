import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';

export function AestheticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#EAE9E5] text-[#1A1A1A] py-32 border-t border-black/5">

      {/* 1. Engineer Grid - Low Contrast Dark on Beige */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-clinical relative z-10">

        {/* Title Block */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-end">
          <Reveal>
            <span className="font-mono-tech text-xs text-[#1A1A1A]/60 uppercase tracking-[0.2em] border border-[#1A1A1A]/20 px-3 py-1 rounded-full">
              Visão Integrada
            </span>
            <h2 className="font-instrument text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.9] mt-8 text-[#1A1A1A]">
              O corpo é um <br /> espelho fiel.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="lg:pl-12">
            <p className="font-sans text-xl font-light text-[#1A1A1A]/70 leading-relaxed border-l border-[#1A1A1A]/20 pl-8">
              Não tratamos a pele pela pele. A estética é apenas a consequência visível da sua saúde interna.
              <br /><strong className="font-medium text-[#1A1A1A]">Beleza é biologia em equilíbrio.</strong>
            </p>
          </Reveal>
        </div>

        {/* Dual Cards - Opostos */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Card Interno (Dark to create contrast) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[600px] overflow-hidden bg-[#080a0a] text-white p-12 flex flex-col justify-between border border-black/5 rounded-sm"
          >
            <motion.div
              className="absolute inset-0 z-0 h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000" />
            </motion.div>

            <div className="relative z-10">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-2">01 // Interno</span>
              <h3 className="font-instrument text-5xl mt-6">Saúde Invisível</h3>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block font-mono-tech text-[10px] text-white/40 uppercase mb-2">Foco</span>
                <p className="font-sans text-sm text-white/80">Inflamação, Hormônios, Digestão.</p>
              </div>
              <div>
                <span className="block font-mono-tech text-[10px] text-white/40 uppercase mb-2">Resultado</span>
                <p className="font-sans text-sm text-white/80">Vitalidade e Energia.</p>
              </div>
            </div>
          </motion.div>

          {/* Card Externo (Beige Tone-on-Tone) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group relative h-[600px] overflow-hidden bg-[#F2F1ED] text-[#1A1A1A] p-12 flex flex-col justify-between border border-[#1A1A1A]/10 rounded-sm"
          >
            <motion.div
              className="absolute inset-0 z-0 h-full w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-100 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000" />
            </motion.div>

            <div className="relative z-10">
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/50 border-b border-[#1A1A1A]/10 pb-2">02 // Externo</span>
              <h3 className="font-instrument text-5xl mt-6 text-[#1A1A1A]">Estética Real</h3>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-[#1A1A1A]/10 pt-8">
              <div>
                <span className="block font-mono-tech text-[10px] text-[#1A1A1A]/50 uppercase mb-2">Foco</span>
                <p className="font-sans text-sm text-[#1A1A1A]/80">Textura, Viço, Firmeza.</p>
              </div>
              <div>
                <span className="block font-mono-tech text-[10px] text-[#1A1A1A]/50 uppercase mb-2">Resultado</span>
                <p className="font-sans text-sm text-[#1A1A1A]/80">Beleza Natural.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}