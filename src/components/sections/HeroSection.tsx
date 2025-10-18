import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/2eb98513-b0d0-44a8-abc3-9c8f5111e298.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">Уединение в природе</h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">Глемпинг с баней на дровах и видом на лес</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
          <Icon name="Calendar" size={20} className="mr-2" />
          Забронировать
        </Button>
      </div>
    </section>
  );
}
