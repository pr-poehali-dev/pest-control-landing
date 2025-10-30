import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Избавим от тараканов и клопов за 1 день
            </h1>
            <p className="text-xl text-muted-foreground">
              Профессиональная дезинфекция с гарантией результата. Безопасные препараты. Выезд за 2 часа.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} className="text-primary" />
                <span className="text-foreground">Без запаха</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} className="text-primary" />
                <span className="text-foreground">Без пятен</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" size={24} className="text-primary" />
                <span className="text-foreground">Гарантия 1 год</span>
              </div>
            </div>
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('contacts')}>
              Вызвать специалиста
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/285ef045-2680-448d-9785-021710daa341/files/c73c961e-57f8-4b32-94a6-0c2bcf55fc5c.jpg"
              alt="Профессиональная дезинфекция"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
