import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

export default function WinterPromoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      badge: "Новогодние праздники",
      title: "Встречай Новый Год в глемпинге",
      subtitle: "Уютная зима у камина, снежный лес и праздничная атмосфера",
      buttonText: "Забронировать",
      bgColor: "from-blue-900 to-indigo-900"
    },
    {
      badge: "Зимний отдых",
      title: "Январские каникулы",
      subtitle: "Продли праздник — спокойный отдых среди заснеженной природы",
      buttonText: "Узнать больше",
      bgColor: "from-slate-800 to-blue-900"
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
    <section className="relative py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600 text-white px-6 py-2 text-lg">
            ❄️ Зимнее предложение
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Новогодний отдых в глемпинге
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Проведи праздники на природе в комфорте и уюте
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className={`relative bg-gradient-to-br ${slide.bgColor} rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-center`}>
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10 text-center px-8 py-16 max-w-4xl">
                  <div className="inline-block mb-6 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-white/90 font-medium text-sm">
                      {slide.badge}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h2>
                  
                  <p className="text-white/80 text-lg md:text-xl mb-10">
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-10 py-6 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-20"
                  aria-label="Previous slide"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-colors z-20"
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
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
