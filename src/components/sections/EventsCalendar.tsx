import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EventsCalendar() {
  const events = [
    {
      id: 1,
      title: 'Йога на рассвете',
      description: 'Встречаем рассвет с практикой хатха-йоги на открытой площадке',
      date: '25',
      month: 'ОКТ',
      time: '06:00',
      duration: '90 мин',
      category: 'Спорт',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800',
      color: 'from-purple-500/90 to-pink-500/90'
    },
    {
      id: 2,
      title: 'Мастер-класс по гончарному делу',
      description: 'Создайте свою уникальную керамическую посуду под руководством мастера',
      date: '28',
      month: 'ОКТ',
      time: '14:00',
      duration: '3 часа',
      category: 'Творчество',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
      color: 'from-amber-500/90 to-orange-500/90'
    },
    {
      id: 3,
      title: 'Вечер живой музыки',
      description: 'Акустический концерт у костра под звездным небом',
      date: '01',
      month: 'НОЯ',
      time: '19:00',
      duration: '2 часа',
      category: 'Музыка',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
      color: 'from-blue-500/90 to-cyan-500/90'
    },
    {
      id: 4,
      title: 'Детский квест "Лесные сокровища"',
      description: 'Увлекательное приключение для детей 6-12 лет с призами',
      date: '03',
      month: 'НОЯ',
      time: '11:00',
      duration: '2 часа',
      category: 'Для детей',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800',
      color: 'from-green-500/90 to-emerald-500/90'
    },
    {
      id: 5,
      title: 'Дегустация травяных чаёв',
      description: 'Знакомство с целебными травами Алтая и чайными церемониями',
      date: '05',
      month: 'НОЯ',
      time: '16:00',
      duration: '60 мин',
      category: 'Гастрономия',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
      color: 'from-rose-500/90 to-red-500/90'
    },
    {
      id: 6,
      title: 'Фотопрогулка на закате',
      description: 'Профессиональная фотосессия в живописных локациях базы',
      date: '08',
      month: 'НОЯ',
      time: '17:30',
      duration: '90 мин',
      category: 'Фото',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800',
      color: 'from-indigo-500/90 to-violet-500/90'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B99D75] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#53624E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#B99D75] to-[#53624E] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
              АФИША МЕРОПРИЯТИЙ
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#53624E] mb-6 leading-tight">
            События и активности
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Каждый день — новые впечатления. Присоединяйтесь к нашим мероприятиям и создавайте незабываемые моменты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.color} opacity-60`}></div>
                
                <div className="absolute top-6 left-6 bg-white rounded-2xl shadow-xl p-4 text-center min-w-[80px]">
                  <div className="text-4xl font-bold text-[#53624E] leading-none">{event.date}</div>
                  <div className="text-sm font-semibold text-[#B99D75] mt-1">{event.month}</div>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-[#53624E] px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {event.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed min-h-[60px]">
                  {event.description}
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-[#53624E]">
                    <Icon name="Clock" size={18} />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#B99D75]">
                    <Icon name="Timer" size={18} />
                    <span className="font-semibold">{event.duration}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-[#53624E] to-[#6B7E64] hover:from-[#3D4A39] hover:to-[#53624E] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Записаться
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="border-2 border-[#B99D75] text-[#B99D75] hover:bg-[#B99D75] hover:text-white transition-all"
                  >
                    <Icon name="Share2" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-[#53624E] text-[#53624E] hover:bg-[#53624E] hover:text-white text-lg px-10 h-14 font-semibold transition-all duration-300"
          >
            <Icon name="Calendar" size={22} className="mr-3" />
            Посмотреть полное расписание
          </Button>
        </div>
      </div>
    </section>
  );
}
