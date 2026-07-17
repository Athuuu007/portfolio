import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  // Start offscreen to prevent cursor flash at (0,0) before first mouse move
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return position;
};
