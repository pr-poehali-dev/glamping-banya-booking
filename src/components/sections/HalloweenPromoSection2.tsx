import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

export default function HalloweenPromoSection2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      badge: "HALLOWEEN NIGHT",
      title: "-25% НА ХЭЛЛОУИН",
      subtitle: "Ночь мистики у костра — фонари, шёпот леса и скидка -25% на октябрьские заезды",
      buttonText: "Взять хэллоуин-скидку",
      bgColor: "from-[#1a3d3d] to-[#0f2626]",
      accentColor: "bg-orange-500 hover:bg-orange-600"
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
    <section className="relative py-20 px-6 bg-gradient-to-b from-amber-50/30 via-orange-50/20 to-amber-50/30 overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 text-8xl">🎃</div>
        <div className="absolute top-40 right-20 text-7xl">🍂</div>
        <div className="absolute bottom-40 left-1/4 text-6xl">🦇</div>
        <div className="absolute top-60 right-1/3 text-7xl">🎃</div>
        <div className="absolute bottom-20 right-10 text-8xl">🍁</div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-600 text-white px-6 py-2 text-lg animate-pulse">
            🎃 Осеннее предложение
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-700">
            Октябрьские скидки
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Встречай Хэллоуин с выгодой — только до конца месяца
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
                  <svg className="absolute top-8 left-20 w-16 h-16 text-black/70" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 12c-2 0-4 1-6 3-2-2-4-3-6-3-4 0-8 4-8 8 0 6 6 10 14 16 8-6 14-10 14-16 0-4-4-8-8-8z"/>
                    <path d="M20 20c-6 2-12 6-12 12 0 4 2 6 4 6 3 0 6-3 8-6z"/>
                    <path d="M44 20c6 2 12 6 12 12 0 4-2 6-4 6-3 0-6-3-8-6z"/>
                  </svg>
                  
                  <svg className="absolute top-12 right-32 w-12 h-12 text-black/60" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 12c-2 0-4 1-6 3-2-2-4-3-6-3-4 0-8 4-8 8 0 6 6 10 14 16 8-6 14-10 14-16 0-4-4-8-8-8z"/>
                    <path d="M20 20c-6 2-12 6-12 12 0 4 2 6 4 6 3 0 6-3 8-6z"/>
                    <path d="M44 20c6 2 12 6 12 12 0 4-2 6-4 6-3 0-6-3-8-6z"/>
                  </svg>

                  <svg className="absolute top-6 right-12 w-14 h-14 text-black/50" viewBox="0 0 64 64" fill="currentColor">
                    <path d="M32 12c-2 0-4 1-6 3-2-2-4-3-6-3-4 0-8 4-8 8 0 6 6 10 14 16 8-6 14-10 14-16 0-4-4-8-8-8z"/>
                    <path d="M20 20c-6 2-12 6-12 12 0 4 2 6 4 6 3 0 6-3 8-6z"/>
                    <path d="M44 20c6 2 12 6 12 12 0 4-2 6-4 6-3 0-6-3-8-6z"/>
                  </svg>

                  <svg className="absolute bottom-0 left-8 w-32 h-80 text-black/80" viewBox="0 0 100 200" fill="currentColor">
                    <rect x="42" y="0" width="16" height="200"/>
                    <rect x="20" y="40" width="60" height="20"/>
                  </svg>

                  <div className="absolute bottom-0 left-32">
                    <svg className="w-48 h-48 text-black/90" viewBox="0 0 200 200" fill="currentColor">
                      <ellipse cx="100" cy="120" rx="80" ry="70"/>
                      <ellipse cx="70" cy="120" rx="20" ry="65"/>
                      <ellipse cx="100" cy="120" rx="20" ry="68"/>
                      <ellipse cx="130" cy="120" rx="20" ry="65"/>
                      <path d="M95 50 Q90 40 95 30 Q100 35 105 30 Q100 40 105 50 L100 55 Z"/>
                      <polygon points="75,100 85,120 65,120" fill="#fbbf24"/>
                      <polygon points="125,100 135,120 115,120" fill="#fbbf24"/>
                      <polygon points="100,125 95,135 105,135" fill="#fbbf24"/>
                      <path d="M70 145 L75 155 L80 145 L85 155 L90 145 L95 155 L100 145 L105 155 L110 145 L115 155 L120 145 L125 155 L130 145" 
                            stroke="#fbbf24" strokeWidth="4" fill="none"/>
                    </svg>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-32">
                    {[...Array(50)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent"
                        style={{
                          left: `${i * 2}%`,
                          width: '4%',
                          height: `${Math.random() * 60 + 40}px`,
                          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                          transform: `rotate(${Math.random() * 20 - 10}deg)`
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-8 left-1/3 w-8 h-8 rounded-full bg-orange-600/40" />
                  <div className="absolute bottom-10 right-1/4 w-6 h-6 rounded-full bg-orange-500/30" />
                </div>

                <div className="relative z-10 text-center px-8 py-16">
                  <div className="inline-block mb-6 px-6 py-2 border-2 border-white/40 rounded-full">
                    <span className="text-white font-medium tracking-wider text-sm">
                      {slide.badge}
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {slide.title}
                  </h2>
                  
                  <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className={`${slide.accentColor} text-white text-lg px-10 py-6 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform`}
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