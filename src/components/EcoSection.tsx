import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EcoSection = () => {
  const features = [
    {
      icon: 'Leaf',
      title: 'Безопасные препараты',
      description: 'Используем только сертифицированные средства 4 класса опасности — безвредны для людей и животных'
    },
    {
      icon: 'Baby',
      title: 'Подходит для детских комнат',
      description: 'Наши препараты одобрены для обработки детских садов, школ и больниц'
    },
    {
      icon: 'Award',
      title: 'Полная сертификация',
      description: 'Все препараты имеют регистрационные удостоверения Роспотребнадзора'
    },
    {
      icon: 'Home',
      title: 'Без запаха и пятен',
      description: 'Препараты не оставляют следов на мебели и не имеют неприятного запаха'
    }
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-6">
            <Icon name="Sprout" size={32} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Экологичная обработка</h2>
          <p className="text-xl text-muted-foreground">
            Мы заботимся о вашем здоровье и используем только безопасные сертифицированные препараты
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
                  <Icon name={feature.icon} size={28} className="text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Наши сертификаты</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Лицензия на право осуществления дезинфекционной деятельности</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Регистрационные удостоверения Роспотребнадзора на все препараты</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Заключения СЭС о соответствии санитарным нормам</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Сертификаты ISO 9001 на систему менеджмента качества</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/285ef045-2680-448d-9785-021710daa341/files/05767d55-d89b-4fc8-92b7-7ad4c21df0b7.jpg"
                alt="Сертификаты"
                className="rounded-xl shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl">
                <p className="font-bold text-lg">11 лет</p>
                <p className="text-sm">на рынке</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoSection;
