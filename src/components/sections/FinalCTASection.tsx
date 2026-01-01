import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '@/content';
import { useRef } from 'react';

export function FinalCTASection() {
    const containerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width - 0.5);
        mouseY.set((e.clientY - top) / height - 0.5);
    };

    const borderGlow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.15), transparent 80%)`;

    return (
        <section
            ref={containerRef}
            className="relative py-12 md:py-16 flex justify-center items-center overflow-hidden"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[#060707]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container-clinical relative z-10 w-full max-w-5xl">
                <motion.div
                    onMouseMove={handleMouseMove}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group rounded-2xl overflow-hidden bg-[#0c0e0e] border border-white/5"
                >
                    {/* Interactive Glow Border */}
                    <motion.div
                        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: borderGlow }}
                    />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[300px]">

                        {/* Left Content Area */}
                        <div className="p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-3 mb-6"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-clinical-accent animate-pulse" />
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-clinical-accent/70 font-mono">
                                        {content.finalCTA.tag}
                                    </span>
                                </motion.div>

                                <h3 className="font-display text-3xl md:text-5xl text-white leading-[1.1] mb-4">
                                    {content.finalCTA.title.main} <br />
                                    <span className="text-white/40 italic">{content.finalCTA.title.highlight}</span>
                                </h3>

                                <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light">
                                    {content.finalCTA.description}
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-white/20">
                                    <span>{content.finalCTA.location.city}</span>
                                    <span>{content.finalCTA.location.mode}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Action Area */}
                        <div className="relative p-8 md:p-12 flex flex-col justify-center items-center bg-white/[0.01]">
                            <a
                                href={content.finalCTA.whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative w-32 h-32 flex items-center justify-center"
                            >
                                {/* Magnetic Button Effect Background */}
                                <div className="absolute inset-0 rounded-full border border-white/10 group-hover/btn:border-clinical-accent/30 group-hover/btn:bg-clinical-accent/5 transition-all duration-500" />
                                <div className="absolute inset-2 rounded-full border border-white/5 group-hover/btn:border-clinical-accent/50 group-hover/btn:scale-90 transition-all duration-500" />

                                <ArrowUpRight className="w-8 h-8 text-white/40 group-hover/btn:text-clinical-accent group-hover/btn:rotate-45 transition-all duration-500" />
                            </a>

                            <span className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-clinical-accent opacity-60 group-hover:opacity-100 transition-opacity">
                                {content.finalCTA.button}
                            </span>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
