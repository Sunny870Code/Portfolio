import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import SkillsBento from './components/skillBento';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Footer from './components/footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return ( 
    <div className="bg-[#ffffff] text-gray-600 min-h-screen selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillsBento />
      <Projects />
      <Footer />
    </div>
  );
}