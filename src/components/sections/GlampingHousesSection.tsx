import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import useEmblaCarousel from 'embla-carousel-react';

const houses = [
  {
    id: 1,
    name: 'Лесной шатёр',
    image: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/3c74a80f-66f0-44a4-a194-3ce7f61c5092.jpg',
    capacity: '2-4 человека',
    area: '25 м²',
    price: '5 500',
    features: ['Камин', 'WiFi', 'Кухня', 'Терраса'],
    description: 'Уютный купольный шатёр с панорамными окнами и видом на лес',
    highlight: 'Хит сезона'
  },
  {
    id: 2,
    name: 'Скандинавский домик',
    image: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/2eb98513-b0d0-44a8-abc3-9c8f5111e298.jpg',
    capacity: '2-6 человек',
    area: '40 м²',
    price: '7 200',
    features: ['Баня', 'WiFi', 'BBQ', 'Кухня'],
    description: 'Просторный домик в скандинавском стиле с собственной баней',
    highlight: 'Премиум'
  },
  {
    id: 3,
    name: 'Семейное гнездо',
    image: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg',
    capacity: '4-8 человек',
    area: '55 м²',
    price: '9 800',
    features: ['2 спальни', 'WiFi', 'Камин', 'Кухня'],
    description: 'Большой двухэтажный дом для семейного отдыха с детьми',
    highlight: 'Для семей'
  }
];

export default function GlampingHousesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <Icon name="Home" size={24} className="text-primary" />
            <span className="text-lg font-semibold text-primary">Глемпинг домики</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight">
            Выберите свой идеальный дом
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждый домик — это уникальное пространство для отдыха на лоне природы
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-14 h-14 rounded-full bg-card shadow-xl border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            aria-label="Предыдущий"
          >
            <Icon name="ChevronLeft" size={28} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-14 h-14 rounded-full bg-card shadow-xl border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            aria-label="Следующий"
          >
            <Icon name="ChevronRight" size={28} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {houses.map((house) => (
                <div key={house.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0">
                  <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full bg-card">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={house.image}
                        alt={house.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 shadow-lg border-0">
                          {house.highlight}
                        </Badge>
                      </div>

                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                          <Icon name="Heart" size={22} className="text-white" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors cursor-pointer">
                          <Icon name="Share2" size={20} className="text-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{house.name}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{house.description}</p>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Users" size={18} className="text-accent" />
                          <span>{house.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Maximize2" size={18} className="text-accent" />
                          <span>{house.area}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {house.features.map((feature, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="text-xs px-3 py-1 border-primary/30 text-primary"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <div className="flex items-end justify-between mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">За ночь</div>
                            <div className="text-4xl font-bold text-primary">{house.price} ₽</div>
                          </div>
                          <div className="text-xs text-muted-foreground text-right">
                            Минимум<br/>2 ночи
                          </div>
                        </div>
                        <Button 
                          className="w-full h-12 text-base font-semibold shadow-lg group-hover:shadow-xl transition-all" 
                          size="lg"
                        >
                          Забронировать
                          <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg px-8 h-14">
            Посмотреть все варианты
            <Icon name="ExternalLink" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
