import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasNotification, setHasNotification] = useState(false);

    // Trigger notification after 5 seconds to draw attention
    useEffect(() => {
        const timer = setTimeout(() => {
            setHasNotification(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
        setHasNotification(false);
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Bom dia' : currentHour < 18 ? 'Boa tarde' : 'Boa noite';

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

            {/* Mini Window (Popover) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="w-[calc(100vw-3rem)] md:w-[350px] bg-white rounded-2xl shadow-2xl shadow-emerald-900/10 overflow-hidden font-sans antialiased"
                    >
                        {/* Header */}
                        <div className="bg-[#008069] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6ZM12 18C9.33 18 7 16.67 7 15C7 13.33 9.33 12 12 12C14.67 12 17 13.33 17 15C17 16.67 14.67 18 12 18Z" />
                                        </svg>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#008069] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm leading-tight">Plena Saúde</h3>
                                    <span className="text-[10px] opacity-80 font-light tracking-wide">Atendimento online</span>
                                </div>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-[#E5DDD5]/30 min-h-[140px] relative">
                            <div className="absolute inset-0 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] opacity-[0.06] pointer-events-none"></div>

                            {/* Message Bubble */}
                            <div className="bg-white p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-sm max-w-[90%] relative z-10">
                                <p className="text-sm text-gray-800 leading-relaxed">
                                    {greeting}! 👋<br />
                                    Gostaria de saber qual o melhor tratamento para sua pele hoje?
                                </p>
                                <span className="text-[10px] text-gray-400 block text-right mt-1">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Footer / Action */}
                        <div className="p-3 bg-white border-t border-gray-100">
                            <a
                                href="https://wa.me/5513997635902?text=Ol%C3%A1%2C%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20tratamentos%20est%C3%A9ticos."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-medium text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
                            >
                                <span>Iniciar conversa</span>
                                <Send size={16} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button with Notification */}
            <button
                onClick={() => isOpen ? setIsOpen(false) : handleOpen()}

                className="relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 hover:scale-105"
                aria-label="Open WhatsApp Chat"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-9 md:h-9 text-white">
                    <path d="M12.031 2C6.508 2 2.016 6.492 2.016 12.016c0 1.77.461 3.441 1.277 4.906L2 22l5.223-1.371a9.965 9.965 0 004.808 1.238c5.524 0 10.016-4.492 10.016-10.016C22.047 6.332 17.555 2 12.031 2zM12.03 19.882c-1.465 0-2.855-.383-4.101-1.109l-.294-.176-3.031.796.809-2.956-.192-.304A7.85 7.85 0 014.168 12.016c0-4.336 3.528-7.863 7.863-7.863s7.864 3.527 7.864 7.863-3.528 7.866-7.864 7.866zM16.32 14.332c-.234-.117-1.39-.687-1.605-.765-.215-.078-.371-.117-.527.117-.156.234-.605.765-.742.921-.137.156-.273.176-.508.059-1.164-.582-1.926-1.028-2.699-2.356-.203-.351.203-.324.582-1.082.078-.156.039-.293-.02-.41-.058-.117-.527-1.27-.722-1.738-.192-.465-.387-.402-.528-.41H8.93c-.156 0-.41.059-.625.293-.215.234-.82.801-.82 1.953s.84 2.305.957 2.461c.117.156 1.652 2.523 4.004 3.539 1.57.676 2.148.66 2.926.547.859-.125 1.39-.57 1.586-1.121.195-.551.195-1.023.137-1.121-.059-.098-.215-.156-.449-.273z" />
                </svg>

                {/* Notification Badge */}
                {hasNotification && !isOpen && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-[#E5DDD5]"
                    >
                        <span className="text-[10px] font-bold text-white">1</span>
                    </motion.div>
                )}
            </button>

        </div>
    );
}
