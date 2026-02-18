import { motion } from 'framer-motion';
import { ShieldCheck, Check, ArrowRight, Laptop, Smartphone } from 'lucide-react';
import { content } from '@/content';

export function PlataformaSection() {
    return (
        <section className="relative bg-[#060707] py-24 md:py-32 overflow-hidden border-t border-white/5">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-clinical-accent/[0.03] blur-[120px] rounded-full" />
            </div>

            <div className="container-clinical relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] mb-8">
                            <ShieldCheck size={14} className="text-clinical-accent" />
                            <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Área do Paciente</span>
                        </div>

                        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-6">
                            {content.plataforma.title}
                        </h2>

                        <p className="text-lg text-white/50 font-light leading-relaxed mb-10 max-w-md">
                            {content.plataforma.text} Tenha acesso ao seu histórico, prescrições e evolução fotográfica em um ambiente seguro e exclusivo.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Histórico de evolução com fotos comparativas",
                                "Acesso direto às suas receitas e orientações",
                                "Lembretes inteligentes de retorno"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white/70">
                                    <div className="p-1 rounded-full bg-clinical-accent/10 text-clinical-accent">
                                        <Check size={12} />
                                    </div>
                                    <span className="text-sm font-light">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#" // Link para login
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0c0c] hover:bg-clinical-accent transition-colors duration-300 rounded-[4px] group"
                        >
                            <span className="font-mono text-xs uppercase tracking-[0.15em] font-medium">Acessar Plataforma</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right: Device Mockups (CSS Only) */}
                    <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-1000">

                        {/* Laptop Mockup (Background) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute top-10 left-0 right-0 md:right-10 w-full md:w-[90%] aspect-[16/10] bg-[#1a1c1c] rounded-xl border border-white/10 shadow-2xl overflow-hidden group/laptop"
                        >
                            {/* Screen Content Placeholder */}
                            <div className="absolute inset-2 bg-[#0a0c0c] rounded-lg overflow-hidden flex items-center justify-center border border-white/5">
                                <div className="text-center opacity-20 group-hover/laptop:opacity-30 transition-opacity">
                                    <Laptop size={48} className="mx-auto mb-2" />
                                    <span className="font-mono text-xs uppercase tracking-widest">Desktop View</span>
                                </div>
                                {/* Optional: Add actual image here later className="absolute inset-0 object-cover" */}
                            </div>
                            {/* Fake Camera */}
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full" />
                        </motion.div>

                        {/* Mobile Mockup (Foreground) */}
                        <motion.div
                            initial={{ opacity: 0, y: 60, x: 20 }}
                            whileInView={{ opacity: 1, y: 20, x: 0 }} // Slight offset
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute bottom-0 right-4 md:right-0 w-[140px] md:w-[180px] aspect-[9/19] bg-[#0a0c0c] rounded-[2rem] border-[4px] border-[#2a2c2c] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group/mobile"
                        >
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />

                            {/* Screen Content Placeholder */}
                            <div className="absolute inset-0 bg-clinical-accent/[0.05] flex items-center justify-center">
                                <div className="text-center opacity-30 group-hover/mobile:opacity-50 transition-opacity">
                                    <Smartphone size={32} className="mx-auto mb-2" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">App</span>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
