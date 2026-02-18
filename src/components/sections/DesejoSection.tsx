import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { content } from '@/content';

const TAG_RESPONSES: Record<string, string> = {
    "Facial": "Tratamentos faciais personalizados — PRP ou Protocolo podem ser o caminho.",
    "Capilar": "PRP capilar pode ser uma excelente opção para você.",
    "Textura e poros": "Textura e poros respondem muito bem a estímulo com PRP.",
    "Manchas": "Manchas pedem avaliação — um protocolo organizado faz diferença.",
    "Flacidez": "Flacidez pede plano por etapas. Protocolo costuma ser o melhor caminho.",
    "Olheiras": "Olheiras têm várias causas. A gente orienta o melhor caminho.",
    "Cicatrizes": "Cicatrizes respondem ao PRP e a protocolos combinados.",
    "Pós-operatório": "Pós-operatório precisa de acompanhamento. Podemos ajudar.",
};

export function DesejoSection() {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    return (
        <section className="relative bg-[#080808] py-24 md:py-32 overflow-hidden border-t border-white/[0.03]">
            <div className="absolute inset-0 bg-grid-engineer opacity-[0.06] pointer-events-none" />

            <div className="container-clinical relative z-10">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white leading-[1.05]">
                        {content.desejo.title}
                    </h2>
                </motion.div>

                {/* Tags Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {content.desejo.tags.map((tag, i) => (
                        <motion.button
                            key={tag}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * i }}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`
                px-5 py-2.5 rounded-full text-sm font-mono uppercase tracking-wider
                border transition-all duration-300 cursor-pointer
                ${activeTag === tag
                                    ? 'border-clinical-accent/60 bg-clinical-accent/10 text-clinical-accent shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                                    : 'border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25 hover:text-white/80 hover:bg-white/[0.04]'
                                }
              `}
                        >
                            {tag}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Dynamic Response */}
                <div className="min-h-[80px] flex items-center justify-center">
                    {activeTag ? (
                        <motion.p
                            key={activeTag}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center text-lg text-clinical-accent/80 font-light max-w-lg"
                        >
                            {TAG_RESPONSES[activeTag]}
                        </motion.p>
                    ) : (
                        <p className="text-center text-lg text-white/40 font-light max-w-lg">
                            {content.desejo.text}
                        </p>
                    )}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <a
                        href={content.whatsapp.orientacaoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 border border-white/15 rounded-[4px] text-sm font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-clinical-accent/40 hover:bg-white/[0.02] transition-all duration-300"
                    >
                        <span>{content.desejo.cta}</span>
                        <ArrowRight size={16} className="text-white/40 group-hover:text-clinical-accent transition-colors" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
