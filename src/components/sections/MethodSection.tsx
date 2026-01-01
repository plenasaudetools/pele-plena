import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { content } from '@/content';
import { ScrollParallax } from '@/components/ui/ScrollParallax';
import { X, ScanSearch } from 'lucide-react';

import resAcne from '@/assets/result-acne.png';
import resReju from '@/assets/result-rejuvenation.png';
import resMelasma from '@/assets/result-melasma.png';
import resScars from '@/assets/result-scars.png';

const RESULTS_DATA = [
    { id: 'CS-01', label: 'Protocolo Acne', img: resAcne },
    { id: 'CS-02', label: 'Rejuvenescimento', img: resReju },
    { id: 'CS-03', label: 'Melasma Control', img: resMelasma },
    { id: 'CS-04', label: 'Cicatrizes', img: resScars },
    { id: 'CS-05', label: 'Textura', img: resReju },
    { id: 'CS-06', label: 'Luminosidade', img: resMelasma },
];

export function MethodSection() {
    const containerRef = useRef<HTMLElement>(null);
    const [selectedImage, setSelectedImage] = useState<typeof RESULTS_DATA[0] | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative bg-[#080808] py-20 md:py-32 overflow-hidden border-t border-white/5">

            {/* Background Tech Elements */}
            <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

            <div className="container-clinical relative z-10">

                {/* Section Header */}
                <div className="grid lg:grid-cols-2 gap-12 mb-24 items-end">
                    <ScrollParallax offset={20}>
                        <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-[0.2em] border border-clinical-accent/20 px-3 py-1 rounded-full">
                            {content.method.step}
                        </span>
                        <h2 className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-white mt-8">
                            {content.method.title}
                        </h2>
                    </ScrollParallax>
                    <ScrollParallax offset={40} className="lg:pl-12">
                        <p className="font-sans text-xl text-white/60 font-light leading-relaxed border-l border-white/10 pl-8">
                            {content.method.description}
                            <br /><strong className="text-white font-normal">{content.method.highlight}</strong>
                        </p>
                    </ScrollParallax>
                </div>

                {/* Vertical Timeline System */}
                <div className="relative">
                    {/* Central Spine Line */}
                    {/* Central Spine Line - Base */}
                    <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30" />

                    {/* Central Spine Line - Alive (Progress) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[20px] lg:left-1/2 top-0 w-px bg-clinical-accent origin-top shadow-[0_0_10px_rgba(16,185,129,0.5)] z-0"
                    />

                    <div className="space-y-24">
                        {content.method.timeline.map((item, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-8 lg:gap-24 items-start relative ${i % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse lg:text-left'}`}>

                                {/* Center Node */}
                                <div className="absolute left-[16px] lg:left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#080808] border border-clinical-accent z-10 mt-8">
                                    <div className="absolute inset-0 bg-clinical-accent opacity-50 animate-ping rounded-full" />
                                </div>

                                {/* Content Side */}
                                <ScrollParallax offset={30} className={`flex-1 pl-12 lg:pl-0 ${i % 2 === 0 ? '' : ''}`}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                    >
                                        <span className="font-mono-tech text-4xl text-white/5 opacity-50 block mb-4 font-bold tracking-widest leading-none">
                                            {item.phase}
                                        </span>

                                        <h3 className="font-instrument text-4xl text-white mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="font-sans text-lg text-white/50 leading-relaxed mb-6">
                                            {item.desc}
                                        </p>

                                        {/* Tech Specs Tags */}
                                        <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                                            {item.tech_specs.map((spec, j) => (
                                                <span key={j} className="font-mono-tech text-[10px] uppercase tracking-wider text-clinical-accent/70 border border-clinical-accent/20 px-2 py-1 rounded bg-clinical-accent/5">
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </ScrollParallax>

                                {/* Empty/Visual Side - Could be an image or data viz later */}
                                <div className="hidden lg:block flex-1" />

                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Results Carousel Section */}
            <div className="mt-40 relative border-t border-white/5 pt-12">
                <div className="container-clinical mb-8">
                    <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-[0.2em] block mb-2">
                        // Resultados Clínicos
                    </span>
                    <h3 className="font-instrument text-3xl text-white">
                        Galeria de Evolução
                    </h3>
                </div>

                {/* Infinite Marquee + Drag/Swipe Zone */}
                <div className="relative w-full overflow-hidden select-none mask-linear-fade">

                    {/* Draggable Container for Mobile UX */}
                    <div className="overflow-x-auto no-scrollbar flex md:block snap-x snap-mandatory md:snap-none">
                        <motion.div
                            className="flex gap-4 min-w-full w-max md:w-auto px-6 md:px-0"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 25 // Faster on default, mobile override below if needed via CSS or hook
                            }}
                            // Pause animation on hover or touch
                            whileHover={{ animationPlayState: "paused" }}
                            whileTap={{ animationPlayState: "paused" }}
                        >
                            {/* Loop logic remains, updated card internals */}
                            {[...RESULTS_DATA, ...RESULTS_DATA, ...RESULTS_DATA].map((item, i) => (
                                <div
                                    key={i}
                                    onClick={() => setSelectedImage(item)}
                                    className="relative shrink-0 w-[280px] h-[380px] bg-white/5 border border-white/10 p-2 cursor-pointer group hover:border-clinical-accent/50 transition-colors snap-center"
                                >
                                    <div className="w-full h-full overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <img
                                            src={item.img}
                                            alt={item.label}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Tech Overlay with explicit 'View' hint */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">

                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="font-mono text-[10px] text-clinical-accent mb-1 block">{item.id}</span>
                                                    <span className="font-sans text-sm text-white font-medium block">{item.label}</span>
                                                </div>
                                                <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 group-active:scale-95 transition-transform">
                                                    <ScanSearch size={16} className="text-white/80" />
                                                </div>
                                            </div>

                                            {/* Micro-hint text */}
                                            <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest mt-2 block border-t border-white/10 pt-2">
                                                Ver Detalhes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Gradient Masks for edges - Desktop Only to not block scroll */}
                    <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                    <div className="hidden md:block absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
                </div>
            </div>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] w-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white/70 hover:text-white hover:bg-black rounded-full transition-all border border-white/10"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Container */}
                            <div className="flex-1 bg-black relative flex items-center justify-center bg-grid-white/[0.05]">
                                <img
                                    src={selectedImage.img}
                                    alt={selectedImage.label}
                                    className="max-w-full max-h-[80vh] object-contain"
                                />
                            </div>

                            {/* Info Sidebar */}
                            <div className="w-full md:w-80 p-8 flex flex-col justify-center border-l border-white/10 bg-[#0c0c0c]">
                                <span className="font-mono text-xs text-clinical-accent mb-2">{selectedImage.id}</span>
                                <h3 className="font-instrument text-3xl text-white mb-4">{selectedImage.label}</h3>
                                <div className="space-y-4 font-mono text-xs text-white/40">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Duração</span>
                                        <span className="text-white/70">Ciclo Completo</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Método</span>
                                        <span className="text-white/70">Integrativo</span>
                                    </div>
                                    <p className="font-sans text-white/50 leading-relaxed pt-2">
                                        Resultado obtido através da aplicação rigorosa do protocolo, respeitando a fisiologia e o tempo de resposta dérmica.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
