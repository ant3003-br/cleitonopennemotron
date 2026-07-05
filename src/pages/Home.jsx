import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Differentials from "../components/Differentials.jsx";
import Gallery from "../components/Gallery.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Contact />
    </>
  );
}
