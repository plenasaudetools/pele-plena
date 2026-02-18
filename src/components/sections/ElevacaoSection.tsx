import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { content } from '@/content';

export function ElevacaoSection() {
    return (
        <section className="relative bg-[#080808] py-24 md:py-32 overflow-hidden border-t border-white/[0.03]">

            <div className="absolute inset-0 bg-grid-engineer opacity-[0.06] pointer-events-none" />

            <div className="container-clinical relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">

                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-6">
                            {content.elevacao.title}
                            <br />
                            <span className="text-white/40 italic">{content.elevacao.titleHighlight}</span>
                        </h2>

                        <p className="text-lg text-white/50 font-light leading-relaxed border-l border-white/10 pl-6">
                            {content.elevacao.text}
                        </p>
                    </motion.div>

                    {/* Right — Bullets + CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            {content.elevacao.bullets.map((bullet, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-lg border border-white/[0.04] bg-white/[0.015] hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="p-1.5 rounded-full border border-clinical-accent/30 bg-clinical-accent/10 shrink-0">
                                        <Check size={14} className="text-clinical-accent" />
                                    </div>
                                    <span className="text-white/70 font-light">{bullet}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href={content.whatsapp.orientacaoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/15 rounded-[4px] text-sm font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-clinical-accent/40 hover:bg-white/[0.02] transition-all duration-300 mt-4"
                        >
                            <span>{content.elevacao.cta}</span>
                            <ArrowRight size={16} className="text-white/40 group-hover:text-clinical-accent transition-colors" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
