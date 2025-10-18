import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = [
    '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'
  ];

  return (
    <section id="booking" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Бронирование</h2>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Выберите дату и время</CardTitle>
            <CardDescription>Минимальное бронирование — 2 часа</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="calendar">Выбор даты</TabsTrigger>
                <TabsTrigger value="time">Выбор времени</TabsTrigger>
              </TabsList>
              <TabsContent value="calendar" className="mt-6">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>
              </TabsContent>
              <TabsContent value="time" className="mt-6">
                <div className="space-y-4">
                  <p className="text-center text-muted-foreground mb-4">
                    Выбранная дата: <span className="font-semibold text-foreground">
                      {date?.toLocaleDateString('ru-RU')}
                    </span>
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? 'default' : 'outline'}
                        className="h-14"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {selectedTime && (
                    <div className="mt-8 p-6 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2 text-lg">Детали бронирования:</h4>
                      <p className="mb-1">Дата: {date?.toLocaleDateString('ru-RU')}</p>
                      <p className="mb-4">Время: {selectedTime}</p>
                      <Button className="w-full" size="lg">
                        <Icon name="Check" size={20} className="mr-2" />
                        Подтвердить бронирование
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
