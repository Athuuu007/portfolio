import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  variant = 'primary',
  href,
  type = 'button',
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (left + width / 2)) * 0.28,
      y: (e.clientY - (top + height / 2)) * 0.28,
    });
    setHovered(true);
  };

  const reset = () => { setPos({ x: 0, y: 0 }); setHovered(false); };

  const Tag = href ? motion.a : motion.button;

  const baseStyle = {
    position: 'relative',
    padding: '12px 32px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
    cursor: 'pointer',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    overflow: 'hidden',
    textDecoration: 'none',
    outline: 'none',
  };

  /* ── Solid variant: white → cyan gradient, shimmer sweep ── */
  if (variant === 'solid') {
    return (
      <Tag
        ref={ref}
        href={href}
        type={!href ? type : undefined}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
        style={{
          ...baseStyle,
          color: '#050816',
          background: hovered
            ? 'linear-gradient(135deg, #00f6ff 0%, #00d4ff 50%, #0099cc 100%)'
            : 'linear-gradient(135deg, #ffffff 0%, #e8f8ff 50%, #d0f4ff 100%)',
          boxShadow: hovered
            ? '0 0 30px rgba(0,246,255,0.6), 0 0 60px rgba(0,246,255,0.25), 0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.15)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
            transform: hovered ? 'translateX(200%) skewX(-20deg)' : 'translateX(-120%) skewX(-20deg)',
            transition: 'transform 0.6s ease',
          }}
        />
        <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>{children}</span>
      </Tag>
    );
  }

  /* ── Gold variant: gold gradient with warm shimmer ── */
  if (variant === 'gold') {
    return (
      <Tag
        ref={ref}
        href={href}
        type={!href ? type : undefined}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        onClick={onClick}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={className}
        style={{
          ...baseStyle,
          color: '#050816',
          background: hovered
            ? 'linear-gradient(135deg, #f5c842 0%, #d4af37 50%, #b8941e 100%)'
            : 'linear-gradient(135deg, #ffe580 0%, #d4af37 50%, #c49a20 100%)',
          boxShadow: hovered
            ? '0 0 30px rgba(212,175,55,0.7), 0 0 60px rgba(212,175,55,0.3), 0 4px 20px rgba(0,0,0,0.3)'
            : '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(212,175,55,0.2)',
          transition: 'background 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
            transform: hovered ? 'translateX(200%) skewX(-20deg)' : 'translateX(-120%) skewX(-20deg)',
            transition: 'transform 0.6s ease',
          }}
        />
        <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>{children}</span>
      </Tag>
    );
  }

  /* ── Primary variant (default): glowing border + glass interior ── */
  return (
    <Tag
      ref={ref}
      href={href}
      type={!href ? type : undefined}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{
        ...baseStyle,
        color: '#ffffff',
        background: hovered ? 'rgba(0, 246, 255, 0.08)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? 'rgba(0,246,255,0.7)' : 'rgba(0,246,255,0.35)'}`,
        boxShadow: hovered
          ? '0 0 20px rgba(0,246,255,0.35), 0 0 50px rgba(0,246,255,0.12), inset 0 0 20px rgba(0,246,255,0.05)'
          : '0 2px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.35s ease',
      }}
    >
      <span
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: '999px',
          background: 'linear-gradient(105deg, transparent 20%, rgba(0,246,255,0.15) 50%, transparent 80%)',
          transform: hovered ? 'translateX(200%) skewX(-20deg)' : 'translateX(-120%) skewX(-20deg)',
          transition: 'transform 0.55s ease',
        }}
      />
      <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>{children}</span>
    </Tag>
  );
}
