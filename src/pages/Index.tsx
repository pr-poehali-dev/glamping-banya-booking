import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'
  ];

  const services = [
    {
      title: 'Баня на дровах',
      description: 'Традиционная русская баня с парной на берёзовых дровах',
      price: '3000 ₽/час',
      icon: 'Flame'
    },
    {
      title: 'Купель с холодной водой',
      description: 'Освежающая купель с родниковой водой',
      price: 'Включено',
      icon: 'Droplets'
    },
    {
      title: 'Чайная церемония',
      description: 'Травяные чаи и угощения после бани',
      price: '500 ₽',
      icon: 'Coffee'
    },
    {
      title: 'Массаж вениками',
      description: 'Профессиональный массаж берёзовыми вениками',
      price: '1500 ₽',
      icon: 'Wind'
    }
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg',
      title: 'Интерьер бани'
    },
    {
      url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/3c74a80f-66f0-44a4-a194-3ce7f61c5092.jpg',
      title: 'Купольный шатёр'
    },
    {
      url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/2eb98513-b0d0-44a8-abc3-9c8f5111e298.jpg',
      title: 'Территория глемпинга'
    }
  ];



  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Icon name="Trees" size={28} />
            ЛесБаня
          </h1>
          <div className="flex gap-6">
            <a href="#events" className="hover:text-accent transition-colors">Мероприятия</a>
            <a href="#sauna" className="hover:text-accent transition-colors">Баня</a>
            <a href="#booking" className="hover:text-accent transition-colors">Бронирование</a>
            <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
          </div>
        </nav>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/2eb98513-b0d0-44a8-abc3-9c8f5111e298.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Уединение в природе</h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">Глемпинг с баней на дровах и видом на лес</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Icon name="Calendar" size={20} className="mr-2" />
            Забронировать
          </Button>
        </div>
      </section>

      <section id="events" className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-orange-950 via-purple-950 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🎃</div>
          <div className="absolute top-40 right-20 text-5xl">👻</div>
          <div className="absolute bottom-20 left-1/4 text-5xl">🦇</div>
          <div className="absolute bottom-40 right-1/3 text-6xl">🍂</div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-lg">
              🎃 Хеллоуин 2025
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-orange-400">
              Мистическая ночь в лесу
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Встречайте самую страшную и уютную ночь в году вместе с нами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-black/60 border-orange-500 backdrop-blur-xl hover:scale-105 transition-transform shadow-2xl shadow-orange-500/20">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/cccf383f-2931-48e3-b1c3-1e54bd40da00.jpg"
                  alt="Halloween"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-600 text-white animate-pulse">
                    🔥 Горячее
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Ghost" size={32} className="text-orange-400" />
                  <div>
                    <CardTitle className="text-2xl text-white font-bold">Хеллоуин в глемпинге</CardTitle>
                    <p className="text-orange-300 text-sm font-medium">31 октября, 18:00 - 23:00</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-100 text-base leading-relaxed">
                  Незабываемая ночь с тыквенными фонарями, страшными историями у костра, 
                  угощениями и сюрпризами. Территория украшена в хеллоуинском стиле.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-orange-400" />
                    <span>Тематическое оформление территории</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-orange-400" />
                    <span>Костёр и страшные истории</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-orange-400" />
                    <span>Угощения и глинтвейн</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-orange-400">5000 ₽</span>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    <Icon name="Ticket" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-purple-500 backdrop-blur-xl hover:scale-105 transition-transform shadow-2xl shadow-purple-500/20">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/83c66046-3997-48de-a764-7ae5fa1467f0.jpg"
                  alt="Mystery Walk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-600 text-white">
                    ✨ Новинка
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Moon" size={32} className="text-purple-400" />
                  <div>
                    <CardTitle className="text-2xl text-white font-bold">Мистический квест</CardTitle>
                    <p className="text-purple-300 text-sm font-medium">31 октября, 20:00 - 22:00</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-100 text-base leading-relaxed">
                  Увлекательное путешествие по ночному лесу с загадками и тайнами. 
                  Найдите все артефакты и раскройте секрет лесной легенды.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-purple-400" />
                    <span>Прогулка по ночному лесу</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-purple-400" />
                    <span>Загадки и головоломки</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Icon name="Check" size={18} className="text-purple-400" />
                    <span>Призы победителям</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-purple-400">3500 ₽</span>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    <Icon name="Ticket" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/60 border-orange-500 backdrop-blur-xl shadow-2xl shadow-orange-500/20">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="relative h-64 md:h-full overflow-hidden rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/709f7816-12a9-41b4-9755-bf51945281a8.jpg"
                  alt="Bonfire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Flame" size={40} className="text-orange-400" />
                  <h3 className="text-3xl font-bold text-white">Ночь у костра</h3>
                </div>
                <p className="text-gray-100 text-lg">
                  После квеста всех ждёт уютный костёр с горячим глинтвейном, 
                  жареным зефиром и атмосферными историями до самого утра.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-orange-600/30 rounded-lg border border-orange-500/30">
                    <Icon name="Users" size={32} className="mx-auto mb-2 text-orange-400" />
                    <p className="text-white font-semibold">До 20 человек</p>
                  </div>
                  <div className="text-center p-4 bg-orange-600/30 rounded-lg border border-orange-500/30">
                    <Icon name="Clock" size={32} className="mx-auto mb-2 text-orange-400" />
                    <p className="text-white font-semibold">5 часов</p>
                  </div>
                </div>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Забронировать всё вместе за 7500 ₽
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-orange-200/60 text-sm mb-4">
              🎃 Количество мест ограничено • Бронируйте заранее
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-[#FAF8F3] to-[#F5F1E8]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#53624E] text-white px-6 py-2 text-lg">
              🌲 Регулярные события
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#53624E]">
              Отдых круглый год
            </h2>
            <p className="text-xl text-[#53624E]/70 max-w-2xl mx-auto">
              Каждые выходные мы проводим уютные мероприятия для всей семьи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/80 border-[#53624E] backdrop-blur-sm hover:scale-105 transition-transform shadow-xl shadow-[#53624E]/10">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/0cf3c686-c0c2-4a7e-8343-09ba2cf3c81d.jpg"
                  alt="Зимний отдых"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#B99D75] text-white">
                    ❄️ Сезонное
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Snowflake" size={32} className="text-[#53624E]" />
                  <div>
                    <CardTitle className="text-2xl text-[#2D3A29] font-bold">Зимние выходные</CardTitle>
                    <p className="text-[#B99D75] text-sm font-medium">Каждую субботу и воскресенье</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#53624E]/80 text-base leading-relaxed">
                  Проведите выходные в уютном глемпинге с баней на дровах. 
                  В стоимость входит аренда домика, пользование сауной и зона отдыха у костра.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>Баня на дровах (3 часа)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>Аренда домика (сутки)</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>Дрова для костра</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-[#B99D75]">8500 ₽</span>
                  <Button size="lg" className="bg-[#53624E] hover:bg-[#3F4A3B] text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 border-[#53624E] backdrop-blur-sm hover:scale-105 transition-transform shadow-xl shadow-[#53624E]/10">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg"
                  alt="Банный день"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#B99D75] text-white">
                    🔥 Популярное
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="Flame" size={32} className="text-[#53624E]" />
                  <div>
                    <CardTitle className="text-2xl text-[#2D3A29] font-bold">Банный день</CardTitle>
                    <p className="text-[#B99D75] text-sm font-medium">Среда и пятница, 14:00 - 20:00</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-[#53624E]/80 text-base leading-relaxed">
                  Почувствуйте настоящий русский жар! Парная на дровах с панорамными окнами, 
                  купель с ледяной водой и травяные чаи на открытой террасе.
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>3 часа в парной</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>Веники и ароматы</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#2D3A29]">
                    <Icon name="Check" size={18} className="text-[#53624E]" />
                    <span>Травяной чай</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold text-[#B99D75]">3500 ₽</span>
                  <Button size="lg" className="bg-[#53624E] hover:bg-[#3F4A3B] text-white">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="sauna" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наша баня</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg"
                alt="Баня"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="Flame" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Традиционная парная</h3>
                  <p className="text-muted-foreground">Баня на дровах с панорамными окнами и видом на лес. Вместимость до 8 человек.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Thermometer" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Идеальный жар</h3>
                  <p className="text-muted-foreground">Температура до 90°C, регулируемая влажность. Берёзовые и дубовые веники.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Droplets" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Купель с ледяной водой</h3>
                  <p className="text-muted-foreground">Освежающая купель с родниковой водой на открытом воздухе.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Бронирование</h2>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Выберите дату и время</CardTitle>
              <CardDescription>Минимальное бронирование — 2 часа</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="calendar" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="calendar">Выбор даты</TabsTrigger>
                  <TabsTrigger value="time">Выбор времени</TabsTrigger>
                </TabsList>
                <TabsContent value="calendar" className="mt-6">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="time" className="mt-6">
                  <div className="space-y-4">
                    <p className="text-center text-muted-foreground mb-4">
                      Выбранная дата: <span className="font-semibold text-foreground">
                        {date?.toLocaleDateString('ru-RU')}
                      </span>
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? 'default' : 'outline'}
                          className="h-14"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    {selectedTime && (
                      <div className="mt-8 p-6 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2 text-lg">Детали бронирования:</h4>
                        <p className="mb-1">Дата: {date?.toLocaleDateString('ru-RU')}</p>
                        <p className="mb-4">Время: {selectedTime}</p>
                        <Button className="w-full" size="lg">
                          <Icon name="Check" size={20} className="mr-2" />
                          Подтвердить бронирование
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Icon name="Trees" size={32} />
            <h3 className="text-2xl font-bold">ЛесБаня</h3>
          </div>
          <p className="text-primary-foreground/80 mb-4">Глемпинг с баней в окружении природы</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="tel:+79991234567" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </a>
            <a href="mailto:info@lesbanya.ru" className="hover:text-accent transition-colors flex items-center gap-2">
              <Icon name="Mail" size={20} />
              info@lesbanya.ru
            </a>
          </div>
          <p className="text-sm text-primary-foreground/60">© 2024 ЛесБаня. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}