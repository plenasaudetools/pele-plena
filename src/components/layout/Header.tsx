import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Lock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoPlena from '@/assets/logo-plena-saude.png';
import { content } from '@/content';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & Lock body scroll
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handle anchor navigation
  const handleAnchorClick = (href: string) => {
    if (href.startsWith('/#')) {
      const anchor = href.replace('/', '');
      if (location.pathname === '/') {
        const el = document.querySelector(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(anchor);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 600);
      }
      setIsMobileMenuOpen(false);
    }
  };

  const isChildActive = (children?: { href: string }[]) =>
    children?.some((c) => location.pathname === c.href) ?? false;

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-4"
      >
        <div
          className={`relative transition-all duration-500 ease-in-out flex items-center justify-between px-6 ${isScrolled
            ? 'w-[95%] md:w-[90%] lg:w-[95%] xl:w-[1280px] bg-[#0a0c0c]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl py-3'
            : 'w-full bg-transparent border-transparent py-4 container-full'
            }`}
        >

          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-2 group shrink-0">
            <img
              src={logoPlena}
              alt="Plena Saúde"
              className={`w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-500 ${isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {content.header.menu.map((item) => {
              const hasChildren = 'children' in item && item.children;
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : hasChildren
                    ? isChildActive(item.children as { href: string }[])
                    : location.pathname === item.href;
              const isAnchor = item.href.startsWith('/#');

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    className="relative py-4" // Increased padding for hover area
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={`flex items-center gap-1 text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'
                        }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: 5, filter: 'blur(5px)' }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                        >
                          <div className="bg-[#0a0c0c]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[260px] flex flex-col gap-1 overflow-hidden">
                            {/* Arrow Pointer */}
                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0a0c0c] border-t border-l border-white/10 rotate-45 transform"></div>

                            {(item.children as { label: string; href: string; description: string }[]).map(
                              (child) => {
                                const childActive = location.pathname === child.href;
                                return (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className={`group relative flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-all duration-300 ${childActive ? 'bg-white/10' : 'hover:bg-white/5'
                                      }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className={`text-sm tracking-wide ${childActive ? 'text-white font-medium' : 'text-white/80 group-hover:text-white'}`}>
                                        {child.label}
                                      </span>
                                      {childActive && <div className="w-1.5 h-1.5 rounded-full bg-clinical-accent shadow-[0_0_10px_rgba(var(--clinical-accent),0.5)]" />}
                                    </div>
                                    <span className="text-[10px] text-white/40 font-light leading-tight group-hover:text-white/60 transition-colors">
                                      {child.description}
                                    </span>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (isAnchor) {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-xs font-mono uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-xs font-mono uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Login Paciente (Desktop) */}
            <Link
              to="/login"
              className="hidden lg:flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-all text-[10px] font-mono uppercase tracking-[0.15em] text-white/80 hover:text-white mr-4"
            >
              <Lock size={12} />
              <span>Login Paciente</span>
            </Link>

            {/* WhatsApp CTA (Desktop - High Contrast) */}
            <a
              href={content.header.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#EBE5D9] hover:bg-white text-[#0a0c0c] rounded-full text-[11px] font-mono uppercase tracking-[0.15em] font-medium transition-all duration-300 shadow-[0_0_20px_rgba(235,229,217,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
            >
              <span>{content.header.ctaButton}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden relative z-50 p-2 -mr-2 text-white hover:text-[#EBE5D9] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* ─── FULL SCREEN MOBILE MENU ─────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0c0c]/98 backdrop-blur-xl lg:hidden flex flex-col pt-32 px-8"
          >
            <nav className="flex flex-col gap-6">
              {content.header.menu.map((item, index) => {
                const hasChildren = 'children' in item && item.children;
                const isAnchor = item.href.startsWith('/#');

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="border-b border-white/5 pb-4 last:border-0"
                  >
                    {hasChildren ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full flex items-center justify-between text-2xl font-light text-white/90"
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`text-white/40 transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* Mobile Accordion */}
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-4 py-4 pl-2">
                                {(item.children as { label: string; href: string }[]).map((child) => (
                                  <Link
                                    key={child.href}
                                    to={child.href}
                                    className="text-lg text-white/60 hover:text-white transition-colors flex items-center gap-3"
                                  >
                                    <span className="w-1 h-1 bg-clinical-accent/50 rounded-full" />
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : isAnchor ? (
                      <button
                        onClick={() => handleAnchorClick(item.href)}
                        className="text-2xl font-light text-white/90 text-left w-full hover:text-[#EBE5D9] transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-2xl font-light text-white/90 hover:text-[#EBE5D9] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-12 space-y-6"
            >
              <div className="h-[1px] w-full bg-white/10" />
              <a
                href={content.header.whatsappLink}
                className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 border border-white/10 rounded-full text-sm font-mono uppercase tracking-widest text-white hover:bg-clinical-accent hover:border-clinical-accent transition-all duration-300"
              >
                {content.header.ctaButton}
              </a>

              {/* Login Paciente (Mobile) */}
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 w-full py-4 border border-white/20 rounded-full text-sm font-mono uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                <Lock size={16} />
                Login Paciente
              </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}