import { motion } from 'framer-motion';
import { useRef } from 'react';
import { content } from '@/content';
import { ScrollParallax } from '@/components/ui/ScrollParallax';

export function PainSection() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="relative bg-[#080808] py-20 md:py-32 overflow-hidden border-t border-white/5">

            {/* 1. Engineer Grid Background - Mantendo a identidade */}
            <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

            <div className="container-clinical relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* Left: The Narrative Focus */}
                    <div className="lg:col-span-7">
                        <ScrollParallax offset={20} className="sticky top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-widest border border-clinical-accent/20 px-3 py-1 rounded-full">
                                    {content.pain.step}
                                </span>
                            </motion.div>

                            <h2 className="font-instrument text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white font-normal mb-8">
                                {content.pain.title.main} <br />
                                <span className="text-white/40 italic">{content.pain.title.highlight}</span>
                            </h2>

                            <div className="max-w-xl space-y-6">
                                <p className="font-sans text-xl text-white/70 font-light leading-relaxed">
                                    {content.pain.description}
                                </p>
                                <div className="h-px w-24 bg-white/20" />
                                <div className="font-mono-tech text-sm text-white/40 leading-relaxed uppercase tracking-wide">
                                    {content.pain.points.map((point) => (
                                        <p key={point}>• {point}</p>
                                    ))}
                                </div>
                            </div>
                        </ScrollParallax>
                    </div>

                    {/* Right: The Technical List (Structure maintained from previous success) */}
                    <ScrollParallax offset={-30} className="lg:col-span-5 space-y-4 pt-12 lg:pt-32">
                        <div className="mb-8 pl-4 border-l border-clinical-accent/50 text-white/50 text-sm font-light">
                            {content.pain.listTitle}
                        </div>

                        {content.pain.steps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="flex items-center justify-between p-6 border-b border-white/10 group-hover:border-clinical-accent/50 transition-colors duration-500 bg-white/[0.01] hover:bg-white/[0.03]">
                                    <div className="flex items-baseline gap-4">
                                        <span className="font-mono-tech text-xs text-white/20 group-hover:text-clinical-accent transition-colors">{item.id}.</span>
                                        <span className="font-sans text-lg text-white group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="font-mono-tech text-xs text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{item.value}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-clinical-accent/0 group-hover:bg-clinical-accent transition-colors duration-300 shadow-[0_0_10px_rgba(16,185,129,0)] group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Tech Status - Validation */}
                        <div className="pt-8 flex justify-end">
                            <div className="inline-flex items-center gap-3 text-white/40 text-xs font-mono-tech uppercase tracking-widest cursor-default group">
                                <span>{content.pain.phaseStatus}</span>
                                <div className="w-2 h-2 border border-white/20 rounded-full group-hover:bg-clinical-accent animate-pulse" />
                            </div>
                        </div>
                    </ScrollParallax>

                </div>
            </div>
        </section>
    );
}
