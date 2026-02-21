import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "react-tsparticles";
import "./App.css";

function App() {

  // Scroll Reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);


  return (
    <div>

      {/* Particles Background */}
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 40 },
            size: { value: 3 },
            move: { speed: 1 },
            opacity: { value: 0.3 },
            links: {
              enable: true,
              color: "#8b5cf6",
              opacity: 0.2
            }
          }
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;