import LandingPageHero from "@/components/heros/landingPageHero";
import AboutSection from "@/components/landingPage/aboutSection";
import BenefitsSection from "@/components/landingPage/benefitsSection";
import Programs from "@/components/landingPage/programs";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <LandingPageHero/>
      <AboutSection/>
      <Programs/>
      <BenefitsSection/>
    </main>
  );
}
