import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "./Projects"; // Keeping Projects in pages for now as it was there, effectively acting as valid component
import CreativeSection from "../components/CreativeSection";
import Footer from "../components/Footer";
import ThreeDHoverGallery from "../components/ThreeDHoverGallery";
import { Skiper25 } from "../components/Skiper25";
import { Skiper31 } from "../components/Skiper31";

function Home() {
  return (
    <main className=" text-white w-full overflow-x-hidden">
      <Hero />
      <div className="h-[50vh] w-full bg-white"></div>
      <ThreeDHoverGallery />
      <AboutMe />
      <Skiper31 />
      <Projects />
      <div className="h-screen w-full bg-white"></div>
      <CreativeSection />
      <div className="h-screen w-full bg-white"></div>
      <Skiper25 />
    </main>
  );
}

export default Home;
