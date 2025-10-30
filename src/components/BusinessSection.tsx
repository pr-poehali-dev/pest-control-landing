import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BusinessSectionProps {
  scrollToSection: (id: string) => void;
}

const BusinessSection = ({ scrollToSection }: BusinessSectionProps) => {
  const businessTypes = [
    { icon: 'Utensils', name: 'Рестораны' },
    { icon: 'Coffee', name: 'Кафе' },
    { icon: 'Building', name: 'Отели' },
    { icon: 'Warehouse', name: 'Склады' },
    { icon: 'Store', name: 'Магазины' },
    { icon: 'Briefcase', name: 'Офисы' },
    { icon: 'Home', name: 'ЖК' },
    { icon: 'School', name: 'Учреждения' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Для организаций и бизнеса</h2>
          <p className="text-xl text-muted-foreground">Профессиональные решения для юридических лиц</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/285ef045-2680-448d-9785-021710daa341/files/d1e99181-c1d0-4f56-9516-8fbdc2148e9a.jpg"
              alt="Профессиональное оборудование"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Полный пакет документов</h3>
                <p className="text-muted-foreground">Договор, акты выполненных работ, санитарные заключения для проверяющих органов</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Calendar" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Гибкий график работы</h3>
                <p className="text-muted-foreground">Обработка в выходные, ночью или до открытия — когда удобно вашему бизнесу</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Repeat" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Абонентское обслуживание</h3>
                <p className="text-muted-foreground">Регулярные плановые обработки по выгодной цене. Скидки до 30% при долгосрочном договоре</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="ShieldCheck" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Соответствие СанПиН</h3>
                <p className="text-muted-foreground">Все препараты и методы обработки соответствуют требованиям Роспотребнадзора</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="CreditCard" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Безналичный расчет</h3>
                <p className="text-muted-foreground">Оплата по счету, работаем с НДС. Отсрочка платежа для постоянных клиентов</p>
              </div>
            </div>
            <Button size="lg" className="mt-6" onClick={() => scrollToSection('contacts')}>
              Получить коммерческое предложение
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Мы работаем с</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {businessTypes.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-white shadow-md flex items-center justify-center mb-3 hover:scale-110 transition-transform">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
