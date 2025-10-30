import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Ольга К.',
      text: 'Переехали в съёмную квартиру, а там тараканы... Кошмар просто. Позвонили в ЭкоДез, мастер Дмитрий приехал в тот же день. Обработал всё, объяснил что делать дальше. Прошло уже полгода — ни одного таракана, дети и кот здоровы. Огромное спасибо!',
      rating: 5
    },
    {
      name: 'Виктор Семёнович',
      text: 'Клопы появились после ремонта у соседей. Две недели не спал нормально, всё в укусах было. Друг посоветовал этих ребят. Приехали, обработали холодным туманом. Сначала думал не поможет, но клопы действительно исчезли! Уже 4 месяца сплю спокойно.',
      rating: 5
    },
    {
      name: 'Анна',
      text: 'На даче муравьи заполонили весь первый этаж, прямо колонны ползли по стенам. Вызвала дезинфекторов, мастер приехал через 3 часа. Работал минут 40, всё аккуратно, ничего не испачкал. Муравьи исчезли на следующий день. Цена нормальная, рекомендую!',
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