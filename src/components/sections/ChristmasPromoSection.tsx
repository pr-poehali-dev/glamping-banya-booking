import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function ChristmasPromoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Новый Год в глемпинге",
      subtitle: "Встречай праздник среди заснеженного леса",
      image: "https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/df2c4ae7-b512-4577-b92a-fac9bd42940e.jpg",
      buttonText: "Забронировать"
    },
    {
      title: "Январские каникулы",
      subtitle: "Продли новогоднее настроение в уютной атмосфере",
      image: "https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/cc947567-725c-428d-a81f-5e0e871a6ad3.jpg",
      buttonText: "Узнать больше"
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
    <section className="relative bg-[#1a0a0a] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2818] via-[#3d0f0f] to-[#0d2818]"></div>
      
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg className="w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,0 Q150,60 300,30 T600,30 T900,30 T1200,30 L1200,0 Z" fill="#1a4d2e" opacity="0.4" />
          <path d="M0,15 Q200,50 400,25 T800,25 T1200,25 L1200,0 Z" fill="#1a4d2e" opacity="0.3" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg className="w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,100 Q150,40 300,70 T600,70 T900,70 T1200,70 L1200,100 Z" fill="#1a4d2e" opacity="0.3" />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-24 relative">
        <div className="relative max-w-6xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="inline-block mb-6 px-6 py-2 bg-[#8b2e2e] rounded-full border border-[#a03939]">
                    <span className="text-sm font-bold text-[#ffd7a3] tracking-wide">
                      🎄 НОВОГОДНЕЕ ПРЕДЛОЖЕНИЕ
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ffd7a3] mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-[#d4af8c] mb-10 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    size="lg" 
                    className="bg-[#8b2e2e] hover:bg-[#a03939] text-[#ffd7a3] text-lg px-10 py-7 rounded-full font-bold shadow-2xl transition-all border border-[#a03939]"
                  >
                    {slide.buttonText}
                  </Button>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#1a4d2e] to-[#8b2e2e] rounded-3xl blur-2xl opacity-50"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-[400px] md:h-[500px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 left-1/2 lg:left-1/4 -translate-x-1/2 flex gap-4 items-center">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-[#8b2e2e]/80 hover:bg-[#a03939] backdrop-blur-sm flex items-center justify-center text-[#ffd7a3] text-2xl transition-all border border-[#a03939]"
              aria-label="Previous"
            >
              ‹
            </button>
            
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? 'bg-[#ffd7a3] w-12 h-3'
                      : 'bg-[#8b2e2e]/60 hover:bg-[#8b2e2e] w-3 h-3'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-[#8b2e2e]/80 hover:bg-[#a03939] backdrop-blur-sm flex items-center justify-center text-[#ffd7a3] text-2xl transition-all border border-[#a03939]"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-15 animate-pulse">🎄</div>
        <div className="absolute top-20 right-20 text-5xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}>⭐</div>
        <div className="absolute bottom-32 left-20 text-6xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}>🎁</div>
        <div className="absolute bottom-20 right-32 text-5xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}>❄️</div>
        <div className="absolute top-1/3 right-10 text-4xl opacity-10">🔔</div>
        <div className="absolute bottom-1/3 left-10 text-5xl opacity-10">✨</div>
      </div>
    </section>
  );
}