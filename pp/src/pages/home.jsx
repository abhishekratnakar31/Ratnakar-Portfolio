import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "./Projects"; // Keeping Projects in pages for now as it was there, effectively acting as valid component
import CreativeSection from "../components/CreativeSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className=" text-white w-full overflow-x-hidden">
      <Hero />
      <AboutMe />
      <Projects />
      <CreativeSection />
      <Footer />
    </main>
  );
}

export default Home;
