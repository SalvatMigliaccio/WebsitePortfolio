import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Talks } from './components/sections/Talks';
import { Publications } from './components/sections/Publications';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { Preloader } from './components/common/Preloader';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { BackToTop } from './components/common/BackToTop';

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Talks />
        <Publications />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

