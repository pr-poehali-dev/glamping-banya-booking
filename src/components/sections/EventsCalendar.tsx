import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useRef, useState } from 'react';

export default function EventsCalendar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: 'Йога на рассвете',
      description: 'Встречаем новый день с практикой хатха-йоги на открытой поляне среди деревьев',
      date: '25',
      month: 'окт',
      time: '06:00',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800'
    },
    {
      id: 2,
      title: 'Мастер-класс по гончарному делу',
      description: 'Создайте керамику своими руками под руководством мастера',
      date: '28',
      month: 'окт',
      time: '14:00',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800'
    },
    {
      id: 3,
      title: 'Вечер живой музыки у костра',
      description: 'Акустический концерт под звёздным небом',
      date: '01',
      month: 'ноя',
      time: '19:00',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
    },
    {
      id: 4,
      title: 'Детский квест "Лесные сокровища"',
      description: 'Приключение для детей 6-12 лет с призами',
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
      description: 'Профессиональная съёмка в живописных локациях',
      date: '08',
      month: 'ноя',
      time: '17:30',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800'
    }
  ];

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 280, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#53624E] to-[#3d4a39] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#B99D75] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <Icon name="Calendar" size={18} className="text-[#B99D75]" />
            <span className="text-white/90 font-semibold text-sm tracking-wide">АФИША СОБЫТИЙ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Мероприятия на природе
          </h2>
          <p className="text-white/70 text-lg">
            Каждый день — новые впечатления
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            onClick={() => setActiveIndex(0)}
            className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
          >
            <div className="relative h-[600px]">
              <img
                src={events[activeIndex].image}
                alt={events[activeIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              <div className="absolute top-6 left-6 bg-white rounded-2xl px-5 py-4 text-center shadow-2xl">
                <div className="text-4xl font-bold text-[#53624E] leading-none">{events[activeIndex].date}</div>
                <div className="text-sm text-[#B99D75] font-semibold uppercase mt-2">{events[activeIndex].month}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-4xl font-bold text-white mb-3 leading-tight">
                  {events[activeIndex].title}
                </h3>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  {events[activeIndex].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-white/90">
                    <Icon name="Clock" size={20} />
                    <span className="text-lg font-medium">{events[activeIndex].time}</span>
                  </div>
                  <Button className="bg-[#B99D75] hover:bg-[#A38B69] text-white border-0 shadow-xl px-8 h-12 text-base">
                    Записаться
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex flex-col gap-4 overflow-y-auto h-[600px] pr-2 scroll-smooth"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#B99D75 rgba(255,255,255,0.1)' }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 flex-shrink-0 ${
                    activeIndex === index 
                      ? 'ring-4 ring-[#B99D75] shadow-2xl' 
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="relative h-[260px]">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                    <div className="absolute top-4 left-4 bg-white rounded-xl px-3 py-2 text-center shadow-lg">
                      <div className="text-2xl font-bold text-[#53624E] leading-none">{event.date}</div>
                      <div className="text-xs text-[#B99D75] font-semibold uppercase mt-1">{event.month}</div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/90">
                        <Icon name="Clock" size={16} />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollPrev}
              className="absolute -top-4 right-16 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all z-20"
            >
              <Icon name="ChevronUp" size={20} className="text-[#53624E]" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute -top-4 right-4 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-gray-100 transition-all z-20"
            >
              <Icon name="ChevronDown" size={20} className="text-[#53624E]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}