import { motion } from 'framer-motion';
import { content } from '@/content';

interface ProvaSocialSectionProps {
    items?: typeof content.provaSocial.items;
    title?: string;
    variant?: 'light' | 'dark';
}

export function ProvaSocialSection({
    items = content.provaSocial.items,
    title = content.provaSocial.title,
    variant = 'light',
}: ProvaSocialSectionProps) {
    const isLight = variant === 'light';

    return (
        <section className={`relative py-24 md:py-32 overflow-hidden border-t ${isLight
            ? 'bg-[#EAE9E5] text-[#1A1A1A] border-black/5'
            : 'bg-[#080808] text-white border-white/5'
            }`}>

            {/* Grid background */}
            <div className={`absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(90deg,${isLight ? '#000' : '#fff'}_1px,transparent_1px),linear-gradient(180deg,${isLight ? '#000' : '#fff'}_1px,transparent_1px)] bg-[size:50px_50px]`} />

            <div className="container-clinical relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <span className={`font-mono text-xs uppercase tracking-[0.2em] border px-3 py-1 rounded-full ${isLight
                        ? 'text-[#1A1A1A]/60 border-[#1A1A1A]/20 bg-[#EAE9E5]'
                        : 'text-clinical-accent/70 border-clinical-accent/20'
                        }`}>
                        Histórias Reais
                    </span>
                    <h2 className={`font-display text-[clamp(2rem,5vw,4rem)] mt-8 leading-[1.05] ${isLight ? 'text-[#1A1A1A]' : 'text-white'
                        }`}>
                        {title}
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`group relative p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 ${isLight
                                ? 'bg-[#F2F1ED] border border-[#1A1A1A]/5 hover:border-[#1A1A1A]/20'
                                : 'bg-white/[0.02] border border-white/5 hover:border-white/15'
                                }`}
                        >
                            {/* Quote Icon */}
                            <span className={`font-display text-6xl absolute top-4 left-6 leading-none select-none ${isLight ? 'text-[#1A1A1A]/10' : 'text-white/10'
                                }`}>"</span>

                            <div className="relative z-10 pt-8 flex flex-col h-full justify-between gap-6">
                                <p className={`text-lg leading-relaxed italic ${isLight ? 'text-[#1A1A1A]/80' : 'text-white/70'
                                    }`}>
                                    "{item.quote}"
                                </p>

                                <div className={`border-t pt-4 ${isLight ? 'border-[#1A1A1A]/5' : 'border-white/5'}`}>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-clinical-accent/50" />
                                        <span className={`text-sm font-mono uppercase tracking-wider ${isLight ? 'text-[#1A1A1A]/50' : 'text-white/40'
                                            }`}>
                                            {item.author}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
