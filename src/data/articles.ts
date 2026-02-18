
export interface Author {
    name: string;
    role: string;
    avatar: string;
}

export interface Category {
    id: string;
    name: string;
    color: string;
}

export interface CTA {
    text: string;
    url: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ArticleSection {
    title?: string;
    content: string; // HTML allowed
    image?: { url: string; alt: string; caption?: string };
    cta?: CTA;
    quote?: string;
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    metaDescription: string;
    category: string;
    author: Author;
    publishedAt: string;
    readingTime: number;
    featuredImage: string; // URL
    content: {
        intro: string; // HTML
        sections: ArticleSection[];
        conclusion?: { title?: string; content: string };
        faq?: FAQItem[];
    };
    relatedArticles?: string[];
}

export const AUTHOR: Author = {
    name: "Dra. Vanderleia Prudêncio",
    role: "Enfermeira Integrativa Especialista em Estética",
    avatar: "/assets/author-vanderleia.jpg", // Placeholder path
};

export const CATEGORIES: Record<string, Category> = {
    "pele-saude": { id: "pele-saude", name: "Pele & Saúde", color: "brand-gold" },
    "ciencia-longevidade": { id: "ciencia-longevidade", name: "Ciência & Longevidade", color: "brand-gold" },
    "procedimentos": { id: "procedimentos", name: "Procedimentos & Resultados", color: "brand-gold" },
};

export const ARTICLES: Article[] = [
    {
        id: "por-que-sua-pele-nao-melhora",
        slug: "por-que-sua-pele-nao-melhora",
        title: "Por que sua pele não melhora? A verdade sobre tratamentos superficiais",
        subtitle: "Descubra por que cremes caros, lasers e peelings nem sempre funcionam se você ignora a base biológica.",
        metaDescription: "Cansada de investir em skincare sem ver resultado? Entenda a importância da saúde integrativa na estética e por que tratar apenas a superfície não resolve.",
        category: "pele-saude",
        author: AUTHOR,
        publishedAt: "2026-02-18",
        readingTime: 6,
        featuredImage: "https://plus.unsplash.com/premium_photo-1674069719655-70d7ee854f3b?q=80&w=2672&auto=format&fit=crop",
        content: {
            intro: `
                <p class="mb-6 text-xl leading-relaxed text-white/80">
                    Você já investiu em cremes caríssimos, fez protocolos de laser e seguiu à risca a rotina de skincare das influenciadoras, mas sua pele continua com aquele aspecto cansado, manchado ou sem viço?
                </p>
                <p class="mb-6 text-lg leading-relaxed text-white/70">
                    A culpa não é necessariamente do produto. O problema é que a estética tradicional muitas vezes trata a pele como um tecido isolado do resto do corpo. E ela não é.
                </p>
            `,
            sections: [
                {
                    title: "A pele é o espelho da sua saúde interna",
                    content: `
                        <p class="mb-4 text-lg text-white/70 leading-relaxed">
                            Sua pele é o maior órgão do corpo humano e reflete tudo o que acontece lá dentro. Inflamação silenciosa, estresse oxidativo, desequilíbrio hormonal e saúde intestinal impactam diretamente na produção de colágeno e na integridade da barreira cutânea.
                        </p>
                        <p class="mb-4 text-lg text-white/70 leading-relaxed">
                            Tratar uma mancha de melasma apenas com clareadores tópicos, sem investigar e corrigir a inflamação que está "ligando" essa mancha lá no fundo, é como pintar uma parede com infiltração: o problema vai voltar, e muitas vezes pior.
                        </p>
                    `,
                    image: { url: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop", alt: "Estrutura Celular Abstrata" },
                    quote: "Não existe pele bonita em corpo inflamado. A beleza é consequência da saúde."
                },
                {
                    title: "O erro do 'mais é mais'",
                    content: `
                        <p class="mb-4 text-lg text-white/70 leading-relaxed">
                            Muitas pacientes chegam ao consultório com a barreira cutânea destruída pelo excesso de ácidos, esfoliantes e procedimentos agressivos feitos sem critério. A pele precisa de nutrição, proteção e calma para se regenerar.
                        </p>
                        <p class="mb-4 text-lg text-white/70 leading-relaxed">
                            Em vez de agredir a pele repetidamente, nossa abordagem foca em fornecer os tijolos biológicos para que ela se reconstrua com qualidade.
                        </p>
                    `,
                    image: { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop", alt: "Skincare Minimalista e Científico" },
                    cta: { text: "Agendar Avaliação Integrativa", url: "https://wa.me/5511999999999" }
                }
            ],
            conclusion: {
                title: "O caminho da Plena Saúde",
                content: `
                    <p class="mb-4 text-lg text-white/70 leading-relaxed">
                        Aqui na clínica, olhamos para você por inteiro. Antes de indicar um procedimento, entendemos seu momento de vida, seus exames e sua rotina. É assim que garantimos resultados duradouros e uma pele que brilha de verdade, de dentro para fora.
                    </p>
                `
            },
            faq: [
                {
                    question: "Preciso parar de usar meus cremes atuais?",
                    answer: "Não necessariamente. Vamos avaliar o que você já tem e ajustar para o que sua pele realmente precisa hoje. Muitas vezes, menos é mais."
                },
                {
                    question: "Quanto tempo para ver resultado?",
                    answer: "Depende do tratamento indicado, mas a melhora na qualidade e viço da pele costuma ser visível em 30 dias com o ajuste certo da rotina e suplementação."
                },
                {
                    question: "Vocês fazem Botox e Preenchimento?",
                    answer: "Sim, realizamos todos os procedimentos injetáveis, mas sempre com o foco em naturalidade e respeitando a anatomia e a saúde do seu tecido."
                }
            ]
        },
    }
];

export const getArticleBySlug = (slug: string) => ARTICLES.find((article) => article.slug === slug);

export const getRelatedArticles = (currentSlug: string, limit = 2) => {
    return ARTICLES.filter((article) => article.slug !== currentSlug).slice(0, limit);
};
