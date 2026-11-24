import { useCallback, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { DataArchitecture } from './components/sections/DataArchitecture';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { RecruiterPitch } from './components/sections/RecruiterPitch';
import { Contact } from './components/sections/Contact';

export function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#05070D] text-[#F8FAFC]">
        {!loaded && <LoadingScreen onComplete={handleLoadingComplete} />}
        <ScrollProgress />
        <Navbar />

        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <DataArchitecture />
          <Projects />
          <Experience />
          <Achievements />
          <RecruiterPitch />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
