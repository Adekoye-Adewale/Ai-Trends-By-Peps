import LandingPageHero from "@/components/heros/landingPageHero";
import AboutSection from "@/components/landingPage/aboutSection";
import Programs from "@/components/landingPage/programs";

export default function Home() {
  return (
    <main className="overflow-x-hidden ">
      <LandingPageHero/>
      <AboutSection/>
      <Programs/>
    </main>
  );
}
