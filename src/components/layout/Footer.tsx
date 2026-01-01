import logoPlena from '@/assets/logo-plena-saude.png';
import logoKDigital from '@/assets/logo-k-digital.png';
import { content } from '@/content';

export function Footer() {
  return (
    <footer className="relative bg-[#050606] border-t border-white/5 py-16 overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-clinical-accent/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-clinical-accent/5 blur-[120px] rounded-full mix-blend-screen opacity-20" />
      </div>

      <div className="container-clinical relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">

          {/* Logo & Identity - Enhanced */}
          <div className="flex flex-col gap-6 max-w-sm">
            <a href="#" className="flex items-center gap-2 group opacity-90 hover:opacity-100 transition-opacity">
              <img
                src={logoPlena}
                alt="Plena Saúde"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>

            <p className="text-sm text-white/50 leading-relaxed font-light">
              {content.footer.presentation}
            </p>

            <div className="flex flex-col gap-1 text-xs text-white/30 font-mono tracking-wide">
              <p>{content.footer.logoText.line2}</p>
            </div>
          </div>

          {/* Clean Menu - Refined Typography */}
          <nav>
            <ul className="flex flex-wrap gap-10">
              {content.footer.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-display text-base text-white/40 hover:text-white transition-colors duration-300 tracking-wide">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={content.header.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-display text-base text-clinical-accent/80 hover:text-clinical-accent transition-colors duration-300 tracking-wide">
                  {content.footer.cta}
                </a>
              </li>
            </ul>
          </nav>

        </div>

        {/* Minimal Bottom Bar - Corrected Links */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
              {content.footer.copyright}
            </p>
          </div>

          <div className="flex items-center gap-3 order-first md:order-last">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">Desenvolvido por:</span>
            <img src={logoKDigital} alt="K Digital" className="h-4 w-auto opacity-40 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex gap-8">
            {content.footer.legal.map((item) => (
              <a key={item.label} href={item.href} className="font-mono text-[10px] text-white/20 hover:text-white transition-colors uppercase tracking-widest">
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
