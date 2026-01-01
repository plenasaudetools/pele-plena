import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';
import logoPlena from '@/assets/logo-plena-saude.png';
import { content } from '@/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container-full">
        <div className={`flex items-center justify-between px-6 py-3 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-md border border-white/5 shadow-2xl rounded-2xl' : 'bg-transparent rounded-full'}`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src={logoPlena}
              alt="Plena Saúde"
              className={`w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 ${isScrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-16'}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {content.header.menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-clinical-accent transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* CTA - Cinematic Decision */}
          <a
            href={content.header.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center px-8 py-2 bg-transparent border border-white/20 rounded-[4px] text-xs font-mono uppercase tracking-[0.2em] text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
          >
            {content.header.ctaButton}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white/70"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 px-6 pt-2"
          >
            <nav className="glass-dark rounded-lg p-4 flex flex-col gap-1">
              {content.header.menu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={content.header.whatsappLink}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-primary text-white rounded-lg font-medium"
              >
                <Activity size={18} />
                <span>{content.header.ctaButton}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}