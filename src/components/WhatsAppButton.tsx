import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5513988595323?text=Oi!%20Eu%20quero%20agendar%20a%20Avalia%C3%A7%C3%A3o%20do%20M%C3%A9todo%20MAPA%20da%20Sa%C3%BAde.";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 2, type: "spring" }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 rounded-full bg-[#121212] border border-white/10 text-white shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_24px_rgba(16,185,129,0.3)] hover:border-clinical-accent/50 transition-all duration-300"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <div className="relative z-10">
        <MessageCircle size={24} className="text-white group-hover:text-clinical-accent transition-colors duration-300" strokeWidth={1.5} />
      </div>

      {/* Refined subtle pulse ring */}
      <span className="absolute inset-0 rounded-full border border-clinical-accent/30 opacity-0 group-hover:animate-ping group-hover:opacity-100 duration-1000" />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-clinical-accent/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
}
