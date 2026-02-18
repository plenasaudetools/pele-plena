import { motion } from 'framer-motion';
import { useState } from 'react';
import { content } from '@/content';

export function EquipeSection() {
    const [fundadoraError, setFundadoraError] = useState(false);
    const [timeError, setTimeError] = useState(false);

    const { fundadora, time } = content.equipe;

    return (
        <section className="relative bg-[#060707] py-24 md:py-32 border-t border-white/[0.03] overflow-hidden">

            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-clinical-accent/[0.02] blur-[100px] rounded-full" />
            </div>

            <div className="container-clinical relative z-10">

                {/* ─── Fundadora ─────────────────────────────── */}
                <div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-center max-w-5xl mx-auto mb-20 md:mb-28">

                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {!fundadoraError ? (
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                                <img
                                    src={fundadora.foto}
                                    alt={fundadora.nome}
                                    className="w-full h-full object-cover"
                                    onError={() => setFundadoraError(true)}
                                />
                                {/* Subtle overlay at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        ) : (
                            <div className="aspect-[3/4] rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-center">
                                <span className="text-white/15 font-mono text-xs uppercase tracking-widest">Foto em breve</span>
                            </div>
                        )}

                        {/* Decorative line */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-clinical-accent/15 rounded-br-xl" />
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-white leading-[1.15] mb-2">
                                {fundadora.nome}
                            </h2>
                            <span className="text-sm text-clinical-accent/60 font-mono uppercase tracking-wider">
                                {fundadora.titulo}
                            </span>
                        </div>

                        <div className="relative pl-6 border-l border-white/8">
                            <p className="text-white/50 font-light leading-[1.8] text-lg">
                                {fundadora.bio}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ─── Equipe completa ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    {!timeError ? (
                        <div className="relative rounded-xl overflow-hidden aspect-[21/9]">
                            <img
                                src={time.foto}
                                alt="Equipe Plena Saúde"
                                className="w-full h-full object-cover"
                                onError={() => setTimeError(true)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060707] via-transparent to-transparent opacity-60" />
                        </div>
                    ) : (
                        <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] aspect-[21/9] flex items-center justify-center">
                            <span className="text-white/15 font-mono text-xs uppercase tracking-widest">Foto da equipe em breve</span>
                        </div>
                    )}

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-center text-white/40 font-light leading-relaxed max-w-2xl mx-auto mt-8 text-lg"
                    >
                        {time.texto}
                    </motion.p>
                </motion.div>

            </div>
        </section>
    );
}
