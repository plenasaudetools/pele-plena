import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "O acompanhamento é apenas presencial?",
    answer: "Não. Nossa metodologia foi desenhada para funcionar perfeitamente online. Você recebe o pedido de exames, realiza no seu laboratório de confiança e temos nossa consulta de devolutiva por vídeo, com a mesma profundidade."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A maioria dos pacientes relata melhora na energia e disposição nos primeiros 15 dias de protocolo (fase de desinflamação). A melhora estética da pele e corpo costuma ser visível a partir de 30-45 dias."
  },
  {
    question: "Vocês aceitam convênio médico?",
    answer: "Trabalhamos exclusivamente no modelo particular para garantir o tempo e a profundidade de análise que o método exige. Porém, emitimos nota fiscal para que você possa solicitar reembolso de consulta conforme seu plano."
  },
  {
    question: "O que está incluso no valor?",
    answer: "A consulta completa (1h30), análise detalhada de exames prévios e atuais, o Plano Alimentar, a Prescrição de Suplementos e o suporte via aplicativo durante todo o período do tratamento."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#080808] py-32 overflow-hidden border-t border-white/5">

      {/* 1. Engineer Grid Background */}
      <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

      <div className="container-clinical relative z-10 grid lg:grid-cols-12 gap-16">

        {/* Left: Title & CTA */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-[0.2em] mb-4 block">
              Tire suas Dúvidas
            </span>
            <h2 className="font-instrument text-[clamp(3rem,5vw,4.5rem)] text-white leading-none mb-8">
              Perguntas Frequentes.
            </h2>
            <p className="font-sans text-white/50 text-lg font-light mb-12 max-w-sm">
              Ainda tem alguma questão específica sobre o seu caso?
            </p>

            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 hover:border-clinical-accent hover:bg-clinical-accent/5 transition-all duration-300 group"
            >
              <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-white">Chamar no WhatsApp</span>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse group-hover:bg-clinical-accent" />
            </a>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="lg:col-span-7 flex flex-col">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group hover:bg-white/[0.02] transition-colors"
              >
                <span className={`font-instrument text-2xl transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 w-8 h-8 flex items-center justify-center border rounded-full transition-all duration-300 ${openIndex === i ? 'border-clinical-accent text-clinical-accent rotate-180' : 'border-white/10 text-white/30'}`}>
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-lg text-white/50 font-light leading-relaxed pb-8 pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>

      {/* Basic Footer included visually at the bottom of standard dark section, or separate component */}
    </section>
  );
}