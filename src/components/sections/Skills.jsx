import { motion } from 'framer-motion';
import { programmingSkills, aiSkills, softSkills, languages } from '@/constants';

const SkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 50, damping: 15, delay: index * 0.04 }}
    whileHover={{ scale: 1.04, y: -2 }}
    className="relative group flex items-center gap-3 p-4 rounded-xl overflow-hidden cursor-default"
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={e => {
      const c = skill.color || '#00f6ff';
      e.currentTarget.style.borderColor = `${c}55`;
      e.currentTarget.style.background = `${c}0d`;
      e.currentTarget.style.boxShadow = `0 0 20px ${c}20`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Shimmer on hover */}
    <span
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
        opacity: 0,
        transition: 'opacity 0.3s',
      }}
    />
    <span style={{ color: skill.color || '#fff', fontSize: '1.4rem', flexShrink: 0 }}>
      <skill.icon />
    </span>
    <span className="text-white/70 font-medium text-sm group-hover:text-white transition-colors duration-200">
      {skill.name}
    </span>
  </motion.div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-container relative z-10">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent-blue font-mono tracking-widest uppercase mb-2 text-sm"
           style={{ textShadow: '0 0 10px rgba(0,246,255,0.4)' }}>
          Capabilities
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white font-heading">
          Technical Arsenal<span className="text-gradient">.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Left: Skills grids */}
        <div className="xl:col-span-2 space-y-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #00f6ff, transparent)', boxShadow: '0 0 8px rgba(0,246,255,0.5)' }} />
              Programming &amp; Web
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {programmingSkills.map((s, i) => <SkillBadge key={s.name} skill={s} index={i} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)', boxShadow: '0 0 8px rgba(212,175,55,0.5)' }} />
              AI &amp; Machine Learning
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {aiSkills.map((s, i) => <SkillBadge key={s.name} skill={s} index={i} />)}
            </div>
          </div>
        </div>

        {/* Right: Language bars + soft skills */}
        <div className="space-y-6">
          {/* Language bars */}
          <div
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
          >
            {/* Subtle top glow */}
            <div className="absolute top-0 left-0 right-0 h-px"
                 style={{ background: 'linear-gradient(90deg, transparent, rgba(0,246,255,0.4), transparent)' }} />
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #00f6ff, transparent)' }} />
              Linguistic Capacity
            </h3>
            <div className="space-y-5">
              {languages.map((lang, idx) => (
                <div key={lang.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-medium">{lang.name}</span>
                    <span className="font-mono text-sm font-bold" style={{ color: '#d4af37' }}>
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: idx * 0.18 }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #00f6ff, #d4af37)',
                        boxShadow: '0 0 8px rgba(0,246,255,0.4)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div
            className="p-6 rounded-2xl relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(212,175,55,0.15)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
                 style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)' }} />
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-6 h-px" style={{ background: 'linear-gradient(90deg, #d4af37, transparent)' }} />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.06  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 rounded-full text-xs font-mono cursor-default transition-all duration-200"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    color: 'rgba(212,175,55,0.9)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.15)'; e.currentTarget.style.boxShadow = '0 0 10px rgba(212,175,55,0.2)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
