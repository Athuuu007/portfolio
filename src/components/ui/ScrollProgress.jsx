import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 origin-left z-[1001]"
        style={{
          scaleX,
          height: '2px',
          background: 'linear-gradient(90deg, #00f6ff, #00d4ff 40%, #d4af37)',
          boxShadow: '0 0 8px rgba(0,246,255,0.6), 0 0 16px rgba(0,246,255,0.3)',
        }}
      />
      {/* Glow dot at the leading edge */}
      <motion.div
        className="fixed top-0 z-[1002] w-3 h-3 rounded-full -translate-y-1/4"
        style={{
          scaleX,
          left: 0,
          background: '#00f6ff',
          boxShadow: '0 0 10px rgba(0,246,255,1), 0 0 20px rgba(0,246,255,0.6)',
          transformOrigin: 'left',
        }}
      />
    </>
  );
}
