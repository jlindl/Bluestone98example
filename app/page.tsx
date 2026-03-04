import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryScroll from "@/components/StoryScroll";
import Portfolio from "@/components/Portfolio";
import Metrics from "@/components/Metrics";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black relative">
      <Header />
      <Hero />
      <StoryScroll />
      <Portfolio />
      <Metrics />
      <Logos />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
