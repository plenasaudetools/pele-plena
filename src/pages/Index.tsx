import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { DesejoSection } from '@/components/sections/DesejoSection';
import { ComparativoSection } from '@/components/sections/ComparativoSection';
import { VisibilidadeSection } from '@/components/sections/VisibilidadeSection';
import { ElevacaoSection } from '@/components/sections/ElevacaoSection';
import { ComoFuncionaSection } from '@/components/sections/ComoFuncionaSection';
import { ProvaSocialSection } from '@/components/sections/ProvaSocialSection';
import { EquipeSection } from '@/components/sections/EquipeSection';
import { PlataformaSection } from '@/components/sections/PlataformaSection';
import { CTAFinalSection } from '@/components/sections/CTAFinalSection';
import { LatestArticlesSection } from '@/components/sections/LatestArticlesSection';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* 1 — Hero */}
        <HeroSection />
        {/* 2 — O que você quer melhorar? */}
        <DesejoSection />
        {/* 3 — Comparativo PRP vs Protocolo */}
        <ComparativoSection />
        {/* 4 — Visibilidade do que temos (logo após comparativo) */}
        <VisibilidadeSection />
        {/* 5 — Elevação de consciência */}
        <ElevacaoSection />
        {/* 6 — Como funciona */}
        <div id="como-funciona">
          <ComoFuncionaSection />
        </div>
        {/* 7 — Prova social */}
        <ProvaSocialSection />
        {/* 8 — Plataforma (Acompanhamento) */}
        <PlataformaSection />
        {/* 9 — Equipe */}
        <EquipeSection />
        {/* 10 — CTA final */}
        <div id="cta-final">
          <CTAFinalSection />
        </div>

        {/* 11 — Latest Articles */}
        <LatestArticlesSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
