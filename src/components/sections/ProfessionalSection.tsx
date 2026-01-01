import { motion } from 'framer-motion';
import { content } from '@/content';

export function ProfessionalSection() {
  return (
    <section className="relative bg-[#080808] py-32 overflow-hidden border-t border-white/5">

      {/* 1. Engineer Grid Background */}
      <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

      <div className="container-clinical relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left: The Profile Image (Editorial Style) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group rounded-[2px]">
              {/* Replace with actual professional image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${content.professional.profile.image}')` }}
              />

              {/* Data Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 flex justify-between items-end">
                <div>
                  <span className="font-mono-tech text-[10px] uppercase text-white/50 block mb-1">
                    {content.professional.profile.role}
                  </span>
                  <span className="font-instrument text-2xl text-white block">
                    {content.professional.profile.name}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50 group-hover:opacity-100 bg-clinical-accent/10 text-clinical-accent transition-all">
                  <span className="text-xl leading-none font-light">+</span>
                </div>
              </div>
            </div>

            {/* Decorative Tech Graphic */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-white/5 rounded-full animate-spin-slow pointer-events-none opacity-50" />
          </div>

          {/* Right: The Credentials (Technical Dossier) */}
          <div className="lg:col-span-7">
            <div className="mb-12">
              {/* Tag removida */}
              <h2 className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.1] mb-8">
                {content.professional.content.title}
              </h2>
              <p className="font-sans text-xl text-white/60 font-light leading-relaxed max-w-xl">
                {content.professional.content.description}
              </p>
            </div>

            {/* Stats Grid - Asymmetrical */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 border-y border-white/10">
              {content.professional.content.stats.map((stat, i) => (
                <div key={i} className={i === 2 ? 'hidden md:block' : ''}>
                  <span className="block font-instrument text-4xl text-white mb-1">{stat.value}</span>
                  <span className="font-mono-tech text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Credentials List */}
            <div className="mt-8 flex flex-wrap gap-3">
              {content.professional.content.tags.map((cred, i) => (
                <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono-tech text-white/50 uppercase tracking-wide hover:border-white/30 hover:text-white transition-colors cursor-default">
                  {cred}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}