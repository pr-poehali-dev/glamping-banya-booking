import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

export default function NewYearPromoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      badge: "НОВОГОДНИЕ ПРАЗДНИКИ",
      title: "Встречай Новый Год в глемпинге",
      subtitle: "Уютная зима у камина, снежный лес и новогоднее настроение — забронируй свой зимний отдых",
      buttonText: "Забронировать",
      bgColor: "from-emerald-700 via-red-700 to-emerald-800"
    },
    {
      badge: "ЗИМНИЙ ОТДЫХ",
      title: "Спецпредложение на январь",
      subtitle: "Продли новогоднее настроение — скидки на январские заезды для тех, кто любит тишину зимнего леса",
      buttonText: "Узнать подробнее",
      bgColor: "from-blue-700 via-indigo-700 to-purple-800"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-red-900/20 via-green-900/20 to-red-900/20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-7xl animate-pulse">🎄</div>
        <div className="absolute top-40 right-20 text-6xl animate-bounce" style={{animationDuration: '3s'}}>🎁</div>
        <div className="absolute bottom-40 left-1/4 text-7xl">⭐</div>
        <div className="absolute top-60 right-1/3 text-6xl animate-pulse" style={{animationDelay: '1s'}}>🎄</div>
        <div className="absolute bottom-20 right-10 text-7xl animate-pulse" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute top-32 left-1/3 text-5xl">🎅</div>
        <div className="absolute bottom-60 right-1/4 text-6xl">🔔</div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-red-600 to-green-600 text-white px-6 py-2 text-lg animate-pulse">
            🎄 Новогоднее предложение
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-700 via-green-700 to-red-700 bg-clip-text text-transparent">
            Новогодние каникулы в глемпинге
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Встречай зиму в уютной атмосфере среди заснеженного леса
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className={`relative bg-gradient-to-r ${slide.bgColor} rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center`}>
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full opacity-70 animate-pulse"
                      style={{
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        backgroundColor: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#ef4444' : '#ffffff',
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${1.5 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                  <div className="absolute top-10 right-10 text-8xl opacity-20">🎄</div>
                  <div className="absolute bottom-10 left-10 text-8xl opacity-20">🎁</div>
                </div>

                <div className="relative z-10 text-center px-8 py-16">
                  <div className="inline-block mb-6 px-6 py-2 border-2 border-white/40 rounded-full">
                    <span className="text-white font-medium tracking-wider text-sm">
                      {slide.badge}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    {slide.title}
                  </h2>
                  
                  <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 hover:from-yellow-600 hover:via-red-600 hover:to-yellow-600 text-white text-lg px-10 py-6 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors backdrop-blur-sm z-20"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors backdrop-blur-sm z-20"
                  aria-label="Next slide"
                >
                  ›
                </button>
              </div>
            </div>
          ))}

          {slides.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}