import { motion } from 'framer-motion';
import { services, achievements } from '@/constants';
import { useEffect, useRef, useState } from 'react';

const useCountUp = (target, inView) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
};

const AchievementCard = ({ ach, index }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(ach.value, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: index * 0.1  }}
      className="relative pl-5 py-3"
      style={{ borderLeft: '2px solid #d4af37', boxShadow: '-2px 0 12px rgba(212,175,55,0.3)' }}
    >
      <div className="text-4xl md:text-5xl font-black text-white font-heading mb-1">
        {count}
        <span style={{ color: '#d4af37', textShadow: '0 0 12px rgba(212,175,55,0.5)' }}>
          {ach.suffix}
        </span>
      </div>
      <p className="text-secondary font-mono text-xs uppercase tracking-wider">{ach.title}</p>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="section-padding max-container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Services grid */}
        <div>
          <p className="text-accent-blue font-mono tracking-widest uppercase mb-2 text-sm"
             style={{ textShadow: '0 0 10px rgba(0,246,255,0.4)' }}>
            Offerings
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 font-heading">
            What I Can Build<span className="text-gradient">.</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {services.map((svc, i) => {
              const c = svc.color || '#00f6ff';
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.08  }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="relative p-5 rounded-2xl group overflow-hidden cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = `${c}50`;
                    e.currentTarget.style.background = `${c}0c`;
                    e.currentTarget.style.boxShadow = `0 0 24px ${c}20`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Top shimmer */}
                  <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       style={{ background: `linear-gradient(90deg, transparent, ${c}80, transparent)` }} />
                  <span style={{ color: c, fontSize: '1.8rem' }} className="mb-3 block">
                    <svc.icon />
                  </span>
                  <h3 className="text-white font-semibold text-sm leading-snug">{svc.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <p className="text-accent-blue font-mono tracking-widest uppercase mb-2 text-sm"
             style={{ textShadow: '0 0 10px rgba(0,246,255,0.4)' }}>
            Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-10 font-heading">
            By The Numbers<span className="text-gradient">.</span>
          </h2>
          <div className="grid grid-cols-2 gap-10">
            {achievements.map((ach, i) => <AchievementCard key={ach.title} ach={ach} index={i} />)}
          </div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.5  }}
            className="mt-14 relative rounded-2xl p-[1px] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,246,255,0.25) 0%, transparent 50%, rgba(212,175,55,0.15) 100%)' }}
          >
            <div className="rounded-2xl p-6" style={{ background: 'rgba(5,8,22,0.95)', backdropFilter: 'blur(12px)' }}>
              <p className="text-secondary text-sm leading-relaxed font-mono">
                "Every metric above represents real hours of engineering, debugging, and shipping.
                Not theoretical — practical, real-world experience."
              </p>
              <p className="text-accent-blue text-xs font-mono mt-3"
                 style={{ textShadow: '0 0 8px rgba(0,246,255,0.4)' }}>
                — Atharva Borsutkar
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
