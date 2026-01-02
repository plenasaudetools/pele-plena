import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { content } from '@/content';
import { ScrollParallax } from '@/components/ui/ScrollParallax';
import { AlertCircle, Activity, Scan, ChevronRight } from 'lucide-react';

const SystemAlert = ({ item, index }: { item: typeof content.pain.steps[0], index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`
                group relative border-l-2 p-6 cursor-crosshair transition-all duration-500
                ${isHovered
                    ? 'border-emerald-500 bg-white/[0.03]'
                    : 'border-red-500/50 bg-red-950/[0.05] hover:border-red-500'
                }
            `}
        >
            {/* Scan Line Effect on Hover */}
            {isHovered && (
                <motion.div
                    layoutId="scan-line"
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent w-full h-full pointer-events-none"
                    initial={{ translateY: '-100%' }}
                    animate={{ translateY: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            )}

            <div className="flex items-center justify-between relative z-10">
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                        <span className={`
                            font-mono text-xs tracking-widest uppercase
                            ${isHovered ? 'text-emerald-500' : 'text-red-500/70'}
                        `}>
                            {isHovered ? 'SYSTEM_STABLE' : `ERR_00${item.id}_DETECTED`}
                        </span>
                        {!isHovered && (
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                        )}
                    </div>

                    <h3 className={`
                        font-sans text-xl font-light transition-colors duration-300
                        ${isHovered ? 'text-white' : 'text-red-100/60 blur-[0.5px]'}
                    `}>
                        {item.label}
                    </h3>
                </div>

                <div className={`
                    flex flex-col items-end gap-1 font-mono text-xs
                    ${isHovered ? 'text-emerald-400' : 'text-red-400/50'}
                `}>
                    <span className="uppercase tracking-wider">{item.value}</span>
                    {isHovered ? <Scan size={14} /> : <AlertCircle size={14} />}
                </div>
            </div>

            {/* Glitch Overlay Text for "Unstable" state */}
            {!isHovered && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 pointer-events-none overflow-hidden">
                    <div className="w-full h-[1px] bg-red-500/20 absolute top-1/2 -translate-y-1/2" />
                </div>
            )}
        </motion.div>
    );
};

export function PainSection() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="relative bg-[#080808] py-20 md:py-32 overflow-hidden border-t border-white/5">

            {/* Ambient Background - "Error" Theme */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />

            {/* Engineer Grid */}
            <div className="absolute inset-0 bg-grid-engineer opacity-[0.15] pointer-events-none mix-blend-overlay" />

            <div className="container-clinical relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* Left: The Narrative Focus */}
                    <div className="lg:col-span-6">
                        <ScrollParallax offset={20}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-10"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 backdrop-blur-sm mb-6">
                                    <Activity size={12} className="text-red-500 animate-pulse" />
                                    <span className="font-mono text-[10px] text-red-400 uppercase tracking-[0.2em]">
                                        System Failure Analysis
                                    </span>
                                </div>

                                <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-white font-normal mb-8">
                                    {content.pain.title.main} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white/80 to-white/40 italic">
                                        {content.pain.title.highlight}
                                    </span>
                                </h2>

                                <p className="font-sans text-xl text-white/60 font-light leading-relaxed mb-8 max-w-lg">
                                    {content.pain.description}
                                </p>

                                <div className="space-y-4 border-l border-red-500/20 pl-6">
                                    {content.pain.points.map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-center gap-3 text-sm text-white/50 font-mono"
                                        >
                                            <span className="w-1 h-1 bg-red-500/50" />
                                            {point}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </ScrollParallax>
                    </div>

                    {/* Right: The System Diagnostics */}
                    <div className="lg:col-span-6 space-y-4">
                        <div className="flex justify-between items-end mb-6 text-white/30 font-mono text-[10px] uppercase tracking-widest border-b border-white/10 pb-2">
                            <span>Diagnostic Sequence</span>
                            <span>ID: SYS-MAPA-01</span>
                        </div>

                        {content.pain.steps.map((item, i) => (
                            <SystemAlert key={i} item={item} index={i} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
