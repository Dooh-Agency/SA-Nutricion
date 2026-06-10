import HeroSection from "@/components/sections/HeroSection";
import AboutSnippet from "@/components/sections/AboutSnippet";
import ServicesGrid from "@/components/sections/ServicesGrid";
import QuoteSection from "@/components/sections/QuoteSection";
import ModalitiesSection from "@/components/sections/ModalitiesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesGrid />
      <QuoteSection />
      <ModalitiesSection />
    </>
  );
}
