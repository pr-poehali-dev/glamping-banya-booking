import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import HalloweenSection from '@/components/sections/HalloweenSection';
import RegularEventsSection from '@/components/sections/RegularEventsSection';
import PromotionsSlider from '@/components/sections/PromotionsSlider';
import GlampingHousesSection from '@/components/sections/GlampingHousesSection';
import SaunaSection from '@/components/sections/SaunaSection';
import BookingSection from '@/components/sections/BookingSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HalloweenSection />
      <RegularEventsSection />
      <PromotionsSlider />
      <GlampingHousesSection />
      <SaunaSection />
      <BookingSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}