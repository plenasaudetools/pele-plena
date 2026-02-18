import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CTAFinalSection } from '@/components/sections/CTAFinalSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { content } from '@/content';
import heroBanner from '@/assets/herobanner-plena-saude.png';
import { VisibilidadeSection } from '@/components/sections/VisibilidadeSection';
import { ComoFuncionaSection } from '@/components/sections/ComoFuncionaSection';
import { ProvaSocialSection } from '@/components/sections/ProvaSocialSection';
import { PlataformaSection } from '@/components/sections/PlataformaSection';
import { EquipeSection } from '@/components/sections/EquipeSection';

export default function ProtocoloPage() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacityBg = useTransform(scrollY, [0, 800], [1, 0]);
    const yText = useTransform(scrollY, [0, 500], [0, 150]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

    const proto = content.protocolo;

    return (
        <div className="min-h-screen bg-[#0a0c0c]">
            <Header />

            {/* HERO SECTION — PROTOCOLO (Ken Burns) */}
            <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#0a0c0c] group/hero">

                {/* 1. CINEMATIC BACKGROUND LAYER */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        style={{ y: yBg, opacity: opacityBg }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <motion.img
                            src={heroBanner}
                            alt="Protocolo Facial"
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.15 }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="w-full h-full object-cover object-[60%_center] md:object-right filter brightness-[0.8] md:brightness-100 will-change-transform"
                        />
                    </motion.div>
                </div>

                {/* Film Noise */}
                <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

                {/* 2. SMART GRADIENTS */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0c] via-[#0a0c0c]/80 to-transparent w-[90%] md:w-[65%]" />
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0c0c] to-transparent" />
                </div>

                {/* 3. CONTENT STRUCTURE */}
                <div className="relative z-20 h-full container-clinical flex flex-col justify-center pt-32 md:pt-40">

                    <motion.div
                        className="max-w-3xl pl-4 md:pl-0"
                        style={{ y: yText, opacity: opacityText }}
                    >
                        {/* Breadcrumb / Top Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mb-8 md:mb-10 flex items-center gap-4"
                        >
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                                <Link to="/" className="hover:text-white transition-colors">Home</Link> — Protocolo
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="font-display font-medium text-white leading-[1.05] mb-10 drop-shadow-2xl"
                        >
                            <span className="block text-[clamp(2.5rem,6vw,5rem)] text-white/90">{proto.hero.title.part1}</span>
                            <span className="block text-[clamp(2.5rem,6vw,5rem)] italic text-[#EBE5D9] mix-blend-lighten mt-1">{proto.hero.title.part2}</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.7 }}
                            className="mb-16"
                        >
                            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl">
                                {proto.hero.description}
                            </p>
                        </motion.div>

                        {/* CTA Button — Glass Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href={content.whatsapp.protocoloLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-[4px] text-sm font-mono uppercase tracking-[0.15em] text-white hover:bg-white/5 hover:border-clinical-accent/50 transition-all duration-300 backdrop-blur-sm"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {proto.hero.cta}
                                    <ArrowRight size={16} className="text-white/60 group-hover:text-clinical-accent transition-colors" />
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <main>
                {/* ─── O QUE É ──────────────────────────────────── */}
                <section className="relative bg-[#060707] py-24 md:py-32 border-t border-white/[0.03]">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-clinical-accent/[0.03] blur-[120px] rounded-full" />
                    </div>
                    <div className="container-clinical relative z-10 max-w-3xl text-center">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-6">{proto.oQueE.title}</h2>
                            <p className="text-xl text-white/45 font-light leading-relaxed mb-4">{proto.oQueE.text}</p>
                            <p className="text-lg text-clinical-accent/50 italic font-display">{proto.oQueE.highlight}</p>
                        </motion.div>
                    </div>
                </section>

                {/* ─── PARA QUEM ────────────────────────────────── */}
                <section className="relative bg-[#080808] py-24 md:py-32 border-t border-white/[0.03]">
                    <div className="absolute inset-0 bg-grid-engineer opacity-[0.06] pointer-events-none" />
                    <div className="container-clinical relative z-10">
                        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start max-w-5xl mx-auto">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] mb-4">{proto.paraQuem.title}</h2>
                                <p className="text-white/40 font-light leading-relaxed">Perfis que mais se beneficiam do formato de protocolo.</p>
                            </motion.div>
                            <div className="space-y-3">
                                {proto.paraQuem.items.map((item, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-5 rounded-lg border border-white/[0.04] bg-white/[0.015] hover:border-white/10 transition-all duration-300">
                                        <div className="p-1.5 rounded-full border border-clinical-accent/20 bg-clinical-accent/[0.07] shrink-0">
                                            <Check size={14} className="text-clinical-accent" />
                                        </div>
                                        <span className="text-white/65 font-light">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── TECNOLOGIAS & PROCEDIMENTOS ──────────────── */}
                <VisibilidadeSection />

                {/* ─── COMO FUNCIONA ────────────────────────────── */}
                <ComoFuncionaSection />

                {/* ─── PROVA SOCIAL ─────────────────────────────── */}
                <ProvaSocialSection
                    title={proto.provaSocial.title}
                    items={proto.provaSocial.items}
                    variant="dark"
                />

                {/* ─── PLATAFORMA ───────────────────────────────── */}
                <PlataformaSection />

                {/* ─── EQUIPE ───────────────────────────────────── */}
                <EquipeSection />

                {/* ─── CTA FINAL ──────────────────────────────── */}
                <CTAFinalSection
                    title={proto.ctaFinal.title}
                    text={proto.ctaFinal.text}
                    cta={proto.ctaFinal.cta}
                    whatsappLink={content.whatsapp.protocoloLink}
                />
            </main>

            <Footer />
            <WhatsAppWidget />
        </div>
    );
}
