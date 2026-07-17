import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeCenterpiece from '@/components/ui/ThreeCenterpiece';
import BlurText from '@/components/ui/BlurText';
import SpecularButton from '@/components/ui/SpecularButton';

export default function Hero() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <ThreeCenterpiece />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center mt-20">
        
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={fontsLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={fontsLoaded ? {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          } : { duration: 0 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-[20px] opacity-60 animate-pulse"></div>
          <img 
            src="/pp.jpg" 
            alt="Atharva Borsutkar" 
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl z-10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={fontsLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={fontsLoaded ? { 
            duration: 1.2, 
            repeat: Infinity, 
            repeatType: 'reverse', 
            repeatDelay: 5,
            ease: "easeOut" 
          } : { duration: 0 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass-panel border border-white/10"
        >
          <span className="text-white/80 text-sm font-medium tracking-wide">
            Available for new opportunities
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          <BlurText
            tag="span"
            text="Engineering"
            delay={30}
            stepDuration={0.4}
            animateBy="letters"
            loop={true}
            repeatDelay={5}
          />
          <BlurText
            tag="span"
            className="blur-gradient-purple pb-1"
            text="intelligence"
            delay={30}
            stepDuration={0.4}
            animateBy="letters"
            loop={true}
            repeatDelay={5}
          />
          <BlurText
            tag="span"
            className="blur-gradient-purple"
            text="into"
            delay={30}
            stepDuration={0.4}
            animateBy="letters"
            loop={true}
            repeatDelay={5}
          />
          <BlurText
            tag="span"
            text="reality."
            delay={30}
            stepDuration={0.4}
            animateBy="letters"
            loop={true}
            repeatDelay={5}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={fontsLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={fontsLoaded ? { 
            duration: 1.2, 
            repeat: Infinity, 
            repeatType: 'reverse', 
            repeatDelay: 5,
            ease: "easeOut" 
          } : { duration: 0 }}
          className="bg-black/40 backdrop-blur-md p-[5px] rounded-2xl border border-white/10"
        >
          <BlurText
            tag="p"
            className="text-white/80 text-lg md:text-xl max-w-2xl font-medium"
            text="I'm Atharva Borsutkar. I build high-performance AI systems, robust APIs, and premium web interfaces."
            delay={20}
            stepDuration={0.4}
            animateBy="words"
            loop={true}
            repeatDelay={5}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={fontsLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={fontsLoaded ? { 
            duration: 1.2, 
            repeat: Infinity, 
            repeatType: 'reverse', 
            repeatDelay: 5,
            ease: "easeOut"
          } : { duration: 0 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-stretch sm:items-center px-4 sm:px-0"
        >
          <SpecularButton 
            blur={12}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Work
          </SpecularButton>
          <SpecularButton 
            blur={12}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </SpecularButton>
        </motion.div>

      </div>
    </section>
  );
}
