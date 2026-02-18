const WHATSAPP_NUMBER = "5513988595323";

function whatsappLink(message: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const content = {
    // ─── GLOBAL ─────────────────────────────────────────────
    whatsapp: {
        number: WHATSAPP_NUMBER,
        defaultLink: whatsappLink("Oi! Quero orientação sobre o melhor caminho para minha pele."),
        prpLink: whatsappLink("Oi! Quero saber se PRP é indicado para mim."),
        protocoloLink: whatsappLink("Oi! Quero entender como funciona um protocolo personalizado."),
        orientacaoLink: whatsappLink("Oi! Quero orientação sobre o melhor caminho para minha pele."),
    },

    // ─── HEADER ─────────────────────────────────────────────
    header: {
        menu: [
            { label: "Início", href: "/" },
            {
                label: "Procedimentos",
                href: "#",
                children: [
                    { label: "PRP", href: "/prp", description: "Regeneração natural com plasma rico em plaquetas" },
                    { label: "Protocolo", href: "/protocolo", description: "Plano completo por etapas para resultado duradouro" },
                ],
            },
            { label: "Como Funciona", href: "/#como-funciona" },
            { label: "Contato", href: "/#cta-final" },
            { label: "Blog", href: "/blog" },
        ],
        ctaButton: "Falar no WhatsApp",
        whatsappLink: whatsappLink("Oi! Quero orientação sobre o melhor caminho para minha pele."),
    },

    // ─── HOME — Seção 1: Hero ──────────────────────────────
    hero: {
        badge: {
            left: "Plena Saúde",
            right: "Estética com Direção",
        },
        title: {
            part1: "Pele mais firme,",
            part2: "viçosa e natural.",
        },
        subtitle: "— com um plano feito para você.",
        description:
            "Você conversa com a gente, entende seu melhor caminho e começa com segurança. PRP e Protocolo são as duas rotas mais completas da Plena Saúde.",
        descriptionShort:
            "Entenda seu melhor caminho para PRP ou Protocolo. A gente orienta antes de você decidir.",
        cta: {
            primary: {
                label: "Atendimento via WhatsApp",
                text: "Quero orientação",
            },
            secondary: {
                text: "Entender PRP e Protocolo",
                href: "#comparativo",
            },
        },
        microcopy: "Resposta em horário comercial. Sem compromisso.",
        status: {
            contact: "Atendimento Individualizado",
            availability: "Resposta em horário comercial",
        },
    },

    // ─── HOME — Seção 2: O que você quer melhorar? ─────────
    desejo: {
        title: "O que você quer melhorar?",
        tags: [
            "Facial",
            "Capilar",
            "Textura e poros",
            "Manchas",
            "Flacidez",
            "Olheiras",
            "Cicatrizes",
            "Pós-operatório",
        ],
        text: "Independente do ponto de partida, a gente te orienta para o caminho mais completo.",
        cta: "Falar no WhatsApp",
    },

    // ─── HOME — Seção 3: Comparativo PRP vs Protocolo ──────
    comparativo: {
        title: "Dois caminhos. Um objetivo:",
        titleHighlight: "resultado com naturalidade.",
        cards: [
            {
                id: "prp",
                name: "PRP",
                tagline: "Regenerar",
                points: [
                    "Para quem quer melhorar qualidade de pele e viço",
                    "Resultado progressivo, natural",
                    "Ótimo para pele cansada, textura, estímulo",
                ],
                cta: "Ver PRP",
                href: "/prp",
            },
            {
                id: "protocolo",
                name: "Protocolo",
                tagline: "Transformar com plano",
                points: [
                    "Para quem quer um plano completo por etapas",
                    "Combina estratégias de forma inteligente",
                    "Ideal para 40+, flacidez, manchas, múltiplas queixas",
                ],
                cta: "Ver Protocolo",
                href: "/protocolo",
            },
        ],
    },

    // ─── HOME — Seção 4: Elevação de consciência ───────────
    elevacao: {
        title: "Você pode começar pelo que procura.",
        titleHighlight: "E evoluir para o que resolve.",
        text: "Muita gente chega pedindo um procedimento específico. Na conversa, a gente entende o objetivo real e orienta um caminho que entregue mais resultado e mais segurança.",
        bullets: [
            "Menos tentativa e erro",
            "Mais clareza do que fazer primeiro",
            "Melhor manutenção do resultado",
        ],
        cta: "Quero entender meu melhor caminho",
    },

    // ─── HOME — Seção 5: Como funciona ─────────────────────
    comoFunciona: {
        title: "Como funciona",
        steps: [
            {
                id: "01",
                label: "WhatsApp e orientação",
                description: "Você entra em contato e a gente entende seu momento.",
            },
            {
                id: "02",
                label: "Planejamento do caminho",
                description: "Avaliamos juntos qual rota faz mais sentido para você.",
            },
            {
                id: "03",
                label: "Sessão / atendimento",
                description: "O procedimento ou protocolo acontece com acompanhamento.",
            },
            {
                id: "04",
                label: "Acompanhamento",
                description: "Você não fica sozinha. A evolução é monitorada.",
            },
        ],
        microcopy: "Você entende antes de decidir.",
    },

    // ─── HOME — Seção 6: Prova social ─────────────────────
    provaSocial: {
        title: "O que mais ouvimos aqui",
        items: [
            {
                quote: "Me senti segura do começo ao fim.",
                author: "Paciente Plena Saúde",
            },
            {
                quote: "Ficou natural, não exagerado.",
                author: "Paciente Plena Saúde",
            },
            {
                quote: "Entendi exatamente o que fazia sentido.",
                author: "Paciente Plena Saúde",
            },
        ],
    },

    // ─── HOME — Seção 7: Visibilidade ─────────────────────
    visibilidade: {
        title: "Recursos e procedimentos que podem entrar no seu plano",
        items: [
            "Botox",
            "Preenchimento",
            "Bioestimulador",
            "Microagulhamento",
            "Peelings",
            "PRP",
            "Protocolos combinados",
            "Pós-operatório",
        ],
        text: "A diferença é que aqui isso entra como parte de um plano — não como escolha no escuro.",
    },

    // ─── HOME — Seção 8: Equipe ───────────────────────────
    equipe: {
        badge: "Quem cuida de você",
        fundadora: {
            nome: "Dra. Nome da Fundadora",
            titulo: "Fundadora · Plena Saúde",
            bio: "Especialista em dermatologia estética com mais de X anos de atuação. Criou a Plena Saúde com o propósito de oferecer cuidado real — com escuta, planejamento e resultado natural. Cada plano é desenhado individualmente, porque nenhuma pele é igual.",
            foto: "/equipe-fundadora.jpg",
        },
        time: {
            texto: "Uma equipe especializada que trabalha em sintonia para que cada etapa do seu cuidado seja precisa, acolhedora e com foco no resultado que faz sentido para você.",
            foto: "/equipe-completa.jpg",
        },
    },

    // ─── HOME — Seção 9: Plataforma ───────────────────────
    plataforma: {
        title: "Acompanhamento organizado para você se sentir segura",
        text: "Quando faz sentido, você recebe orientações e plano organizado para acompanhar sua evolução.",
    },

    // ─── HOME — Seção 10: CTA final ────────────────────────
    ctaFinal: {
        title: "Quer orientação agora?",
        text: "Chama no WhatsApp e diga o que você quer melhorar. A gente te guia com calma.",
        cta: "Falar no WhatsApp",
    },

    // ─── PÁGINA PRP ────────────────────────────────────────
    prp: {
        hero: {
            badge: "PRP — Plasma Rico em Plaquetas",
            title: {
                part1: "PRP: regeneração",
                part2: "natural.",
            },
            subtitle: "para pele com mais viço e qualidade.",
            description:
                "Ideal para quem quer melhorar textura, luminosidade e estímulo de colágeno com naturalidade.",
            cta: "Falar no WhatsApp",
            microcopy: "A gente te orienta se PRP é o melhor caminho para você.",
        },
        paraQuem: {
            title: "Para quem costuma fazer sentido",
            items: [
                "Pele opaca e cansada",
                "Textura irregular",
                "Sinais de envelhecimento",
                "Capilar (quando aplicável)",
            ],
        },
        oQueEsperar: {
            title: "O que esperar",
            text: "Resultado progressivo, com melhora ao longo das semanas. O PRP estimula a regeneração natural da pele, usando o próprio sangue como matéria-prima.",
        },
        comoEAqui: {
            title: "Como é aqui",
            steps: [
                { id: "01", label: "Conversa" },
                { id: "02", label: "Orientação" },
                { id: "03", label: "Planejamento" },
                { id: "04", label: "Sessão" },
                { id: "05", label: "Orientações pós" },
            ],
        },
        combinacoes: {
            title: "Combinações comuns",
            text: "PRP pode ser parte de um Protocolo quando o objetivo é mais amplo.",
            cta: "Ver Protocolo",
            href: "/protocolo",
        },
        faq: {
            title: "Perguntas frequentes",
            items: [
                {
                    question: "Dói?",
                    answer:
                        "O desconforto é mínimo. Usamos técnicas para tornar o procedimento o mais confortável possível.",
                },
                {
                    question: "Quantas sessões?",
                    answer:
                        "Em geral 3 a 5 sessões, com intervalo de 30 dias. O plano é personalizado.",
                },
                {
                    question: "Quando vejo melhora?",
                    answer:
                        "Resultados iniciais em 2 a 3 semanas. Resultado completo entre 60 e 90 dias.",
                },
                {
                    question: "Posso combinar com outros procedimentos?",
                    answer:
                        "Sim. PRP pode ser parte de um protocolo mais amplo, combinando com outras estratégias.",
                },
            ],
        },
        ctaFinal: {
            title: "Quer saber se PRP é para você?",
            text: "Fale com a gente no WhatsApp. A orientação é gratuita e sem compromisso.",
            cta: "Quero orientação no WhatsApp",
        },
    },

    // ─── PÁGINA PROTOCOLO ─────────────────────────────────
    protocolo: {
        hero: {
            badge: "Protocolo Personalizado",
            title: {
                part1: "Protocolo: um plano",
                part2: "completo.",
            },
            subtitle: "por etapas, para resultado mais consistente.",
            description:
                "Para quem quer cuidar de mais de uma queixa ou quer um caminho guiado com começo, meio e continuidade.",
            cta: "Falar no WhatsApp",
            microcopy: "A gente monta o plano junto com você.",
        },
        oQueE: {
            title: "O que é um protocolo aqui",
            text: "Não é pacote pronto. É plano personalizado por prioridade e fase.",
            highlight:
                "Cada protocolo é desenhado para o seu momento, suas queixas e seus objetivos.",
        },
        paraQuem: {
            title: "Para quem faz mais sentido",
            items: [
                "40+",
                "Flacidez + textura + manchas",
                "Quem já fez procedimentos e quer organizar um plano",
                "Quem quer resultado mais duradouro",
            ],
        },
        comoPratica: {
            title: "Como funciona na prática",
            steps: [
                { id: "01", label: "Diagnóstico do objetivo" },
                { id: "02", label: "Plano por etapas (30-60-90)" },
                { id: "03", label: "Procedimentos entram como meios" },
                { id: "04", label: "Acompanhamento e ajustes" },
            ],
        },
        oQueMuda: {
            title: "O que muda quando existe plano",
            items: [
                "Menos gasto com tentativa",
                "Mais previsibilidade",
                "Melhor manutenção",
            ],
        },
        provaSocial: {
            title: "O que dizem sobre ter um plano",
            items: [
                {
                    quote: "Pela primeira vez eu entendi o que fazer primeiro.",
                    author: "Paciente Plena Saúde",
                },
                {
                    quote: "Me senti orientada, não empurrada.",
                    author: "Paciente Plena Saúde",
                },
                {
                    quote: "Organizou tudo que eu já queria fazer, mas não sabia por onde começar.",
                    author: "Paciente Plena Saúde",
                },
            ],
        },
        ctaFinal: {
            title: "Quer montar seu protocolo?",
            text: "Chama no WhatsApp e conte o que quer melhorar. A gente te guia com calma.",
            cta: "Quero montar meu protocolo",
        },
    },

    // ─── FOOTER ────────────────────────────────────────────
    footer: {
        logoText: {
            line1: "Estética com Direção",
            line2: "Guarujá / SP",
        },
        presentation:
            "PRP e Protocolos personalizados com orientação desde o primeiro contato. Resultado com naturalidade.",
        links: [
            { label: "PRP", href: "/prp" },
            { label: "Protocolo", href: "/protocolo" },
        ],
        cta: "Falar no WhatsApp",
        copyright: "© 2025 Plena Saúde.",
        legal: [
            { label: "Privacidade", href: "/politica-de-privacidade" },
            { label: "Termos", href: "/termos-de-uso" },
        ],
    },
};
