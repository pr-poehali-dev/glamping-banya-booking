import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Баня на дровах',
    description: 'Традиционная русская баня с парной на берёзовых дровах',
    price: '3000 ₽/час',
    icon: 'Flame'
  },
  {
    title: 'Купель с холодной водой',
    description: 'Освежающая купель с родниковой водой',
    price: 'Включено',
    icon: 'Droplets'
  },
  {
    title: 'Чайная церемония',
    description: 'Травяные чаи и угощения после бани',
    price: '500 ₽',
    icon: 'Coffee'
  },
  {
    title: 'Массаж вениками',
    description: 'Профессиональный массаж берёзовыми вениками',
    price: '1500 ₽',
    icon: 'Wind'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Услуги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name={service.icon as any} size={48} className="text-accent mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{service.description}</CardDescription>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
