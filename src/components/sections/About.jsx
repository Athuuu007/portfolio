import { motion } from 'framer-motion';
import { personalInfo, aboutMeText, skills, additionalInfo } from '@/constants';
import { FaGraduationCap, FaCode, FaBrain, FaBriefcase, FaLanguage, FaBolt } from 'react-icons/fa';

import { MagicGrid, MagicCard } from '@/components/ui/MagicCard';
import { TextScramble } from '@/components/ui/TextScramble';
const GlassCard = ({ children, delay = 0, colSpan = 1, className = "" }) => {
  const colSpanClass = {
    1: 'md:col-span-1',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
  }[colSpan] || 'md:col-span-1';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      className={`group flex flex-col items-center text-center w-full h-full ${colSpanClass}`}
    >
      <MagicCard 
        className={`p-8 flex flex-col items-center justify-center w-full h-full ${className}`} 
        glowColor="168, 85, 247"
        enableStars={true}
        enableTilt={true}
        enableMagnetism={true}
      >
        {children}
      </MagicCard>
    </motion.div>
  );
};

const SectionHeader = ({ icon: Icon, title, colorClass }) => (
  <div className="flex flex-col items-center justify-center gap-4 mb-8 w-full border-b border-white/10 pb-6">
    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
      <Icon className={`text-2xl ${colorClass}`} />
    </div>
    <h3 className="text-xl font-bold tracking-tight text-white/90">{title}</h3>
  </div>
);

export default function About() {
  return (
    <section id="about" className="pt-32 pb-10 relative z-10 w-full flex flex-col items-center" style={{ marginBottom: '225px' }}>
      <div className="w-full max-w-[1200px] px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Career Objective</h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {aboutMeText}
          </p>
        </motion.div>

        {/* Premium Google-Style Bento Grid */}
        <MagicGrid className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Experience / Internship */}
          <GlassCard delay={0.1} colSpan={1}>
            <SectionHeader icon={FaBriefcase} title="Experience" colorClass="text-purple-400" />
            <div className="flex flex-col gap-6 w-full items-center">
              {personalInfo.experience.map((exp, i) => (
                <div key={i} className="flex flex-col items-center w-full max-w-md bg-black/20 p-6 rounded-2xl border border-white/5">
                  <TextScramble as="span" className="text-xs font-mono text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full mb-3">{exp.type}</TextScramble>
                  <TextScramble as="h4" className="text-xl font-bold text-white mb-1">{exp.role}</TextScramble>
                  <TextScramble as="p" className="text-white/70 font-medium mb-2">{exp.company}</TextScramble>
                  <TextScramble as="p" className="text-white/40 text-sm font-mono">{exp.duration}</TextScramble>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Education */}
          <GlassCard delay={0.2} colSpan={1}>
            <SectionHeader icon={FaGraduationCap} title="Education" colorClass="text-blue-400" />
            <div className="flex flex-col gap-6 w-full items-center">
              {personalInfo.education.map((edu, i) => (
                <div key={i} className="flex flex-col items-center w-full bg-black/20 p-5 rounded-2xl border border-white/5">
                  <TextScramble as="p" className="text-white/50 text-xs font-mono mb-2">{edu.duration}</TextScramble>
                  <TextScramble as="h4" className="text-base font-bold text-white mb-2 leading-tight">{edu.degree}</TextScramble>
                  <TextScramble as="p" className="text-white/70 text-sm mb-3">{edu.institute}</TextScramble>
                  <TextScramble as="span" className="text-blue-400 text-xs font-bold bg-blue-400/10 px-3 py-1 rounded-full">{edu.details}</TextScramble>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Technical Skills - Large Span */}
          <GlassCard delay={0.3} colSpan={2}>
            <SectionHeader icon={FaBrain} title="Technical Expertise" colorClass="text-teal-400" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-4">
              
              <div className="flex flex-col items-center">
                <h5 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">AI & ML</h5>
                <div className="flex flex-wrap justify-center gap-2">
                  {[...skills.machineLearning, ...skills.deepLearning].map(skill => (
                    <TextScramble as="span" key={skill} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-white/80 text-xs font-medium">{skill}</TextScramble>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h5 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Programming</h5>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.programming.map(skill => (
                    <TextScramble as="span" key={skill} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-white/80 text-xs font-medium">{skill}</TextScramble>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h5 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Data & DBs</h5>
                <div className="flex flex-wrap justify-center gap-2">
                  {[...skills.dataAnalysis, ...skills.databases].map(skill => (
                    <TextScramble as="span" key={skill} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-white/80 text-xs font-medium">{skill}</TextScramble>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h5 className="text-white/50 text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Tools</h5>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.tools.map(skill => (
                    <TextScramble as="span" key={skill} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-white/80 text-xs font-medium">{skill}</TextScramble>
                  ))}
                </div>
              </div>

            </div>
          </GlassCard>

          {/* Languages */}
          <GlassCard delay={0.4} colSpan={1}>
            <SectionHeader icon={FaLanguage} title="Languages" colorClass="text-yellow-400" />
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {additionalInfo.languages.map(lang => (
                <span key={lang} className="px-4 py-2 bg-black/20 border border-white/5 rounded-xl text-white/80 text-sm font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]"></div>
                  <TextScramble as="span">{lang}</TextScramble>
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Strengths */}
          <GlassCard delay={0.5} colSpan={1}>
            <SectionHeader icon={FaBolt} title="Core Strengths" colorClass="text-orange-400" />
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {additionalInfo.strengths.map(strength => (
                <TextScramble as="div" key={strength} className="px-5 py-3 bg-black/20 border border-white/5 rounded-xl text-white/90 text-sm font-medium shadow-inner">
                  {strength}
                </TextScramble>
              ))}
            </div>
          </GlassCard>

        </MagicGrid>
        
      </div>
    </section>
  );
}
