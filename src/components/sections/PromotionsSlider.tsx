import { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import useEmblaCarousel from 'embla-carousel-react';

export default function PromotionsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#2D3A29] via-[#3F4A3B] to-[#53624E]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#B99D75] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#53624E] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-8 py-4 bg-[#B99D75]/20 backdrop-blur-sm rounded-full border-2 border-[#B99D75]/40">
            <Icon name="Sparkles" size={28} className="text-[#B99D75]" />
            <span className="text-2xl font-bold text-[#B99D75] tracking-wide">Акции и предложения</span>
            <Icon name="Sparkles" size={28} className="text-[#B99D75]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Ловите момент
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
            Специальные предложения, которые действуют прямо сейчас
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              <div className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#B99D75] to-[#53624E] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <Card className="relative bg-[#FAF8F3] border-0 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B99D75]/20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#53624E]/10 rounded-tr-full"></div>
                    
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/db53b4b8-26da-4287-9da9-fbd56b1280ad.jpg"
                        alt="Осенний уикенд"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#B99D75] text-white text-lg px-5 py-2 shadow-xl">
                          🍂 -25%
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2D3A29] to-transparent"></div>
                    </div>

                    <CardContent className="relative p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#53624E]/10 flex items-center justify-center">
                          <Icon name="Leaf" size={24} className="text-[#53624E]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-[#53624E] text-[#53624E] mb-1">
                            До 30 ноября
                          </Badge>
                          <h3 className="text-2xl font-bold text-[#2D3A29]">Осенний уикенд</h3>
                        </div>
                      </div>
                      
                      <p className="text-[#2D3A29]/70 mb-6 leading-relaxed">
                        2 ночи в домике среди золотых листьев + банный вечер с ароматами осеннего леса
                      </p>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm text-[#2D3A29]/50 line-through mb-1">12 000 ₽</div>
                          <div className="text-4xl font-bold text-[#B99D75]">9 000 ₽</div>
                        </div>
                        <Button className="bg-[#53624E] hover:bg-[#3F4A3B] text-white shadow-lg">
                          <Icon name="ArrowRight" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#53624E] to-[#B99D75] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <Card className="relative bg-[#FAF8F3] border-0 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B99D75]/20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#53624E]/10 rounded-tr-full"></div>
                    
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/8a88357e-44a0-4b0d-8c1d-78d79ea68ce4.jpg"
                        alt="Весеннее пробуждение"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#53624E] text-white text-lg px-5 py-2 shadow-xl">
                          🌸 Новинка
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2D3A29] to-transparent"></div>
                    </div>

                    <CardContent className="relative p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#B99D75]/10 flex items-center justify-center">
                          <Icon name="Flower2" size={24} className="text-[#B99D75]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-[#B99D75] text-[#B99D75] mb-1">
                            Март-Май 2025
                          </Badge>
                          <h3 className="text-2xl font-bold text-[#2D3A29]">Весеннее пробуждение</h3>
                        </div>
                      </div>
                      
                      <p className="text-[#2D3A29]/70 mb-6 leading-relaxed">
                        Йога на рассвете + лесные прогулки среди первоцветов + травяной спа-ритуал
                      </p>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm text-[#2D3A29]/50 mb-1">Предзаказ</div>
                          <div className="text-4xl font-bold text-[#53624E]">7 500 ₽</div>
                        </div>
                        <Button className="bg-[#B99D75] hover:bg-[#A38B69] text-white shadow-lg">
                          <Icon name="ArrowRight" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#B99D75] to-[#53624E] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <Card className="relative bg-[#FAF8F3] border-0 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B99D75]/20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#53624E]/10 rounded-tr-full"></div>
                    
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/33e83c8d-d0ba-4f3a-9951-f84b15f43c89.jpg"
                        alt="Ночь у костра"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-[#B99D75] to-[#53624E] text-white text-lg px-5 py-2 shadow-xl">
                          🔥 Хит лета
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2D3A29] to-transparent"></div>
                    </div>

                    <CardContent className="relative p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#53624E]/10 flex items-center justify-center">
                          <Icon name="Flame" size={24} className="text-[#53624E]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-[#53624E] text-[#53624E] mb-1">
                            Каждую пятницу
                          </Badge>
                          <h3 className="text-2xl font-bold text-[#2D3A29]">Ночь у костра</h3>
                        </div>
                      </div>
                      
                      <p className="text-[#2D3A29]/70 mb-6 leading-relaxed">
                        Гитарные песни под звёздами + шашлык + ночёвка в глэмпинге с завтраком
                      </p>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm text-[#2D3A29]/50 mb-1">За двоих</div>
                          <div className="text-4xl font-bold text-[#B99D75]">6 500 ₽</div>
                        </div>
                        <Button className="bg-[#53624E] hover:bg-[#3F4A3B] text-white shadow-lg">
                          <Icon name="ArrowRight" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#53624E] to-[#B99D75] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  <Card className="relative bg-[#FAF8F3] border-0 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#B99D75]/20 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#53624E]/10 rounded-tr-full"></div>
                    
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#53624E] to-[#3F4A3B] flex items-center justify-center">
                      <Icon name="Gift" size={120} className="text-white/10 absolute" />
                      <div className="relative z-10 text-center">
                        <Icon name="Gift" size={64} className="text-[#B99D75] mx-auto mb-4" />
                        <div className="text-white text-2xl font-bold">Подарочный</div>
                        <div className="text-white text-2xl font-bold">сертификат</div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#B99D75] text-white text-lg px-5 py-2 shadow-xl">
                          🎁 Подарок
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="relative p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#B99D75]/10 flex items-center justify-center">
                          <Icon name="Heart" size={24} className="text-[#B99D75]" />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-[#B99D75] text-[#B99D75] mb-1">
                            Любой номинал
                          </Badge>
                          <h3 className="text-2xl font-bold text-[#2D3A29]">Идеальный подарок</h3>
                        </div>
                      </div>
                      
                      <p className="text-[#2D3A29]/70 mb-6 leading-relaxed">
                        Подарите близким отдых на природе — выбирайте номинал и программу
                      </p>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-sm text-[#2D3A29]/50 mb-1">От</div>
                          <div className="text-4xl font-bold text-[#53624E]">5 000 ₽</div>
                        </div>
                        <Button className="bg-gradient-to-r from-[#B99D75] to-[#53624E] hover:opacity-90 text-white shadow-lg">
                          <Icon name="ArrowRight" size={20} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-[#53624E]/20 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          >
            <Icon name="ChevronLeft" size={28} className="text-[#53624E] group-hover:text-[#B99D75]" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-[#53624E]/20 flex items-center justify-center hover:scale-110 transition-all duration-300 group"
          >
            <Icon name="ChevronRight" size={28} className="text-[#53624E] group-hover:text-[#B99D75]" />
          </button>
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 text-lg mb-6 font-light">
            Не нашли подходящий вариант? Мы создадим индивидуальную программу для вас
          </p>
          <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6">
            <Icon name="MessageCircle" size={22} className="mr-3" />
            Обсудить с менеджером
          </Button>
        </div>
      </div>
    </section>
  );
}
