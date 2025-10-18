import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HalloweenSection() {
  return (
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
                Погрузитесь в атмосферу мистики! Поиски сокровищ в ночном лесу, 
                загадки, ночной костёр и горячий чай с магическими травами.
              </CardDescription>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="Check" size={18} className="text-purple-400" />
                  <span>Квест по территории с загадками</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Icon name="Check" size={18} className="text-purple-400" />
                  <span>Призы для победителей</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Icon name="Check" size={18} className="text-purple-400" />
                  <span>Магический чай у костра</span>
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
      </div>
    </section>
  );
}
