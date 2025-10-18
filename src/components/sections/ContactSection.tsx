import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Свяжитесь с нами</CardTitle>
            <CardDescription>Мы всегда рады ответить на ваши вопросы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Icon name="Phone" size={24} className="text-accent" />
              <div>
                <p className="font-semibold">Телефон</p>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Mail" size={24} className="text-accent" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@lesbanya.ru</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="MapPin" size={24} className="text-accent" />
              <div>
                <p className="font-semibold">Адрес</p>
                <p className="text-muted-foreground">Московская область, 50 км от МКАД</p>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full" size="lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
