
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { getArticleBySlug, Article } from '@/data/articles';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ArticlePage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        if (slug) {
            const found = getArticleBySlug(slug);
            if (found) {
                setArticle(found);
            } else {
                navigate('/blog'); // Redirect if not found
            }
        }
    }, [slug, navigate]);

    if (!article) return <div className="min-h-screen bg-[#0a0c0c]" />;

    // JSON-LD for SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "image": [article.featuredImage],
        "author": {
            "@type": "Person",
            "name": article.author.name
        },
        "publisher": {
            "@type": "Organization",
            "name": "Clínica Plena Saúde",
            "logo": {
                "@type": "ImageObject",
                "url": "https://peleplena.clinicaplenasaude.com/logo.png"
            }
        },
        "datePublished": article.publishedAt,
        "description": article.metaDescription
    };

    const faqSchema = article.content.faq ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": article.content.faq.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    } : null;

    return (
        <div className="min-h-screen bg-[#0a0c0c] selection:bg-clinical-accent/30 selection:text-white">
            <Helmet>
                <title>{article.title} | Blog Plena Saúde</title>
                <meta name="description" content={article.metaDescription} />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            </Helmet>

            <Header />

            {/* HERO FULL WIDTH - ADJUSTED */}
            <div className="relative w-full min-h-[60vh] flex flex-col justify-end pb-16 pt-32 md:pt-48">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 select-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0c] via-[#0a0c0c]/80 to-black/40 z-10" />
                    <img
                        src={article.featuredImage}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="container-clinical relative z-20 w-full px-6">
                    <div className="max-w-5xl">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-xs font-mono uppercase tracking-[0.2em] backdrop-blur-md bg-black/20 px-4 py-2 rounded-full border border-white/10 w-fit">
                            <ArrowLeft size={12} /> Voltar
                        </Link>

                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-3 py-1 bg-clinical-accent text-[#0a0c0c] text-[10px] font-mono uppercase tracking-widest font-bold rounded-sm">
                                {article.category.toUpperCase().replace('-', ' ')}
                            </span>
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest rounded-sm">
                                {article.readingTime} min leitura
                            </span>
                        </div>

                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
                            {article.title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 font-light max-w-3xl leading-relaxed drop-shadow-lg mb-10 border-l-2 pl-6 border-clinical-accent">
                            {article.subtitle}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                <img src={article.author.avatar || "/assets/author-placeholder.jpg"} alt={article.author.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-medium">{article.author.name}</p>
                                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">{new Date(article.publishedAt).toLocaleDateString('pt-BR')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container-clinical pb-24">
                <div className="grid lg:grid-cols-[1fr_300px] gap-12 max-w-6xl mx-auto">

                    {/* LEFT COLUMN - CONTENT */}
                    <article className="prose prose-invert prose-lg max-w-none">

                        {/* Summary Box (Strategy from reference) */}
                        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 mb-12 backdrop-blur-sm not-prose">
                            <h3 className="font-display text-xl text-white mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-clinical-accent rounded-full" />
                                Neste artigo você vai entender:
                            </h3>
                            <ul className="space-y-2">
                                {article.content.sections.map((s, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm font-light">
                                        <Check size={16} className="text-clinical-accent shrink-0 mt-0.5" />
                                        {s.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Intro */}
                        <div
                            className="text-xl text-white/80 leading-relaxed font-light mb-12 first-letter:text-5xl first-letter:font-display first-letter:text-clinical-accent first-letter:mr-3 first-letter:float-left"
                            dangerouslySetInnerHTML={{ __html: article.content.intro }}
                        />

                        {/* Sections */}
                        {article.content.sections.map((section, index) => (
                            <section key={index} id={`section-${index}`} className="mb-16 scroll-mt-32">
                                {section.title && (
                                    <h2 className="font-display text-3xl text-white mb-6 mt-12 group flex items-center gap-3">
                                        {section.title}
                                    </h2>
                                )}

                                <div
                                    className="text-white/70 font-light leading-relaxed space-y-6"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />

                                {section.quote && (
                                    <blockquote className="my-12 pl-6 border-l-2 border-clinical-accent/50 italic text-2xl text-white/90 font-serif leading-relaxed">
                                        "{section.quote}"
                                    </blockquote>
                                )}

                                {section.image && (
                                    <figure className="my-10">
                                        <img
                                            src={section.image.url}
                                            alt={section.image.alt}
                                            className="w-full rounded-lg border border-white/10 shadow-xl"
                                        />
                                        {section.image.caption && (
                                            <figcaption className="text-center text-xs text-white/40 mt-3 font-mono tracking-wider">
                                                {section.image.caption}
                                            </figcaption>
                                        )}
                                    </figure>
                                )}

                                {/* Contextual CTA Injection */}
                                {section.cta && (
                                    <div className="my-12 relative overflow-hidden group rounded-xl not-prose">
                                        <div className="absolute inset-0 bg-clinical-accent/10 group-hover:bg-clinical-accent/15 transition-colors" />
                                        <div className="relative p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-clinical-accent/20 rounded-xl">
                                            <div>
                                                <h4 className="text-lg text-white font-medium mb-1">Quer saber se isso se aplica a você?</h4>
                                                <p className="text-sm text-white/60">Agende uma conversa com nossa especialista.</p>
                                            </div>
                                            <a
                                                href={section.cta.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="px-6 py-3 bg-clinical-accent text-[#0a0c0c] font-medium rounded-full text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(var(--clinical-accent),0.2)] whitespace-nowrap"
                                            >
                                                {section.cta.text}
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </section>
                        ))}

                        {/* Conclusion */}
                        {article.content.conclusion && (
                            <div className="mt-20 pt-12 border-t border-white/10">
                                <h3 className="font-display text-2xl text-white mb-6">
                                    {article.content.conclusion.title || "Conclusão"}
                                </h3>
                                <div
                                    className="text-white/70 font-light leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: article.content.conclusion.content }}
                                />
                            </div>
                        )}

                        {/* FAQ Section (Accordion) */}
                        {article.content.faq && article.content.faq.length > 0 && (
                            <div className="mt-20 not-prose">
                                <h3 className="font-display text-2xl text-white mb-8">Perguntas Frequentes</h3>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {article.content.faq.map((item, i) => (
                                        <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-white/[0.02] rounded-lg px-4 data-[state=open]:border-clinical-accent/30 transition-colors">
                                            <AccordionTrigger className="text-white/90 text-left hover:text-clinical-accent/90 hover:no-underline font-medium py-4">
                                                {item.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-white/60 font-light leading-relaxed pb-4">
                                                {item.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        )}

                    </article>

                    {/* RIGHT COLUMN - STICKY SIDEBAR */}
                    <aside className="hidden lg:block space-y-8 h-fit sticky top-32">

                        {/* Author Card */}
                        <div className="p-6 rounded-2xl bg-[#0F1111] border border-white/5 shadow-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5">
                                    {article.author.avatar ? (
                                        <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-white/20 text-xs">Foto</div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Escrito por</p>
                                    <p className="text-sm text-white font-medium font-serif italic">{article.author.name}</p>
                                </div>
                            </div>
                            <p className="text-xs text-white/50 leading-relaxed border-t border-white/5 pt-4">
                                {article.author.role}. Especialista em naturalidade e saúde integrativa.
                            </p>
                        </div>

                        {/* Table of Contents */}
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4">Neste Artigo</h4>
                            <nav className="flex flex-col gap-3">
                                {article.content.sections.map((s, i) => (
                                    <a
                                        key={i}
                                        href={`#section-${i}`}
                                        className="text-sm text-white/60 hover:text-clinical-accent transition-colors block border-l-2 border-transparent hover:border-clinical-accent pl-3 -ml-3"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {s.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Sticky CTA */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-clinical-accent/20 to-clinical-accent/5 border border-clinical-accent/10 p-6 text-center group">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            <h4 className="relative z-10 font-display text-xl text-white mb-2">Não sabe por onde começar?</h4>
                            <p className="relative z-10 text-xs text-white/60 mb-6">Fale com nossa equipe e descubra o tratamento ideal.</p>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                className="relative z-10 inline-flex w-full items-center justify-center gap-2 py-3 bg-white text-black text-xs font-mono uppercase tracking-widest rounded-lg hover:bg-clinical-accent transition-colors font-medium shadow-lg"
                            >
                                <MessageCircle size={14} />
                                Falar no WhatsApp
                            </a>
                        </div>

                    </aside>
                </div>
            </main>

            <Footer />
            <WhatsAppWidget />
        </div>
    );
}
