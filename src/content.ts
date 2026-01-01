export const content = {
    header: {
        menu: [
            { label: 'Protocolo', href: '#metodo' },
            { label: 'Processo', href: '#como-funciona' },
            { label: 'Resultados', href: '#provas' },
        ],
        ctaButton: 'Reservar',
        whatsappLink: "https://wa.me/5513988595323?text=Oi!%20Eu%20quero%20agendar%20a%20Avalia%C3%A7%C3%A3o%20do%20M%C3%A9todo%20MAPA%20da%20Sa%C3%BAde.",
    },
    hero: {
        badge: {
            left: 'Ciclo Facial Integrativo',
            right: 'Plena Saúde'
        },
        title: {
            part1: 'Método,',
            part2: 'não milagre.'
        },
        description: 'Regeneração biológica conduzida. Do primeiro estímulo ao resultado sustentado.',
        cta: {
            label: 'Início do Ciclo',
            text: 'Conhecer o Ciclo',
        },
        status: {
            contact: 'Contato com equipe',
            availability: 'Agenda limitada'
        }
    },
    pain: {
        step: 'Etapa 01: O Filtro',
        title: {
            main: 'Nada começa na pele',
            highlight: 'sem entender o corpo.'
        },
        description: 'A biorressonância não é apenas um exame. É o mapa que nos diz onde há inflamação, carência ou excesso. Sem ela, qualquer tratamento estético é um tiro no escuro.',
        listTitle: 'O que acontece nesta fase:',
        points: [
            'Detectar cargas inflamatórias;',
            'Mapear deficiências de nutrientes;',
            'Preparar o terreno biológico.'
        ],
        steps: [
            { id: '01', label: 'Anamnese', value: 'Investigativa' },
            { id: '02', label: 'Biorressonância', value: 'Rastreio' },
            { id: '03', label: 'Inflamação', value: 'Detecção' },
            { id: '04', label: 'Plano', value: 'Personalizado' },
        ],
        phaseStatus: 'Fase: Mapeamento Completo'
    },
    method: {
        step: 'Etapa 02: O Método',
        title: 'Arquitetura do Tratamento.',
        description: 'Estimular a pele uma vez não muda comportamento celular. Repetição inteligente, sim.',
        highlight: 'Técnica sem constância é desperdício.',
        timeline: [
            {
                phase: "01",
                title: "Preparação da Base",
                tech_specs: ["Limpeza Profunda", "Desobstrução", "Receptividade"],
                desc: "Resultados sustentados exigem base limpa. Removemos barreiras para que o estímulo chegue onde precisa."
            },
            {
                phase: "02",
                title: "Estímulo Biológico",
                tech_specs: ["Laser 660nm", "LED Verde/Âmbar", "PRP Autólogo"],
                desc: "Fotobiomodulação e Fatores de Crescimento. Ensinamos a célula a trabalhar novamente, ativando colágeno real."
            },
            {
                phase: "03",
                title: "Sustentação",
                tech_specs: ["Cronograma", "Cuidados Diários", "Nutrição"],
                desc: "O que acontece entre as sessões decide o resultado. Manutenção assistida."
            }
        ]
    },
    howItWorks: {
        step: 'Etapa 03: A Jornada',
        title: 'Cronograma de 11 Sessões.',
        meta: {
            duration: 'Duração: 3 Meses',
            frequency: 'Frequência: Semanal/Quinzenal'
        },
        schedule: [
            { sess: "01", proc: "Limpeza Profunda", detail: "Preparação da Base" },
            { sess: "02", proc: "Fotobio + PRP (1)", detail: "Ativação Celular" },
            { sess: "03", proc: "Fotobiomodulação", detail: "Estímulo Contínuo" },
            { sess: "04", proc: "Fotobio + PRP (2)", detail: "Regeneração" },
            { sess: "05", proc: "Fotobiomodulação", detail: "Manutenção Energética" },
            { sess: "06", proc: "Fotobio + PRP (3)", detail: "Reforço de Colágeno" },
            { sess: "07", proc: "Fotobiomodulação", detail: "Sustentação" },
            { sess: "08", proc: "Fotobio + PRP (4)", detail: "Densidade Dérmica" },
            { sess: "09", proc: "Fotobiomodulação", detail: "Revitalização" },
            { sess: "10", proc: "Fotobio + PRP (5)", detail: "Maturação" },
            { sess: "11", proc: "Limpeza de Encerramento", detail: "Finalização do Ciclo" },
        ],
        summary: {
            time: '3 Meses',
            label: 'Ciclo Completo'
        },
        footer: {
            note: '*Protocolo Adaptável conforme resposta clínica',
            tech: 'Sintergia :: Fotobio + PRP'
        }
    },
    professional: {
        profile: {
            role: 'Especialista',
            name: 'Dra. Vanderleia Prudêncio',
            location: 'Guarujá / SP',
            image: '/dra-vanderleia.jpg' // Caminho da imagem na pasta public
        },
        content: {
            title: 'Medicina que investiga a causa, não o sintoma.',
            description: 'Combinando medicina integrativa, bioquímica e análise de estilo de vida para criar protocolos de saúde que realmente funcionam no longo prazo.',
            stats: [
                { value: '10+', label: 'Anos de Prática' },
                { value: '5k+', label: 'Casos Mapeados' },
                { value: '360º', label: 'Visão Clínica' }
            ],
            tags: ['Medicina Integrativa', 'Saúde da Mulher', 'Longevidade', 'Dermatologia Funcional']
        }
    },
    testimonials: {
        header: {
            tag: 'Histórias Reais',
            title: 'Resultados Validados.'
        },
        items: [
            {
                quote: "Não é só sobre emagrecer ou 'ficar bonita'. É sobre acordar de manhã e sentir que meu corpo funciona. A estética veio como bônus.",
                author: "Ana Clara, 34"
            },
            {
                quote: "Já tinha passado por 5 dermatologistas. Ninguém perguntou do meu intestino. Aqui foi a primeira pergunta. Isso mudou tudo.",
                author: "Mariana S., 29"
            },
            {
                quote: "O nível de detalhe dos exames e a explicação... eu nunca vi isso. Você entende o que está tomando e porquê. É medicina de outro nível.",
                author: "Roberta F., 41"
            }
        ]
    },
    finalCTA: {
        tag: 'Ciclo Facial',
        title: {
            main: 'Inicie sua',
            highlight: 'regeneração.'
        },
        description: 'Avaliação, preparo de terreno e tecnologia avançada. Um protocolo desenhado para resultados reais.',
        location: {
            city: 'Guarujá • SP',
            mode: 'Presencial'
        },
        button: 'Agendar Agora',
        whatsappLink: "https://wa.me/5513988595323?text=Oi!%20Gostaria%20de%20agendar%20a%20Avalia%C3%A7%C3%A3o%20para%20o%20Ciclo%20Facial."
    },
    footer: {
        logoText: {
            line1: 'Medicina Integrativa e Estética',
            line2: 'Guarujá / SP'
        },
        presentation: 'Referência em regeneração dérmica e saúde integrativa. Unimos tecnologia avançada e olhar clínico para resultados definitivos.',
        links: [
            { label: 'Protocolo', href: '#metodo' },
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
