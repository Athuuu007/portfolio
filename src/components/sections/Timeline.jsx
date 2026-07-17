import { motion } from 'framer-motion';
import { timeline } from '@/constants';

export default function Timeline() {
  return (
    <section id="timeline" className="section-padding max-container relative z-10">
      <div className="mb-16 text-center">
        <p className="text-accent-blue font-mono tracking-widest uppercase mb-2 text-sm"
           style={{ textShadow: '0 0 10px rgba(0,246,255,0.4)' }}>
          Journey
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white font-heading">
          The Journey<span className="text-gradient">.</span>
        </h2>
        <p className="text-secondary text-base mt-4 font-mono">
          Chronological progression through AI &amp; Computer Science.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Central axis with gradient glow */}
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, #00f6ff 0%, rgba(212,175,55,0.5) 60%, transparent 100%)',
            boxShadow: '0 0 8px rgba(0,246,255,0.3)',
          }}
        />

        {timeline.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ type: 'spring', stiffness: 50, damping: 15 }}
              className={`relative flex md:items-center mb-14 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Spacer */}
              <div className="hidden md:block w-5/12" />

              {/* Glowing node dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.3 }}
                  className="relative w-5 h-5 rounded-full"
                  style={{
                    background: '#050816',
                    border: '2px solid #00f6ff',
                    boxShadow: '0 0 12px rgba(0,246,255,0.7), 0 0 24px rgba(0,246,255,0.3)',
                  }}
                >
                  {/* Inner pulse */}
                  <span
                    className="absolute inset-1 rounded-full"
                    style={{
                      background: '#00f6ff',
                      animation: 'glow-breathe 2s ease-in-out infinite',
                    }}
                  />
                </motion.div>
              </div>

              {/* Card */}
              <div className="w-full md:w-5/12 ml-12 md:ml-0 md:px-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                  className="relative group rounded-2xl overflow-hidden p-7"
                  style={{
                    background: 'rgba(10, 14, 30, 0.95)',
                    border: '1px solid rgba(0,246,255,0.15)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,246,255,0.45)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(0,246,255,0.15), 0 8px 40px rgba(0,0,0,0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,246,255,0.15)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
                  }}
                >
                    <span className="font-black font-mono text-2xl block mb-2"
                          style={{ color: '#d4af37', textShadow: '0 0 12px rgba(212,175,55,0.4)' }}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 font-heading">{item.title}</h3>
                    <p className="text-secondary leading-relaxed text-sm">{item.description}</p>
                  </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
