import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Server, AlertCircle } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function PoliticaDePrivacidade() {
  const sections = [
    {
      icon: Eye,
      title: "Informações Coletadas",
      content: "Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado. Os dados coletados podem incluir, mas não se limitam a: Nome, e-mail e telefone para fins de contato. O armazenamento e tratamento seguem rigorosamente a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)."
    },
    {
      icon: Server,
      title: "Uso da Informação",
      content: "A coleta automática de dados como endereço IP e cookies ocorre para garantir o desempenho, segurança e melhoria contínua da nossa plataforma. O compartilhamento de informações ocorre apenas quando necessário para conformidade legal, investigações de fraude ou proteção de nossos direitos."
    },
    {
      icon: Lock,
      title: "Compartilhamento de Dados",
      content: "Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Não vendemos nem alugamos seus dados pessoais para terceiros para fins de marketing."
    },
    {
      icon: FileText,
      title: "Retenção de Dados",
      content: "Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados."
    },
    {
      icon: ShieldCheck,
      title: "Protocolos de Segurança",
      content: "Utilizamos medidas físicas, eletrônicas e administrativas projetadas para proteger suas informações pessoais de perdas acidentais e de acesso, uso, alteração e divulgação não autorizados. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro."
    },
    {
      icon: AlertCircle,
      title: "Direitos do Usuário",
      content: "Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O usuário tem direito a solicitar informações sobre seus dados, correção de dados incompletos ou inexatos, anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050606] text-white selection:bg-clinical-accent/30">
      <Header />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-engineer opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clinical-accent/5 blur-[100px] rounded-full mix-blend-screen opacity-20" />
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
            Política de Privacidade
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 text-xs font-mono text-white/30"
          >
            <span className="uppercase tracking-widest">Documento Oficial</span>
            <span className="w-px h-3 bg-white/10" />
            <span className="uppercase tracking-widest">Atualizado: 01/01/2026</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 xl:gap-20">

          {/* Intro / Context (Left Column) */}
          <div className="hidden lg:block relative">
            <div className="sticky top-32 space-y-8">
              <p className="font-sans text-sm text-white/50 leading-relaxed">
                A transparência é a base de nossa relação clínica e digital. Este documento detalha como protegemos seus dados enquanto você navega em nossa infraestrutura.
              </p>
              <div className="flex flex-col gap-4 border-l border-white/10 pl-6 py-2">
                <span className="font-mono text-[10px] text-clinical-accent uppercase tracking-widest">Navegação Rápida</span>
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

            {/* Intro Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <p className="font-sans text-lg text-white/80 font-light leading-relaxed">
                A sua privacidade é importante para nós. É política da Plena Saúde respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Plena Saúde, e outros sites que possuímos e operamos.
              </p>
            </motion.div>

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
                  <div className="shrink-0 w-10 h-10 rounded-full bg-clinical-accent/5 flex items-center justify-center border border-clinical-accent/10 group-hover:border-clinical-accent/30 transition-colors">
                    <section.icon size={18} className="text-clinical-accent opacity-70 group-hover:opacity-100 transition-opacity" />
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

            {/* DPO Section */}
            <div className="mt-12 p-8 border border-clinical-accent/20 bg-clinical-accent/5 rounded-2xl">
              <h3 className="font-mono text-xs text-clinical-accent uppercase tracking-widest mb-4">Data Protection Officer</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Para exercer seus direitos de titular de dados ou esclarecer dúvidas, entre em contato com nosso DPO.
              </p>
              <a href="mailto:contato@plenasaude.com.br" className="text-white hover:text-clinical-accent transition-colors font-medium border-b border-white/20 pb-0.5">
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
