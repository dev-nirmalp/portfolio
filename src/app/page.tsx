import MobileMenu from "@/components/MobileMenu";
import Navigation from "@/components/Navigation";
import Breaker from "@/components/Breaker";
import ColorSwitcher from "@/components/ColorSwitcher";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Preloader from "@/components/Preloader";

export default function Page() {
  return (
    <>
      <MobileMenu />
      <Navigation />
      <Breaker />
      <ColorSwitcher />
      <HomeSection />
      <SkillsSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      {/* <Preloader /> */}
    </>
  );
}
