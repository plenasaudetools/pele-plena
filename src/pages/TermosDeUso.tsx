import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, ShieldAlert, Scale, Clock, RefreshCw, Globe } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function TermosDeUso() {
  const sections = [
    {
      icon: Book,
      title: "Termos Gerais",
      content: "Ao acessar o site Plena Saúde, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site."
    },
    {
      icon: Globe,
      title: "Descrição dos Serviços",
      content: "A Plena Saúde oferece serviços de saúde integrativa baseados no Método MAPA (Mapeamento Avaliativo de Processos Avançados), que inclui avaliações clínicas detalhadas, acompanhamento contínuo, protocolos individualizados e conteúdo informativo sobre saúde e bem-estar."
    },
    {
      icon: Scale,
      title: "Uso de Licença",
      content: "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Plena Saúde, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título. Sob esta licença, você não pode modificar, copiar, usar para fins comerciais, tentar engenharia reversa ou transferir os materiais."
    },
    {
      icon: ShieldAlert,
      title: "Isenção de Responsabilidade",
      content: "Os materiais no site da Plena Saúde são fornecidos 'como estão'. A Plena Saúde não oferece garantias, expressas ou implícitas, e isenta todas as outras garantias. As informações são educativas e não substituem consulta médica profissional. Sempre procure o conselho do seu médico."
    },
    {
      icon: Clock,
      title: "Agendamentos",
      content: "Os agendamentos são realizados preferencialmente via WhatsApp ou sistema integrado, sujeitos à disponibilidade. Solicitamos que cancelamentos ou reagendamentos sejam comunicados com no mínimo 24 horas de antecedência."
    },
    {
      icon: RefreshCw,
      title: "Modificações",
      content: "A Plena Saúde pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050606] text-white selection:bg-clinical-accent/30">
      <Header />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-engineer opacity-[0.03]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full mix-blend-screen opacity-10" />
      </div>

      <main className="container-clinical pt-32 pb-24 relative z-10 w-full max-w-5xl mx-auto px-6">

        {/* Header Block */}
        <div className="mb-20 border-b border-white/5 pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/40 hover:text-clinical-accent transition-colors mb-8 group"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
            Voltar ao início
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-instrument text-5xl md:text-6xl text-white mb-6"
          >
            Termos de Uso
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 text-xs font-mono text-white/30"
          >
            <span className="uppercase tracking-widest">Documento Legal</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="uppercase tracking-widest">Vigência: 2026</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 xl:gap-20">

          {/* Intro / Context (Left Column) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 space-y-8">
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                Estabelecemos aqui as regras que regem a utilização de nossa plataforma e a prestação de nossos serviços digitais.
              </p>
              <div className="flex flex-col gap-4 border-l border-white/10 pl-6 py-2">
                <span className="font-mono text-[10px] text-clinical-accent uppercase tracking-widest">Índice</span>
                <div className="flex flex-col gap-3 text-xs text-white/40 font-mono">
                  {sections.map((s, i) => (
                    <a key={i} href={`#section-${i}`} className="hover:text-white transition-colors">
                      0{i + 1}. {s.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Cards (Right Column) */}
          <div className="space-y-6">

            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                id={`section-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group relative p-8 md:p-10 rounded-2xl bg-[#080a0a] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                    <section.icon size={18} className="text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-instrument text-2xl text-white flex items-center gap-3">
                      <span className="font-mono text-xs text-white/20 translate-y-0.5">0{idx + 1}</span>
                      {section.title}
                    </h2>
                    <p className="font-sans text-sm md:text-base text-white/50 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.section>
            ))}

            {/* Contact Footer */}
            <div className="mt-12 text-center pt-8 border-t border-white/5">
              <p className="font-mono text-xs text-white/30 uppercase tracking-widest mb-2">Dúvidas Jurídicas?</p>
              <a href="mailto:contato@plenasaude.com.br" className="text-white hover:text-clinical-accent transition-colors">
                contato@plenasaude.com.br
              </a>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
