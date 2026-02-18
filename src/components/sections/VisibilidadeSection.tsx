import { motion } from 'framer-motion';
import { content } from '@/content';
import { ArrowRight } from 'lucide-react';

export function VisibilidadeSection() {
    // 1. Sort items alphabetically for easier scanning in a text block
    const sortedItems = [...content.visibilidade.items].sort((a, b) => a.localeCompare(b));

    return (
        <section className="relative bg-[#EAE9E5] py-24 md:py-36 overflow-hidden">

            {/* Grid background (Consistent with ProvaSocial Light) */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="container-clinical relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <span className="font-mono text-xs text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-10 block">
                        Tecnologias & Procedimentos
                    </span>

                    <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] text-[#1A1A1A] leading-[1.05] mb-16 tracking-tight">
                        {content.visibilidade.title}
                    </h2>

                    {/* Editorial Inline List */}
                    <div className="mb-20 leading-[2] md:leading-[2.2]">
                        {sortedItems.map((item, i) => (
                            <span key={item} className="inline-block relative group cursor-default">
                                <span className="text-xl md:text-3xl text-[#1A1A1A]/70 font-light group-hover:text-[#1A1A1A] transition-colors duration-300">
                                    {item}
                                </span>
                                {/* Separator (except for last item) */}
                                {i < sortedItems.length - 1 && (
                                    <span className="mx-4 md:mx-6 text-[#1A1A1A]/20 text-xl font-serif italic align-middle select-none">
                                        /
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Closing Text & CTA */}
                    <div className="max-w-2xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-[#1A1A1A]/60 font-light leading-relaxed mb-10"
                        >
                            {content.visibilidade.text}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <a
                                href={content.whatsapp.orientacaoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-[4px] border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#EAE9E5] transition-all duration-300 group"
                            >
                                <span className="font-mono text-xs uppercase tracking-[0.15em]">Agendar Avaliação</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
