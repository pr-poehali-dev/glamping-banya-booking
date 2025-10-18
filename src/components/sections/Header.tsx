import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-6 sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Icon name="Trees" size={28} />
          ЛесБаня
        </h1>
        <div className="flex gap-6">
          <a href="#events" className="hover:text-accent transition-colors">Мероприятия</a>
          <a href="#sauna" className="hover:text-accent transition-colors">Баня</a>
          <a href="#booking" className="hover:text-accent transition-colors">Бронирование</a>
          <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Галерея</a>
        </div>
      </nav>
    </header>
  );
}
