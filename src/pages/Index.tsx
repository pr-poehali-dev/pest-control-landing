import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в течение 15 минут');
    setFormData({ name: '', phone: '', address: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Комплексная защита вашего дома и бизнеса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((service, index) => (
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

      {/* Business Section */}
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
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Цены</h2>
            <p className="text-xl text-muted-foreground">Прозрачные тарифы без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
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
            ].map((plan, index) => (
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

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши гарантии</h2>
            <p className="text-xl text-muted-foreground">Почему нам доверяют</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Гарантия результата',
                description: 'Бесплатная повторная обработка в течение гарантийного срока'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Используем только сертифицированные препараты'
              },
              {
                icon: 'Clock',
                title: 'Срочный выезд',
                description: 'Приедем в удобное для вас время, даже ночью'
              },
              {
                icon: 'Users',
                title: 'Опыт 10 лет',
                description: 'Более 5000 довольных клиентов в Москве'
              }
            ].map((guarantee, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={guarantee.icon as any} size={40} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Мария Иванова',
                text: 'Спасибо огромное! Долго мучились с тараканами, перепробовали все средства. Ребята приехали, обработали за час, и больше ни одного таракана! Уже 8 месяцев живем спокойно.',
                rating: 5
              },
              {
                name: 'Алексей Петров',
                text: 'Очень профессиональный подход. Клопы исчезли после первой обработки. Мастер всё объяснил, дал рекомендации. Цена адекватная, качество отличное.',
                rating: 5
              },
              {
                name: 'Елена Смирнова',
                text: 'Вызывали на дачу от муравьев. Приехали быстро, работали аккуратно. Муравьи пропали полностью. Теперь рекомендую всем знакомым!',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Клиент</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Заказать обработку</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/285ef045-2680-448d-9785-021710daa341/files/f88bb0b2-803b-47dc-8350-5b94e1c53e84.jpg"
                  alt="Счастливая семья"
                  className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
              </div>
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Ваше имя</label>
                      <Input 
                        required
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Телефон</label>
                      <Input 
                        required
                        type="tel"
                        placeholder="+7 (999) 999-99-99"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Адрес</label>
                      <Input 
                        required
                        placeholder="Москва, ул. Примерная, д. 1"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Комментарий</label>
                      <Textarea 
                        placeholder="Опишите вашу проблему..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;