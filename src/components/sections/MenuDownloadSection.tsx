import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function MenuDownloadSection() {
  const handleDownload = () => {
    // Здесь будет логика скачивания PDF файла
    // Замените URL на реальный путь к вашему PDF файлу
    const pdfUrl = '/menu.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'lembo-menu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 px-6 bg-primary">
      <div className="container mx-auto max-w-6xl">
        {/* Hero блок с кнопкой */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-primary-foreground">Наше меню</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Откройте для себя уникальные блюда в брутальной атмосфере Chuck Wood
          </p>
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 h-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={handleDownload}
          >
            <Icon name="Download" size={24} className="mr-3" />
            Скачать меню PDF
          </Button>
        </div>

        {/* Highlight блюда с фото */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-primary-foreground">Хиты нашего меню</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=500&fit=crop" 
                  alt="Бургер"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary-foreground">Фирменный бургер</h4>
              <p className="text-primary-foreground/70">Сочная говядина с авторским соусом</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&h=500&fit=crop" 
                  alt="Стейк"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary-foreground">Рибай стейк</h4>
              <p className="text-primary-foreground/70">Мраморная говядина на гриле</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=500&fit=crop" 
                  alt="Десерт"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary-foreground">Шоколадный фондан</h4>
              <p className="text-primary-foreground/70">С жидкой серединкой и мороженым</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}