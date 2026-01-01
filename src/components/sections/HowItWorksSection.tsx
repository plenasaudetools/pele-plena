import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '@/content';
import { Reveal } from '@/components/ui/Reveal';

export function HowItWorksSection() {
  return (
    <section className="relative bg-[#080808] py-20 md:py-32 overflow-hidden border-t border-white/5">

      {/* 1. Engineer Grid Background */}
      <div className="absolute inset-0 bg-grid-engineer opacity-20 pointer-events-none" />

      <Reveal className="container-clinical relative z-10 text-white">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono-tech text-xs text-clinical-accent uppercase tracking-[0.2em] mb-4 block">
              {content.howItWorks.step}
            </span>
            <h2 className="font-instrument text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-none">
              {content.howItWorks.title}
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <span className="font-mono-tech text-xs text-white/30 uppercase tracking-widest">
              {content.howItWorks.meta.duration}<br />
              {content.howItWorks.meta.frequency}
            </span>
          </div>
        </div>

        {/* The Matrix/Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {content.howItWorks.schedule.map((item, i) => (
            <div
              key={i}
              className={`group relative p-6 bg-[#080a0a] hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-between h-[160px] ${i === 10 ? 'md:col-span-2 lg:col-span-2 xl:col-span-2 bg-clinical-accent/5' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono-tech text-xs text-white/30 group-hover:text-clinical-accent transition-colors">
                  Sessão {item.sess}
                </span>
                {["02", "04", "06", "08", "10"].includes(item.sess) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-clinical-accent shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                )}
              </div>

              <div>
                <h3 className="font-sans text-lg text-white font-medium mb-1">
                  {item.proc}
                </h3>
                <p className="font-mono-tech text-[10px] text-white/40 uppercase tracking-wider">
                     // {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* Summary Card (Last Slot) */}
          <div className="p-6 bg-[#080a0a] flex flex-col justify-center items-center text-center border-t border-white/10 md:border-t-0">
            <span className="font-instrument text-4xl text-white mb-2">{content.howItWorks.summary.time}</span>
            <span className="font-mono-tech text-[10px] text-white/40 uppercase tracking-widest">
              {content.howItWorks.summary.label}
            </span>
          </div>

          {/* CTA Card - Fills Remaining Space */}
          <a
            href={content.header.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-[#080a0a] hover:bg-[#080a0a] flex flex-col justify-between h-[160px] md:col-span-1 lg:col-span-2 xl:col-span-3 transition-colors duration-300 cursor-pointer"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-clinical-accent/0 group-hover:bg-clinical-accent/[0.03] transition-colors duration-300" />

            <div className="relative z-10 flex justify-between items-start">
              <span className="font-mono-tech text-[10px] text-white/40 uppercase tracking-widest group-hover:text-clinical-accent transition-colors">
                // Disponibilidade Imediata
              </span>
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-clinical-accent transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <div className="relative z-10">
              <h3 className="font-instrument text-3xl text-white group-hover:text-clinical-accent transition-colors duration-300">
                Agendar Avaliação
              </h3>
            </div>
          </a>
        </div>

        {/* Tech Note */}
        <div className="mt-8 flex justify-between items-center text-[10px] font-mono-tech text-white/30 uppercase tracking-wider border-t border-white/5 pt-4">
          <span>{content.howItWorks.footer.note}</span>
          <span>{content.howItWorks.footer.tech}</span>
        </div>

      </Reveal>
    </section >
  );
}
