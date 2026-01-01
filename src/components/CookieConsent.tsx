import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { X, Settings, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essentials: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-[60] w-full max-w-sm"
        >
          <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">

            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-clinical-accent/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-clinical-accent/30 transition-colors duration-500" />

            {!showSettings ? (
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <h3 className="font-instrument text-2xl text-white">Privacidade</h3>
                  <p className="text-white/60 text-xs font-mono leading-relaxed">
                    Utilizamos cookies para processar dados pessoais e aprimorar sua experiência.
                    <br />
                    <Link to="/politica-de-privacidade" className="text-clinical-accent hover:underline mt-1 inline-block">
                      Ver documentação técnica →
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={handleAcceptAll}
                    className="w-full py-2.5 bg-clinical-accent text-black font-mono text-xs uppercase tracking-widest font-bold rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    Aceitar Todos
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="w-full py-2.5 bg-white/5 border border-white/10 text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings size={12} />
                    Personalizar
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <h3 className="font-instrument text-xl text-white">Preferências</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-white/40 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Essential */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-white font-mono text-xs block">Essenciais</span>
                      <span className="text-white/30 text-[10px] block">Necessários para o site.</span>
                    </div>
                    <Switch checked={true} disabled className="data-[state=checked]:bg-white/20" />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-white font-mono text-xs block">Analíticos</span>
                      <span className="text-white/30 text-[10px] block">Métricas de performance.</span>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(c) => setPreferences(p => ({ ...p, analytics: c }))}
                      className="data-[state=checked]:bg-clinical-accent"
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-white font-mono text-xs block">Marketing</span>
                      <span className="text-white/30 text-[10px] block">Campanhas personalizadas.</span>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(c) => setPreferences(p => ({ ...p, marketing: c }))}
                      className="data-[state=checked]:bg-clinical-accent"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleSavePreferences}
                    className="w-full py-2.5 bg-white/10 text-white font-mono text-xs uppercase tracking-widest rounded hover:bg-white/20 transition-colors"
                  >
                    Salvar Preferências
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
