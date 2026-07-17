import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GooeyNav from '@/components/ui/GooeyNav';
import SpecularButton from '@/components/ui/SpecularButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      className={`fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 transition-all duration-500 flex justify-center ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Left Side: Logo Pill */}
        <a 
          href="#hero" 
          className={`flex items-center justify-center transition-all duration-500 rounded-[18px] px-8 py-4 hover:scale-105 interactive ${
            scrolled ? 'bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)] border border-white/10' : 'bg-black/40 backdrop-blur-sm border border-white/5'
          }`}
        >
          <span className="font-black text-2xl tracking-tighter flex items-center">
            <span className="text-white">A</span>
            <span className="text-gradient-purple">B.</span>
          </span>
        </a>

        {/* Center: Links Pill */}
        <div className={`hidden md:flex items-center justify-center transition-all duration-500 rounded-[18px] px-4 py-1 ${
          scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-white/10' : 'bg-black/40 backdrop-blur-sm border border-white/5'
        }`}>
          <div className="relative">
            <GooeyNav items={navItems} />
          </div>
        </div>

        {/* Separated Hire Me Button */}
        <SpecularButton 
          blur={12}
          onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Hire Me
        </SpecularButton>

      </div>
    </motion.nav>
  );
}
