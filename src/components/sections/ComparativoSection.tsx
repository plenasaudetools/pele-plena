import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '@/content';

export function ComparativoSection() {
    const [hoveredSide, setHoveredSide] = useState<string | null>(null);

    return (
        <section id="comparativo" className="relative bg-[#060707] py-24 md:py-40 overflow-hidden border-t border-white/5">

            {/* Background Noise & Gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-clinical-accent/[0.02] blur-[180px] rounded-full" />
            </div>

            <div className="container-clinical relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 md:mb-32 max-w-4xl mx-auto"
                >
                    <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.05] tracking-tight">
                        {content.comparativo.title}
                        <br />
                        <span className="font-serif italic text-[clamp(2rem,4vw,3.5rem)] text-white/40 font-light mt-2 block">
                            {content.comparativo.titleHighlight}
                        </span>
                    </h2>
                </motion.div>

                {/* Editorial Split Layout */}
                <div className="grid md:grid-cols-2 relative group/container">

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-20" />

                    {content.comparativo.cards.map((card, i) => {
                        const isHovered = hoveredSide === card.id;
                        const isDimmed = hoveredSide !== null && hoveredSide !== card.id;
                        const roman = i === 0 ? "I" : "II";

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                onMouseEnter={() => setHoveredSide(card.id)}
                                onMouseLeave={() => setHoveredSide(null)}
                                className={`
                                    relative p-10 md:p-20 flex flex-col justify-between min-h-[500px] transition-all duration-700
                                    ${isDimmed ? 'opacity-30 blur-[2px] scale-[0.98]' : 'opacity-100 scale-100'}
                                `}
                            >
                                {/* Background glow on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-b from-clinical-accent/[0.03] to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                                <div>
                                    {/* Roman Numeral Background */}
                                    <div className="absolute top-10 right-10 md:right-20 pointer-events-none select-none">
                                        <span className="font-display text-[12rem] leading-none text-white/[0.02] mix-blend-overlay">
                                            {roman}
                                        </span>
                                    </div>

                                    {/* Tagline first (Editorial style) */}
                                    <p className="font-serif italic text-lg text-white/50 mb-4">
                                        {card.tagline}
                                    </p>

                                    {/* Title */}
                                    <h3 className="font-display text-[clamp(3rem,5vw,5rem)] text-white mb-12 leading-[0.9]">
                                        {card.name}
                                    </h3>

                                    {/* Points */}
                                    <ul className="space-y-6 relative z-10">
                                        {card.points.map((point, j) => (
                                            <li key={j} className="flex gap-4 group/item items-baseline">
                                                <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 transition-colors duration-500 ${isHovered ? 'bg-clinical-accent' : 'bg-white/10'}`} />
                                                <span className="text-xl text-white/60 font-light leading-relaxed group-hover/item:text-white/80 transition-colors">
                                                    {point}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-20 relative z-10">
                                    <Link
                                        to={card.href}
                                        className="inline-flex items-center gap-3 text-white border-b border-white/20 pb-2 hover:border-clinical-accent hover:text-clinical-accent transition-all duration-300 group/link"
                                    >
                                        <span className="font-mono text-xs uppercase tracking-[0.2em]">{card.cta}</span>
                                        <ArrowUpRight size={18} className="text-white/40 group-hover/link:text-clinical-accent group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                                    </Link>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
