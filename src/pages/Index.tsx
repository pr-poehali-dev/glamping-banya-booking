import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ChristmasPromoSection from '@/components/sections/ChristmasPromoSection';
import FestivePromoSection from '@/components/sections/FestivePromoSection';
import NewYearPromoSection from '@/components/sections/NewYearPromoSection';
import WinterPromoSection from '@/components/sections/WinterPromoSection';
import HalloweenPromoSection from '@/components/sections/HalloweenPromoSection';
import HalloweenSection from '@/components/sections/HalloweenSection';
import RegularEventsSection from '@/components/sections/RegularEventsSection';
import PromotionsSlider from '@/components/sections/PromotionsSlider';
import EventsCalendar from '@/components/sections/EventsCalendar';
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
      <ChristmasPromoSection />
      <FestivePromoSection />
      <NewYearPromoSection />
      <WinterPromoSection />
      <HalloweenPromoSection />
      <HalloweenSection />
      <RegularEventsSection />
      <PromotionsSlider />
      <EventsCalendar />
      <GlampingHousesSection />
      <SaunaSection />
      <BookingSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}