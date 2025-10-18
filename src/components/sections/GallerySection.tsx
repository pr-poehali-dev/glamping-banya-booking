const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/427f8711-d58a-4134-bca7-e94bca51b739.jpg',
    title: 'Интерьер бани'
  },
  {
    url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/3c74a80f-66f0-44a4-a194-3ce7f61c5092.jpg',
    title: 'Купольный шатёр'
  },
  {
    url: 'https://cdn.poehali.dev/projects/824c928d-4636-46be-89a0-6fedf0929559/files/2eb98513-b0d0-44a8-abc3-9c8f5111e298.jpg',
    title: 'Территория глемпинга'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Галерея</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer aspect-square">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
