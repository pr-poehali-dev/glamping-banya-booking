import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EventsCalendar() {
  const events = [
    {
      id: 1,
      title: 'Йога на рассвете',
      description: 'Встречаем новый день с практикой хатха-йоги на открытой поляне',
      date: '25',
      month: 'окт',
      time: '06:00',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800'
    },
    {
      id: 2,
      title: 'Мастер-класс по гончарному делу',
      description: 'Создайте керамику своими руками',
      date: '28',
      month: 'окт',
      time: '14:00',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800'
    },
    {
      id: 3,
      title: 'Вечер живой музыки у костра',
      description: 'Акустический концерт под звёздами',
      date: '01',
      month: 'ноя',
      time: '19:00',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
    },
    {
      id: 4,
      title: 'Детский квест "Лесные сокровища"',
      description: 'Приключение для детей 6-12 лет с призами и сюрпризами',
      date: '03',
      month: 'ноя',
      time: '11:00',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
    },
    {
      id: 5,
      title: 'Дегустация травяных чаёв',
      description: 'Целебные травы Алтая и чайные церемонии',
      date: '05',
      month: 'ноя',
      time: '16:00',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800'
    },
    {
      id: 6,
      title: 'Фотопрогулка на закате',
      description: 'Профессиональная съёмка в природе',
      date: '08',
      month: 'ноя',
      time: '17:30',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#53624E] to-[#3d4a39]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <Icon name="Sparkles" size={18} className="text-[#B99D75]" />
            <span className="text-white/90 font-semibold text-sm tracking-wide">АФИША</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Мероприятия на природе
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Каждый день новые впечатления в окружении природы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {events.slice(0, 3).map((event, index) => (
            <div
              key={event.id}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-[242px]'} overflow-hidden`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#53624E] leading-none">{event.date}</div>
                  <div className="text-xs text-[#B99D75] font-semibold uppercase mt-1">{event.month}</div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {event.title}
                  </h3>
                  <p className={`text-white/80 mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/90">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <Button 
                      size={index === 0 ? 'default' : 'sm'}
                      className="bg-[#B99D75] hover:bg-[#A38B69] text-white border-0 shadow-lg"
                    >
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(3).map((event, index) => (
            <div
              key={event.id}
              className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-[500px]' : 'h-[242px]'} overflow-hidden`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 text-center shadow-lg">
                  <div className="text-3xl font-bold text-[#53624E] leading-none">{event.date}</div>
                  <div className="text-xs text-[#B99D75] font-semibold uppercase mt-1">{event.month}</div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                    {event.title}
                  </h3>
                  <p className={`text-white/80 mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/90">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <Button 
                      size={index === 0 ? 'default' : 'sm'}
                      className="bg-[#B99D75] hover:bg-[#A38B69] text-white border-0 shadow-lg"
                    >
                      Записаться
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}