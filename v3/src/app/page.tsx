import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import PricingPlans from "@/components/PricingPlans";
import Contact from "@/components/Contact";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Contact />
      <Questions />
    </div>
  );
}
