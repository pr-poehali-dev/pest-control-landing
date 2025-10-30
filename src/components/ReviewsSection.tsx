import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
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
  ];

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-muted-foreground">Что говорят о нас</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
  );
};

export default ReviewsSection;
