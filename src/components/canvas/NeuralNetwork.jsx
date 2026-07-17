import { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Listen on window, not canvas (canvas has pointer-events-none)
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.45 + 0.15;
        this.pulseSpeed = Math.random() * 0.018 + 0.005;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.currentOpacity = this.opacity;
      }

      update(t) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0) { this.x = 0; this.vx *= -1; }
        if (this.x > canvas.width) { this.x = canvas.width; this.vx *= -1; }
        if (this.y < 0) { this.y = 0; this.vy *= -1; }
        if (this.y > canvas.height) { this.y = canvas.height; this.vy *= -1; }

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
          }
        }

        // Pulsing opacity
        this.currentOpacity = this.opacity + Math.sin(t * this.pulseSpeed + this.pulsePhase) * 0.12;
        this.currentOpacity = Math.max(0, Math.min(1, this.currentOpacity));
      }

      draw() {
        // Core dot
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 246, 255, ${this.currentOpacity})`;
        ctx.fill();

        // Glow halo
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 5);
        gradient.addColorStop(0, `rgba(0, 246, 255, ${this.currentOpacity * 0.35})`);
        gradient.addColorStop(1, 'rgba(0, 246, 255, 0)');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 90);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    };

    let t = 0;
    let lastTime = 0;

    const animate = (timestamp) => {
      // Throttle to ~60fps max
      const delta = timestamp - lastTime;
      if (delta >= 14) {
        lastTime = timestamp;
        t++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (const p of particles) {
          p.update(t);
          p.draw();
        }

        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distSq = dx * dx + dy * dy;
            const maxDist = 150;

            if (distSq < maxDist * maxDist) {
              const dist = Math.sqrt(distSq);
              const alpha = 0.22 * (1 - dist / maxDist);
              const gradient = ctx.createLinearGradient(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
              );
              gradient.addColorStop(0, `rgba(0, 246, 255, ${alpha})`);
              gradient.addColorStop(1, `rgba(212, 175, 55, ${alpha * 0.45})`);

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.7;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    resize();
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
