import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Bug',
      title: 'Уничтожение тараканов',
      description: 'Полное выведение тараканов за 1-2 обработки. Используем профессиональные препараты последнего поколения.',
      features: ['Без запаха', 'Холодный туман', 'Барьерная защита']
    },
    {
      icon: 'Bed',
      title: 'Уничтожение клопов',
      description: 'Эффективная борьба с постельными клопами. Обработка всех труднодоступных мест.',
      features: ['100% результат', 'Безопасно для детей', 'Гарантия 1 год']
    },
    {
      icon: 'Bug',
      title: 'Уничтожение муравьев',
      description: 'Полное уничтожение колоний муравьев. Находим и ликвидируем гнезда.',
      features: ['Быстрый эффект', 'Долгосрочная защита', 'Экологично']
    },
    {
      icon: 'Building2',
      title: 'Санитарная обработка для организаций',
      description: 'Профессиональная дезинфекция офисов, складов, ресторанов, магазинов. Договор и документы.',
      features: ['Работа по договору', 'Акты выполненных работ', 'Обработка вне рабочего времени']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground">Комплексная защита вашего дома и бизнеса</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
