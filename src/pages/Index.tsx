import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import EcoSection from '@/components/EcoSection';
import PricesSection from '@/components/PricesSection';
import BusinessSection from '@/components/BusinessSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <EcoSection />
      <PricesSection scrollToSection={scrollToSection} />
      <BusinessSection scrollToSection={scrollToSection} />
      <GuaranteesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;