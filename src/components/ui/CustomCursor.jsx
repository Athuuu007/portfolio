import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import ClickSpark from '@/components/ui/ClickSpark';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', show, { once: true });
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
    };
  }, []);

  if (!visible) return null;

  const size = hovered ? 40 : 12;

  return (
    <>
      <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400} />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: x - size / 2,
          y: y - size / 2,
          width: size,
          height: size,
          opacity: visible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.1 }}
        style={{
          background: '#ffffff',
          mixBlendMode: 'normal'
        }}
      />
    </>
  );
}
