import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PainSection } from '@/components/sections/PainSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AestheticsSection } from '@/components/sections/AestheticsSection';
import { ForWhoSection } from '@/components/sections/ForWhoSection';
import { DeliverySection } from '@/components/sections/DeliverySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ProfessionalSection } from '@/components/sections/ProfessionalSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import { Reveal } from '@/components/ui/Reveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <MethodSection />
        <HowItWorksSection />
        <AestheticsSection />
        <ProfessionalSection />
        <DeliverySection />
        <ForWhoSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />

    </div>
  );
};

export default Index;
