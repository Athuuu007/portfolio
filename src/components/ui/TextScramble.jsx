import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}) {
  const MotionComponent = motion[Component] || motion.div;

  const [displayText, setDisplayText] = useState(children);
  const isAnimating = useRef(false);
  const text = typeof children === 'string' ? children : String(children);

  const scramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimating.current = false;
        if (onScrambleComplete) onScrambleComplete();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger) return;
    scramble();

    const loopInterval = setInterval(() => {
      scramble();
    }, 7000);

    return () => clearInterval(loopInterval);
  }, [trigger, children]);

  return (
    <MotionComponent className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
