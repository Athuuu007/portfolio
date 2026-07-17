import './index.css';

import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import CommandPalette from '@/components/ui/CommandPalette';
import DotField from '@/components/ui/DotField';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import WhyHireMe from '@/components/sections/WhyHireMe';
import Contact from '@/components/sections/Contact';

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: '#000000' }}>
        <DotField
          dotRadius={2.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
        />
      </div>
      <SmoothScroll>
        {/* Global overlays */}
        <CustomCursor />
        <ScrollProgress />
        <CommandPalette />

        {/* Navigation */}
        <Navbar />

        {/* Ambient background layers */}
        <div className="ambient-glow" />

        {/* Main content */}
        <main className="relative z-10 w-full flex flex-col items-center overflow-x-hidden">
          <Hero />
          <About />
          <Projects />
          <WhyHireMe />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
