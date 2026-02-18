import { motion } from 'framer-motion';
import { MessageCircle, Map, Stethoscope, HeartPulse } from 'lucide-react';
import { content } from '@/content';

const STEP_ICONS = [MessageCircle, Map, Stethoscope, HeartPulse];

export function ComoFuncionaSection() {
    return (
        <section className="relative bg-[#060707] py-24 md:py-32 overflow-hidden border-t border-white/[0.03]">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-clinical-accent/[0.03] blur-[120px] rounded-full" />
            </div>

            <div className="container-clinical relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="font-mono text-xs text-clinical-accent uppercase tracking-[0.2em] border border-clinical-accent/20 px-3 py-1 rounded-full">
                        Processo
                    </span>
                    <h2 className="font-display text-[clamp(2rem,5vw,4rem)] text-white mt-8 leading-[1.05]">
                        {content.comoFunciona.title}
                    </h2>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.03] border border-white/[0.04] rounded-xl overflow-hidden max-w-5xl mx-auto">
                    {content.comoFunciona.steps.map((step, i) => {
                        const Icon = STEP_ICONS[i];
                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                className="group relative p-8 bg-[#080a0a] hover:bg-white/[0.02] transition-all duration-300 flex flex-col items-center text-center"
                            >
                                {/* Step Number */}
                                <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest mb-4">
                                    {step.id}
                                </span>

                                {/* Icon */}
                                <div className="p-4 rounded-full border border-white/10 bg-white/[0.02] mb-6 group-hover:border-clinical-accent/30 group-hover:bg-clinical-accent/5 transition-all duration-300">
                                    <Icon size={22} className="text-white/40 group-hover:text-clinical-accent transition-colors duration-300" />
                                </div>

                                {/* Label */}
                                <h3 className="font-display text-lg text-white mb-2">{step.label}</h3>
                                <p className="text-sm text-white/40 leading-relaxed font-light">
                                    {step.description}
                                </p>

                                {/* Connector Arrow (hidden on last) */}
                                {i < content.comoFunciona.steps.length - 1 && (
                                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-4 h-[1px] bg-white/10" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Microcopy */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-8 text-sm font-mono text-white/30 uppercase tracking-wider"
                >
                    {content.comoFunciona.microcopy}
                </motion.p>

            </div>
        </section>
    );
}
