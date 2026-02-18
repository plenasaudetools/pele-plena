
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '@/data/articles';

export function LatestArticlesSection() {
    // Get last 3 articles
    const latestArticles = ARTICLES.slice(0, 3);

    if (latestArticles.length === 0) return null;

    return (
        <section className="relative py-24 bg-[#0a0c0c] border-t border-white/[0.03]">
            <div className="container-clinical">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-clinical-accent mb-4 block">Knowledge Hub</span>
                        <h2 className="font-display text-4xl md:text-5xl text-white">Últimas do Blog</h2>
                    </div>
                    <Link to="/blog" className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors">
                        Ver todos
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {latestArticles.map((article) => (
                        <Link
                            to={`/blog/${article.slug}`}
                            key={article.id}
                            className="group flex flex-col bg-[#0F1111]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-clinical-accent/30 transition-all duration-500"
                        >
                            <div className="aspect-[16/9] overflow-hidden relative">
                                <img
                                    src={article.featuredImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full text-[10px] text-white/90 font-mono uppercase tracking-widest">
                                    {CATEGORIES[article.category].name}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl text-white group-hover:text-clinical-accent transition-colors mb-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-white/40 text-sm font-light line-clamp-2 mb-4">
                                    {article.metaDescription}
                                </p>
                                <span className="text-xs text-clinical-accent flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    Ler artigo <ArrowRight size={12} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
