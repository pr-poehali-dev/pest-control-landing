import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Shield" size={32} className="text-primary" />
              <span className="font-bold text-2xl">ЭкоДез</span>
            </div>
            <p className="text-gray-300">
              Профессиональная служба дезинфекции. Работаем с 2014 года.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <a href="tel:+79999999999" className="hover:text-primary transition-colors">+7 (999) 999-99-99</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} />
                <a href="mailto:info@ekodez.ru" className="hover:text-primary transition-colors">info@ekodez.ru</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={20} />
                <span>Москва, работаем 24/7</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Режим работы</h3>
            <div className="space-y-2 text-gray-300">
              <p>Круглосуточно без выходных</p>
              <p>Выезд за 2 часа</p>
              <p>Консультация бесплатно</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ЭкоДез. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
