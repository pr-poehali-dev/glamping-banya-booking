import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function RegularEventsSection() {
  return (
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
                  <h3 className="text-2xl font-bold text-[#2D3A29]">Зимние выходные</h3>
                  <p className="text-[#53624E]/70 text-sm">Суббота-Воскресенье</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#2D3A29]/80 leading-relaxed">
                Проведите незабываемые зимние выходные в уютном домике с баней и видом на заснеженный лес
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#2D3A29]">
                  <Icon name="Check" size={18} className="text-[#53624E]" />
                  <span>2 ночи в глемпинге</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D3A29]">
                  <Icon name="Check" size={18} className="text-[#53624E]" />
                  <span>Баня на дровах 4 часа</span>
                </div>
                <div className="flex items-center gap-2 text-[#2D3A29]">
                  <Icon name="Check" size={18} className="text-[#53624E]" />
                  <span>Костёр и шашлыки</span>
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
                  <h3 className="text-2xl font-bold text-[#2D3A29]">Банный день</h3>
                  <p className="text-[#53624E]/70 text-sm">Среда, Пятница</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-[#2D3A29]/80 leading-relaxed">
                Классический банный день с парной, купелью и чаепитием в лесной атмосфере
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#2D3A29]">
                  <Icon name="Check" size={18} className="text-[#53624E]" />
                  <span>3 часа парной</span>
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
  );
}
