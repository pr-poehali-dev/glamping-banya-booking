import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function FestivePromoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Новый Год в глемпинге",
      subtitle: "Встречай праздник среди заснеженного леса",
      discount: "–30%",
      image: "https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/508bb7de-5dc5-48d2-9160-6e61f884f9f8.jpg",
      color: "from-emerald-600 to-teal-700"
    },
    {
      title: "Январские каникулы",
      subtitle: "Продли новогоднее настроение в уютной атмосфере",
      discount: "–25%",
      image: "https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/99a22e86-1a5d-4004-a7b2-81b54c488aba.jpg",
      color: "from-amber-600 to-orange-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto max-w-7xl">
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 text-white z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                <Icon name="Sparkles" size={18} className="text-yellow-400" />
                <span className="text-sm font-medium">Специальное предложение</span>
              </div>

              <div className="mb-8">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`bg-gradient-to-br ${slide.color} px-6 py-3 rounded-2xl transform -rotate-3 shadow-xl`}>
                        <span className="text-4xl font-black text-white">{slide.discount}</span>
                      </div>
                      <div className="h-1 w-16 bg-gradient-to-r from-white/60 to-transparent rounded-full"></div>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all"
                >
                  Забронировать
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/20"
                    aria-label="Previous"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all border border-white/20"
                    aria-label="Next"
                  >
                    <Icon name="ChevronRight" size={20} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all rounded-full ${
                      index === currentSlide
                        ? 'bg-white w-12 h-2'
                        : 'bg-white/30 hover:bg-white/50 w-2 h-2'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${
                      index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <div className="relative h-[500px] lg:h-[600px]">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={20} className="text-purple-600" />
                          <span className="font-bold text-purple-900">Декабрь-Январь</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 ? '❄️' : i % 4 === 1 ? '✨' : i % 4 === 2 ? '🎄' : '⭐'}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
