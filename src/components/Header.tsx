import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Shield" size={32} className="text-primary" />
          <span className="font-bold text-2xl text-foreground">ЭкоДез</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
          <button onClick={() => scrollToSection('prices')} className="text-foreground hover:text-primary transition-colors">Цены</button>
          <button onClick={() => scrollToSection('guarantees')} className="text-foreground hover:text-primary transition-colors">Гарантии</button>
          <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
          <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">Контакты</button>
        </nav>
        <a href="tel:+79999999999" className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
          <Icon name="Phone" size={20} />
          <span className="hidden lg:inline">+7 (999) 999-99-99</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
