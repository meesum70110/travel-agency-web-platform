import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStats } from "@/components/sections/TrustStats";
import { AboutSection } from "@/components/sections/AboutSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { SpiritualGuidesSection } from "@/components/sections/SpiritualGuidesSection";
import { PackagesCarousel } from "@/components/sections/PackagesCarousel";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { JourneyTimeline } from "@/components/sections/JourneyTimeline";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

/** Rendering home page with all sections in specified order */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <AboutSection />
      <FounderSection />
      <SpiritualGuidesSection />
      <PackagesCarousel />
      <WhyChooseUs />
      <ServicesSection />
      <JourneyTimeline />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
