import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { content } from '@/content';
import heroBanner from '@/assets/herobanner-plena-saude.png';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax Effect (Y axis)
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityBg = useTransform(scrollY, [0, 800], [1, 0]);

  // Text Animation
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0c0c] group/hero">

      {/* 1. CINEMATIC BACKGROUND LAYER (Ken Burns + Parallax + Smart Positioning) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: yBg, opacity: opacityBg }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Ken Burns Scale Effect */}
          <motion.img
            src={heroBanner}
            alt="Hero Background"
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

      {/* Film Noise Overlay */}
      <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* 2. SMART GRADIENTS (Crucial for Readability) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left-to-Right Black Gradient: Creates the "breathing room" for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0c] via-[#0a0c0c]/80 to-transparent w-[90%] md:w-[65%]" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0c0c] to-transparent" />
      </div>

      {/* 3. CONTENT STRUCTURE */}
      <div className="relative z-20 h-full container-clinical flex flex-col justify-center pt-32 md:pt-40">

        <motion.div
          className="max-w-3xl pl-4 md:pl-0"
          style={{ y: yText, opacity: opacityText }}
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8 md:mb-10 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-clinical-accent/50" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
              {content.hero.badge.left} · {content.hero.badge.right}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-display font-medium text-white leading-[1.05] mb-10 drop-shadow-2xl"
          >
            <span className="block text-[clamp(3rem,8vw,6.5rem)] text-white/90">
              Pele mais firme,
            </span>
            <span className="block text-[clamp(3rem,8vw,6.5rem)] italic text-[#EBE5D9] mix-blend-lighten mt-1">
              viçosa e natural.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-xl mb-16" // Increased margin bottom
          >
            <span className="hidden md:block">{content.hero.description}</span>
            <span className="md:hidden block">{content.hero.descriptionShort}</span>
          </motion.p>

          {/* CTAs — Restored Glass Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center" // Increased gap
          >
            <a
              href={content.whatsapp.orientacaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-[4px] text-sm font-mono uppercase tracking-[0.15em] text-white hover:bg-white/5 hover:border-clinical-accent/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <span>{content.hero.cta.primary.text}</span>
                <ArrowRight size={16} className="text-white/60 group-hover:text-clinical-accent transition-colors" />
              </div>
            </a>

            <a
              href={content.hero.cta.secondary.href}
              className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              <span>{content.hero.cta.secondary.text}</span>
              <ChevronDown size={14} />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}