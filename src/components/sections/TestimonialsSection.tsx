import { motion } from 'framer-motion';
import { content } from '@/content';

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#EAE9E5] text-[#1A1A1A] py-32 overflow-hidden border-t border-black/5">

      {/* 1. Engineer Grid - Low Contrast Dark on Beige */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-clinical relative z-10">

        {/* Header */}
        <div className="mb-24 text-center">
          <span className="font-mono-tech text-xs text-[#1A1A1A]/60 uppercase tracking-[0.2em] border border-[#1A1A1A]/20 px-3 py-1 rounded-full bg-[#EAE9E5]">
            {content.testimonials.header.tag}
          </span>
          <h2 className="font-instrument text-[clamp(2.5rem,5vw,5rem)] text-[#1A1A1A] mt-8 leading-[0.95]">
            {content.testimonials.header.title}
          </h2>
        </div>

        {/* Testimonials Grid - Clean Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {content.testimonials.items.map((item, i) => (
            <div key={i} className="group relative bg-[#F2F1ED] p-10 border border-[#1A1A1A]/5 hover:border-[#1A1A1A]/20 transition-all duration-500 hover:-translate-y-1">

              {/* Quote Icon */}
              <span className="font-instrument text-6xl text-[#1A1A1A]/10 absolute top-6 left-6 leading-none select-none">“</span>

              <div className="relative z-10 pt-8 flex flex-col h-full justify-between gap-8">
                <p className="font-sans text-lg text-[#1A1A1A]/80 leading-relaxed italic">
                  "{item.quote}"
                </p>

                <div className="border-t border-[#1A1A1A]/5 pt-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-instrument text-2xl text-[#1A1A1A]">{item.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}