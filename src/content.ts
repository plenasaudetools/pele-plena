export const content = {
    header: {
        menu: [
            { label: 'O Método', href: '#metodo' },
            { label: 'Como Funciona', href: '#como-funciona' },
            { label: 'Depoimentos', href: '#provas' },
        ],
        ctaButton: 'Agendar Conversa',
        whatsappLink: "https://wa.me/5513988595323?text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20para%20pele%20madura.",
    },
    hero: {
        badge: {
            left: 'Medicina Integrativa',
            right: 'Pele Madura'
        },
        title: {
            part1: 'Sua identidade,',
            part2: 'revitalizada.'
        },
        description: 'Protocolo de Gerenciamento do Envelhecimento. Recupere a firmeza e o viço natural através da saúde, sem perder seus traços.',
        cta: {
            label: 'Atendimento via WhatsApp',
            text: 'Agendar Avaliação',
        },
        status: {
            contact: 'Atendimento Individualizado',
            availability: 'Poucas vagas mensais'
        }
    },
    pain: {
        step: 'Etapa 01: O Entendimento',
        title: {
            main: 'O corpo muda. O cuidado',
            highlight: 'precisa acompanhar.'
        },
        description: 'Após os 40, a renovação celular diminui naturalmente. Tratamentos superficiais não resolvem porque a causa é interna. Mapeamos sua saúde para reativar seu colágeno real.',
        listTitle: 'Por que o creme não funciona mais?',
        points: [
            'O metabolismo desacelerou;',
            'Faltam nutrientes para produzir colágeno;',
            'A inflamação silenciosa destrói as células.'
        ],
        steps: [
            { id: '01', label: 'Anamnese', value: 'Investigativa' },
            { id: '02', label: 'Biorressonância', value: 'Rastreio' },
            { id: '03', label: 'Inflamação', value: 'Correção' },
            { id: '04', label: 'Plano', value: 'Personalizado' },
        ],
        phaseStatus: 'Fase: Diagnóstico Biológico'
    },
    method: {
        step: 'Etapa 02: A Estratégia',
        title: 'Devolvendo Estrutura e Densidade.',
        description: 'Pele madura precisa de estratégia. Unimos tecnologia e nutrição para devolver a estrutura que o tempo levou, com resultados elegantes e naturais.',
        highlight: 'Beleza é saúde visível.',
        timeline: [
            {
                phase: "01",
                title: "Limpeza e Preparo",
                tech_specs: ["Limpeza Profunda", "Desobstrução", "Receptividade"],
                desc: "Preparamos o terreno. Sua pele precisa estar limpa e desinflamada para receber os estímulos corretamente."
            },
            {
                phase: "02",
                title: "Reativação do Colágeno",
                tech_specs: ["Laser Terapêutico", "LED", "PRP Autólogo"],
                desc: "Usamos a própria biologia do seu corpo (PRP) e luzes terapêuticas para acordar as células que produzem firmeza."
            },
            {
                phase: "03",
                title: "Firmeza Duradoura",
                tech_specs: ["Cronograma", "Cuidados Diários", "Nutrição"],
                desc: "Manutenção assistida. Ensinamos você a manter os resultados com a rotina certa em casa."
            }
        ]
    },
    howItWorks: {
        step: 'Etapa 03: A Jornada',
        title: 'Seu Cronograma de Cuidado.',
        meta: {
            duration: 'Duração: 3 Meses',
            frequency: 'Frequência: Semanal/Quinzenal'
        },
        schedule: [
            { sess: "01", proc: "Limpeza Profunda", detail: "Preparação da Base" },
            { sess: "02", proc: "Fotobio + PRP (1)", detail: "Início da Ativação" },
            { sess: "03", proc: "Fotobiomodulação", detail: "Estímulo Suave" },
            { sess: "04", proc: "Fotobio + PRP (2)", detail: "Reforço Celular" },
            { sess: "05", proc: "Fotobiomodulação", detail: "Revitalização" },
            { sess: "06", proc: "Fotobio + PRP (3)", detail: "Ganho de Densidade" },
            { sess: "07", proc: "Fotobiomodulação", detail: "Manutenção do Viço" },
            { sess: "08", proc: "Fotobio + PRP (4)", detail: "Firmeza Profunda" },
            { sess: "09", proc: "Fotobiomodulação", detail: "Hidratação Profunda" },
            { sess: "10", proc: "Fotobio + PRP (5)", detail: "Consolidação" },
            { sess: "11", proc: "Finalização", detail: "Pele Renovada" },
        ],
        summary: {
            time: '3 Meses',
            label: 'Tratamento Completo'
        },
        footer: {
            note: '*Protocolo personalizado para sua necessidade',
            tech: 'Tecnologia + Biologia'
        }
    },
    professional: {
        profile: {
            role: 'Especialista em Longevidade',
            name: 'Dra. Vanderleia Prudêncio',
            location: 'Guarujá / SP',
            image: '/dra-vanderleia.jpg'
        },
        content: {
            title: 'Medicina que respeita sua história.',
            description: 'Minha missão não é transformar você em outra pessoa, mas trazer à tona a sua melhor versão. Unindo medicina integrativa e estética para um envelhecimento com qualidade.',
            stats: [
                { value: '10+', label: 'Anos de Cuidado' },
                { value: '5k+', label: 'Vidas Impactadas' },
                { value: '360º', label: 'Olhar Integral' }
            ],
            tags: ['Gerenciamento do Envelhecimento', 'Saúde da Mulher', 'Estética Natural', 'Bem-estar']
        }
    },
    testimonials: {
        header: {
            tag: 'Histórias Reais',
            title: 'Mulheres Reais, Resultados Reais.'
        },
        items: [
            {
                quote: "Tinha medo de ficar artificial, com aquela cara esticada. Amei porque recuperei o viço que tinha aos 30, mas continuo sendo eu mesma, só que mais descansada.",
                author: "Ana Clara, 44"
            },
            {
                quote: "Já tinha passado por 5 dermatologistas. Ninguém perguntou do meu intestino ou hormônios. Aqui foi a primeira pergunta. Isso mudou minha pele e minha disposição.",
                author: "Mariana S., 52"
            },
            {
                quote: "Não é sobre esconder a idade, é sobre estar bem nela. O protocolo me deu uma segurança e uma luminosidade que eu não sentia há anos.",
                author: "Roberta F., 46"
            }
        ]
    },
    finalCTA: {
        tag: 'Ciclo de Cuidado',
        title: {
            main: 'Recupere sua',
            highlight: 'autoestima.'
        },
        description: 'Avaliação detalhada, preparo do organismo e tecnologia segura. Um protocolo desenhado para quem valoriza a saúde.',
        location: {
            city: 'Guarujá • SP',
            mode: 'Presencial'
        },
        button: 'Agendar Avaliação',
        whatsappLink: "https://wa.me/5513988595323?text=Oi!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20do%20ciclo%20de%20gerenciamento%20do%20envelhecimento."
    },
    footer: {
        logoText: {
            line1: 'Medicina Integrativa e Estética',
            line2: 'Guarujá / SP'
        },
        presentation: 'Referência em gerenciamento do envelhecimento saudável. Unimos tecnologia e cuidado humano para resultados que duram.',
        links: [
            { label: 'O Método', href: '#metodo' },
            { label: 'Processo', href: '#como-funciona' },
            { label: 'Resultados', href: '#provas' },
        ],
        cta: 'Agendar',
        copyright: '© 2025 Plena Saúde.',
        legal: [
            { label: 'Privacidade', href: '/politica-de-privacidade' },
            { label: 'Termos', href: '/termos-de-uso' }
        ]
    }
};
