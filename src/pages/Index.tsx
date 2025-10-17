import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    program: ''
  });

  const programs = [
    {
      title: 'Силовые тренировки',
      description: 'Наращивание мышечной массы и силы',
      icon: 'Dumbbell',
      level: 'Все уровни'
    },
    {
      title: 'Кардио',
      description: 'Развитие выносливости и сжигание калорий',
      icon: 'Heart',
      level: 'Начинающие'
    },
    {
      title: 'Йога и растяжка',
      description: 'Гибкость, баланс и релаксация',
      icon: 'Sparkles',
      level: 'Все уровни'
    },
    {
      title: 'Групповые занятия',
      description: 'Мотивация в команде единомышленников',
      icon: 'Users',
      level: 'Все уровни'
    }
  ];

  const schedule = [
    { time: '07:00 - 08:00', monday: 'Йога', tuesday: 'Кардио', wednesday: 'Йога', thursday: 'Силовая', friday: 'Кардио' },
    { time: '09:00 - 10:00', monday: 'Силовая', tuesday: 'Групповая', wednesday: 'Силовая', thursday: 'Йога', friday: 'Групповая' },
    { time: '12:00 - 13:00', monday: 'Кардио', tuesday: 'Силовая', wednesday: 'Групповая', thursday: 'Кардио', friday: 'Силовая' },
    { time: '18:00 - 19:00', monday: 'Групповая', tuesday: 'Йога', wednesday: 'Кардио', thursday: 'Групповая', friday: 'Йога' },
    { time: '19:00 - 20:00', monday: 'Силовая', tuesday: 'Кардио', wednesday: 'Силовая', thursday: 'Групповая', friday: 'Кардио' }
  ];

  const prices = [
    {
      title: 'Базовый',
      price: '2 990',
      period: 'месяц',
      features: ['8 посещений', 'Тренажёрный зал', 'Раздевалки и душ', 'Wi-Fi'],
      popular: false
    },
    {
      title: 'Стандарт',
      price: '4 990',
      period: 'месяц',
      features: ['Безлимитный доступ', 'Все групповые занятия', 'Сауна', 'Персональная программа', 'Wi-Fi и парковка'],
      popular: true
    },
    {
      title: 'Премиум',
      price: '7 990',
      period: 'месяц',
      features: ['Всё из Стандарта', '4 персональные тренировки', 'Массаж 2 раза/месяц', 'Консультация нутрициолога', 'Приоритетная запись'],
      popular: false
    }
  ];

  const nutrition = [
    {
      title: 'Протеиновые коктейли',
      description: 'Для набора мышечной массы',
      image: 'https://cdn.poehali.dev/projects/08d599f6-83b5-41df-8bb0-c77387773f1e/files/df3a4844-735d-44f3-8ce7-2b106a25b978.jpg'
    },
    {
      title: 'Диета для похудения',
      description: 'Сбалансированный рацион с дефицитом калорий',
      image: 'https://cdn.poehali.dev/projects/08d599f6-83b5-41df-8bb0-c77387773f1e/files/df3a4844-735d-44f3-8ce7-2b106a25b978.jpg'
    },
    {
      title: 'Набор массы',
      description: 'Высококалорийное питание для роста мышц',
      image: 'https://cdn.poehali.dev/projects/08d599f6-83b5-41df-8bb0-c77387773f1e/files/df3a4844-735d-44f3-8ce7-2b106a25b978.jpg'
    }
  ];

  const news = [
    {
      title: 'Открытие нового зала групповых тренировок',
      date: '15 октября 2024',
      description: 'Мы расширились! Теперь у нас есть отдельный зал площадью 200 кв.м для групповых занятий.'
    },
    {
      title: 'Чемпион мира проведёт мастер-класс',
      date: '20 октября 2024',
      description: 'Встречайте звезду! Мастер-класс по функциональному тренингу от чемпиона мира.'
    },
    {
      title: 'Новая линейка спортивного питания',
      date: '25 октября 2024',
      description: 'В нашем баре появилась премиальная линейка спортпита с натуральным составом.'
    }
  ];

  const offers = [
    {
      title: 'Приведи друга',
      discount: '-50%',
      description: 'Получи скидку 50% на абонемент при покупке для друга'
    },
    {
      title: 'Первый месяц',
      discount: '-30%',
      description: 'Для новых клиентов скидка 30% на первый месяц'
    }
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Запись успешно создана!',
      description: `${formData.name}, мы ждём вас ${formData.date} в ${formData.time}`,
    });
    setBookingOpen(false);
    setFormData({ name: '', phone: '', date: '', time: '', program: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Dumbbell" className="text-primary" size={32} />
              <span className="text-2xl font-bold">FitClub</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#programs" className="hover:text-primary transition-colors">Программы</a>
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
              <a href="#nutrition" className="hover:text-primary transition-colors">Питание</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#offers" className="hover:text-primary transition-colors">Акции</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="font-semibold">
                  Записаться
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Онлайн-запись на тренировку</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами для подтверждения
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 999-99-99"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Программа</Label>
                    <Select value={formData.program} onValueChange={(value) => setFormData({ ...formData, program: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите программу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strength">Силовые тренировки</SelectItem>
                        <SelectItem value="cardio">Кардио</SelectItem>
                        <SelectItem value="yoga">Йога и растяжка</SelectItem>
                        <SelectItem value="group">Групповые занятия</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время</Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Записаться
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/08d599f6-83b5-41df-8bb0-c77387773f1e/files/313321ee-f13a-43cb-9394-ed0bee5cbe46.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Преврати свое тело<br />в произведение искусства
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Современный фитнес-клуб с профессиональными тренерами и новейшим оборудованием
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Первая тренировка бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              Смотреть расписание
            </Button>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы тренировок</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту. Выберите программу под свои цели
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{program.level}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Расписание занятий</h2>
            <p className="text-lg text-muted-foreground">
              Удобное время для любого графика
            </p>
          </div>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="p-4 text-left">Время</th>
                    <th className="p-4 text-left">Понедельник</th>
                    <th className="p-4 text-left">Вторник</th>
                    <th className="p-4 text-left">Среда</th>
                    <th className="p-4 text-left">Четверг</th>
                    <th className="p-4 text-left">Пятница</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold">{row.time}</td>
                      <td className="p-4">{row.monday}</td>
                      <td className="p-4">{row.tuesday}</td>
                      <td className="p-4">{row.wednesday}</td>
                      <td className="p-4">{row.thursday}</td>
                      <td className="p-4">{row.friday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section id="prices" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены и абонементы</h2>
            <p className="text-lg text-muted-foreground">
              Выгодные предложения для любого бюджета
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-2xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 text-sm">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon name="Check" className="text-primary mr-2 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" size="lg" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Спортивное питание и диеты</h2>
            <p className="text-lg text-muted-foreground">
              Правильное питание — 70% успеха
            </p>
          </div>
          <Tabs defaultValue="nutrition" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nutrition">Спортпит</TabsTrigger>
              <TabsTrigger value="diet">Диеты</TabsTrigger>
            </TabsList>
            <TabsContent value="nutrition" className="mt-6">
              <div className="grid md:grid-cols-3 gap-6">
                {nutrition.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }} />
                    <CardHeader>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="diet" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Персональные планы питания</CardTitle>
                  <CardDescription>
                    Наш нутрициолог разработает индивидуальный план питания с учётом ваших целей, особенностей организма и вкусовых предпочтений
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Расчёт калорий и БЖУ</h4>
                      <p className="text-sm text-muted-foreground">Точный подсчёт под ваши цели</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Меню на неделю</h4>
                      <p className="text-sm text-muted-foreground">Готовые рецепты с калорийностью</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" className="text-primary mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold">Поддержка 24/7</h4>
                      <p className="text-sm text-muted-foreground">Консультации в чате</p>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Новости и события</h2>
            <p className="text-lg text-muted-foreground">
              Следите за жизнью клуба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{item.date}</Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Акции и спецпредложения</h2>
            <p className="text-lg text-muted-foreground">
              Выгодные условия для новых и постоянных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offers.map((offer, index) => (
              <Card key={index} className="bg-gradient-to-br from-primary to-secondary text-white border-0 hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="text-6xl font-bold mb-2">{offer.discount}</div>
                  <CardTitle className="text-2xl text-white">{offer.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    {offer.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" size="lg" className="w-full">
                    Получить скидку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://cdn.poehali.dev/projects/08d599f6-83b5-41df-8bb0-c77387773f1e/files/e687c925-efdf-4404-9c89-5b694f764692.jpg')`
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg">
              Приходите на бесплатную тренировку
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <Icon name="MapPin" className="text-primary mb-2" size={32} />
                <CardTitle>Адрес</CardTitle>
                <CardDescription>
                  г. Москва, ул. Спортивная, 15<br />
                  ТЦ "Атлант", 3 этаж
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <Icon name="Phone" className="text-primary mb-2" size={32} />
                <CardTitle>Телефон</CardTitle>
                <CardDescription>
                  +7 (495) 123-45-67<br />
                  Ежедневно 7:00 - 23:00
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <Icon name="Mail" className="text-primary mb-2" size={32} />
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  info@fitclub.ru<br />
                  Ответим в течение часа
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Dumbbell" size={28} />
                <span className="text-xl font-bold">FitClub</span>
              </div>
              <p className="text-sm opacity-80">
                Современный фитнес-клуб для достижения ваших целей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#programs" className="hover:opacity-100">Программы</a></li>
                <li><a href="#schedule" className="hover:opacity-100">Расписание</a></li>
                <li><a href="#prices" className="hover:opacity-100">Цены</a></li>
                <li><a href="#nutrition" className="hover:opacity-100">Питание</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#news" className="hover:opacity-100">Новости</a></li>
                <li><a href="#offers" className="hover:opacity-100">Акции</a></li>
                <li><a href="#contacts" className="hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
                <Icon name="Facebook" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
                <Icon name="Twitter" className="cursor-pointer hover:scale-110 transition-transform" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2024 FitClub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
