
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { content } from '@/content';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();

  // Parallax effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityBg = useTransform(scrollY, [0, 800], [1, 0]);

  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0a0c0c]">

      {/* 1. CINEMATIC VIDEO LAYER (Parallax) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <motion.div
            style={{
              y: yBg,
              opacity: opacityBg,
              backgroundImage: "url('/hero-clinica.jpg')",
              backgroundPosition: "center 30%"
            }}
            className="absolute inset-0 bg-cover mix-blend-overlay will-change-transform"
          />
        </motion.div>
      </div>

      {/* Film Noise overlay for texture */}
      <div className="absolute inset-0 z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

      {/* 2. LIGHTING & ATMOSPHERE LAYER (The "Air" of the scene) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Deep shadow on the left (for text readability and mood) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Lateral light spill from the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-clinical-accent/10 via-transparent to-transparent opacity-40 mix-blend-screen" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* 3. TYPOGRAPHY 'IN THE SCENE' (Integrated with Scroll) */}
      <div className="relative z-20 h-full container-clinical flex flex-col justify-end md:justify-center pb-32 md:pb-0 pt-0 md:pt-0">

        <motion.div
          className="max-w-4xl space-y-8"
          style={{ y: yText, opacity: opacityText }}
        >
          {/* Context Line - Subtle & Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-4 text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase"
          >
            <span className="w-8 h-[1px] bg-clinical-accent/50" />
            <span>{content.hero.badge.left}</span>
            <span className="w-1 h-1 rounded-full bg-clinical-accent/50" />
            <span>{content.hero.badge.right}</span>
          </motion.div>

          {/* Headline - Ultra Short & Impactful */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="font-display font-normal text-white leading-[1]"
          >
            <span className="block text-[clamp(4rem,9vw,9rem)] text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {content.hero.title.part1}
            </span>
            <span className="block text-[clamp(4rem,9vw,9rem)] text-white/50 mix-blend-overlay italic">
              {content.hero.title.part2}
            </span>
          </motion.h1>

          {/* Subheadline - Clinical & Direct */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="relative pl-6 border-l border-white/10 py-2"
          >
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
              {content.hero.description}
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* 4. CTA LAYER - Bottom Frame decision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
        className="relative mt-8 md:absolute md:mt-0 md:bottom-12 left-0 w-full z-30 container-clinical"
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-white/5 pt-8">

          {/* The Decision Button - Minimalist */}
          <a
            href={content.header.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-2 cursor-pointer"
          >
            <span className="text-xs font-mono tracking-widest text-clinical-accent uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {content.hero.cta.label}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-display text-white/90 group-hover:text-white transition-colors">
                {content.hero.cta.text}
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-clinical-accent/50 group-hover:bg-clinical-accent/10 transition-all duration-500">
                <ArrowRight size={16} className="text-white/60 group-hover:text-clinical-accent transition-colors" />
              </div>
            </div>
          </a>

          {/* Microcopy - Agenda status */}
          <div className="flex items-center gap-6 text-xs font-mono text-white/20 uppercase tracking-wider">
            <span>{content.hero.status.contact}</span>
            <span>•</span>
            <span className="flex items-center gap-2">
              {content.hero.status.availability}
              <span className="w-1 h-1 bg-clinical-accent animate-pulse" />
            </span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}