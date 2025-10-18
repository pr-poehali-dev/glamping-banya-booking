import Icon from '@/components/ui/icon';

export default function SaunaSection() {
  return (
    <section id="sauna" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Наша баня</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg"
              alt="Баня"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Icon name="Flame" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Традиционная парная</h3>
                <p className="text-muted-foreground">Баня на дровах с панорамными окнами и видом на лес. Вместимость до 8 человек.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Thermometer" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Идеальный жар</h3>
                <p className="text-muted-foreground">Температура до 90°C, регулируемая влажность. Берёзовые и дубовые веники.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Icon name="Droplets" size={32} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Купель с ледяной водой</h3>
                <p className="text-muted-foreground">Освежающая купель с родниковой водой на открытом воздухе.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
