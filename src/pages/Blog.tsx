
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { ARTICLES, CATEGORIES } from '@/data/articles';

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredArticles = ARTICLES.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-[#0a0c0c]">
            <Header />

            {/* HERO */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 select-none pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop"
                        alt="Hero Texture"
                        className="w-full h-full object-cover opacity-20 blur-2xl scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c] via-[#0a0c0c]/90 to-transparent" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
                </div>
                <div className="container-clinical relative z-10 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-clinical-accent mb-4 block">Knowledge Hub</span>
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
                            Blog Plena Saúde
                        </h1>
                        <p className="text-xl text-white/50 font-light max-w-2xl mx-auto mb-12">
                            Artigos sobre estética regenerativa, saúde integrativa e longevidade.
                            Conteúdo técnico traduzido para sua realidade.
                        </p>
                    </motion.div>

                    {/* FILTERS */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="relative group w-full md:w-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-clinical-accent transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Buscar artigos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-80 bg-white/[0.03] border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-clinical-accent/50 transition-all font-light placeholder:text-white/20"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-mono transition-all ${!selectedCategory ? 'bg-clinical-accent text-[#0a0c0c]' : 'bg-transparent border border-white/10 text-white/50 hover:border-white/30'}`}
                            >
                                Todos
                            </button>
                            {Object.values(CATEGORIES).map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-mono transition-all ${selectedCategory === cat.id ? 'bg-white text-[#0a0c0c]' : 'bg-transparent border border-white/10 text-white/50 hover:border-white/30'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ARTICLES GRID */}
            <section className="pb-32 px-6">
                <div className="container-clinical max-w-7xl mx-auto">
                    {filteredArticles.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map((article, i) => (
                                <Link
                                    to={`/blog/${article.slug}`}
                                    key={article.id}
                                    className="group flex flex-col bg-[#0F1111] border border-white/5 rounded-2xl overflow-hidden hover:border-clinical-accent/30 transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1111] to-transparent z-10 opacity-60" />
                                        <img
                                            src={article.featuredImage}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/80">
                                            {CATEGORIES[article.category].name}
                                        </span>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <h3 className="font-display text-2xl text-white mb-3 group-hover:text-clinical-accent transition-colors leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="text-white/40 font-light text-sm line-clamp-3 mb-6 flex-grow">
                                            {article.metaDescription}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                                                    {/* Avatar from object, default to initials if image fails or empty */}
                                                    {article.author.avatar ? <img src={article.author.avatar} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-[8px]">DR</div>}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-white/60 font-medium">Dra. Vanderleia</span>
                                                    <span className="text-[10px] text-white/30">{new Date(article.publishedAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <span className="text-clinical-accent opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                                <ArrowRight size={18} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
                            <p className="text-white/40 font-light text-lg">Nenhum artigo encontrado para sua busca.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory(null) }}
                                className="mt-4 text-clinical-accent hover:underline text-sm"
                            >
                                Limpar filtros
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <WhatsAppWidget />
        </div>
    );
}
