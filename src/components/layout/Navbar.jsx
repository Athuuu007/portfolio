import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from '@/components/ui/GooeyNav';
import SpecularButton from '@/components/ui/SpecularButton';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleMobileNavClick = (href) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300); // Wait for menu to close before scrolling
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        className={`fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-6 transition-all duration-500 flex justify-center ${
          scrolled ? 'py-3 sm:py-4' : 'py-5 sm:py-6'
        }`}
      >
        <div className="flex items-center gap-2 sm:gap-4 w-full max-w-[1200px] justify-between md:justify-center">
          
          {/* Left Side: Logo Pill */}
          <a 
            href="#hero" 
            className={`flex items-center justify-center transition-all duration-500 rounded-[18px] px-5 sm:px-8 py-3 sm:py-4 hover:scale-105 interactive ${
              scrolled ? 'bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)] border border-white/10' : 'bg-black/40 backdrop-blur-sm border border-white/5'
            }`}
          >
            <span className="font-black text-xl sm:text-2xl tracking-tighter flex items-center">
              <span className="text-white">A</span>
              <span className="text-gradient-purple">B.</span>
            </span>
          </a>

          {/* Center: Links Pill (Desktop) */}
          <div className={`hidden md:flex items-center justify-center transition-all duration-500 rounded-[18px] px-4 py-1 ${
            scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-white/10' : 'bg-black/40 backdrop-blur-sm border border-white/5'
          }`}>
            <div className="relative">
              <GooeyNav items={navItems} />
            </div>
          </div>

          {/* Right Side: Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            {/* Hire Me Button (Hidden on very small screens, shown in mobile menu instead, or keep small version) */}
            <div className="hidden sm:block">
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

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden flex items-center justify-center transition-all duration-500 rounded-[18px] p-4 ${
                scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg border border-white/10' : 'bg-black/40 backdrop-blur-sm border border-white/5'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FaBars className="text-white text-xl" />
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1001] bg-black/80 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-4 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes className="text-2xl" />
            </button>

            <div className="flex flex-col items-center gap-8 text-center w-full px-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(item.href);
                  }}
                  className="text-4xl font-bold text-white/80 hover:text-white hover:scale-110 transition-all"
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                className="mt-8"
              >
                <SpecularButton 
                  onClick={() => handleMobileNavClick('#contact')}
                >
                  Hire Me Today
                </SpecularButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
