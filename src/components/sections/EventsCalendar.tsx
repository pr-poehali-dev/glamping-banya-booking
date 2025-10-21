import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useRef } from 'react';

export default function EventsCalendar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const events = [
    {
      id: 1,
      title: 'Йога на рассвете',
      description: 'Встречаем рассвет с практикой хатха-йоги на открытой площадке',
      date: '25 октября',
      time: '06:00',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800'
    },
    {
      id: 2,
      title: 'Мастер-класс по гончарному делу',
      description: 'Создайте свою уникальную керамическую посуду под руководством мастера',
      date: '28 октября',
      time: '14:00',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800'
    },
    {
      id: 3,
      title: 'Вечер живой музыки у костра',
      description: 'Акустический концерт под звездным небом',
      date: '1 ноября',
      time: '19:00',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
    },
    {
      id: 4,
      title: 'Детский квест "Лесные сокровища"',
      description: 'Увлекательное приключение для детей 6-12 лет',
      date: '3 ноября',
      time: '11:00',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800'
    },
    {
      id: 5,
      title: 'Дегустация травяных чаёв',
      description: 'Знакомство с целебными травами Алтая',
      date: '5 ноября',
      time: '16:00',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800'
    }
  ];

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#53624E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Афиша мероприятий
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Присоединяйтесь к нашим мероприятиям на природе
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                className="min-w-[350px] bg-white rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#53624E] mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-[#B99D75] hover:bg-[#A38B69] text-white"
                  >
                    Записаться
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <Icon name="ChevronLeft" size={24} className="text-[#53624E]" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100"
          >
            <Icon name="ChevronRight" size={24} className="text-[#53624E]" />
          </button>
        </div>
      </div>
    </section>
  );
}
