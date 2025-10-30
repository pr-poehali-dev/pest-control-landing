import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricesSectionProps {
  scrollToSection: (id: string) => void;
}

const PricesSection = ({ scrollToSection }: PricesSectionProps) => {
  const plans = [
    {
      title: '1-комнатная',
      price: '2 500',
      features: ['До 40 м²', 'Все виды насекомых', 'Гарантия 6 месяцев', 'Выезд за 2 часа']
    },
    {
      title: '2-комнатная',
      price: '3 500',
      features: ['До 60 м²', 'Все виды насекомых', 'Гарантия 1 год', 'Выезд за 2 часа'],
      popular: true
    },
    {
      title: '3-комнатная',
      price: '4 500',
      features: ['До 80 м²', 'Все виды насекомых', 'Гарантия 1 год', 'Выезд за 2 часа']
    }
  ];

  return (
    <section id="prices" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Цены</h2>
          <p className="text-xl text-muted-foreground">Прозрачные тарифы без скрытых платежей</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} onClick={() => scrollToSection('contacts')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
