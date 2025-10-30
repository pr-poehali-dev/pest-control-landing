import Icon from '@/components/ui/icon';

const GuaranteesSection = () => {
  const guarantees = [
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
  ];

  return (
    <section id="guarantees" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Наши гарантии</h2>
          <p className="text-xl text-muted-foreground">Почему нам доверяют</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee, index) => (
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
  );
};

export default GuaranteesSection;
