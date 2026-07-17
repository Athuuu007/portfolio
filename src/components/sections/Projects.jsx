import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

import VariableProximity from '@/components/ui/VariableProximity';
import { MagicGrid, MagicCard } from '@/components/ui/MagicCard';
import SpecularButton from '@/components/ui/SpecularButton';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 50, damping: 15, delay: index * 0.1  }}
      className="group h-full flex flex-col relative"
      ref={cardRef}
    >
      <MagicCard 
        className="p-8 flex flex-col items-center text-center h-full cursor-default" 
        glowColor="168, 85, 247" 
        enableStars={true}
        enableTilt={true}
        enableMagnetism={true}
      >
        <div className="flex flex-col items-center justify-center w-full mb-6 relative">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300 z-10">
          <FaFolderOpen className="text-3xl text-purple-400" />
        </div>
        
        {/* Floating action buttons in top corners */}
        <div className="absolute top-0 w-full flex justify-between px-2 z-20 pt-2">
          {project.githubLink && (
            <SpecularButton 
              size="sm" 
              radius={999} 
              className="!p-3"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <FaGithub size={16} />
            </SpecularButton>
          )}
          {project.demoLink && (
            <SpecularButton 
              size="sm" 
              radius={999} 
              className="!p-3"
              onClick={() => window.open(project.demoLink, '_blank')}
            >
              <FaExternalLinkAlt size={14} />
            </SpecularButton>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-white tracking-tight transition-colors">
        <VariableProximity
          label={project.title}
          fromFontVariationSettings="'wght' 700, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={cardRef}
          radius={200}
          falloff='gaussian'
        />
      </h3>
      
      <div className="text-white/60 text-sm mb-6 leading-relaxed max-w-[90%]">
        <VariableProximity
          label={project.description}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 900, 'opsz' 40"
          containerRef={cardRef}
          radius={200}
          falloff='gaussian'
        />
      </div>

      {/* Bullet Points from Resume - Centered */}
      <ul className="mb-8 flex flex-col gap-3 flex-grow items-center w-full">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="flex flex-col items-center text-white/70 text-sm bg-black/20 px-4 py-2 rounded-xl border border-white/5 w-full">
            <span className="text-center">
              <VariableProximity
                label={bullet}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 900, 'opsz' 40"
                containerRef={cardRef}
                radius={200}
                falloff='gaussian'
              />
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-2 mt-auto pt-6 border-t border-white/10 w-full">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-mono font-medium text-white/80 px-3 py-1.5 bg-black/40 rounded-lg border border-white/5">
            <VariableProximity
              label={tag}
              fromFontVariationSettings="'wght' 500, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={cardRef}
              radius={150}
              falloff='gaussian'
            />
          </span>
        ))}
      </div>
      </MagicCard>
    </motion.div>
  );
};

export default function Projects() {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="pt-32 pb-10 relative z-10 w-full flex flex-col items-center" style={{ marginBottom: '225px' }}>
      <div className="w-full max-w-[1200px] px-6" ref={containerRef}>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Featured Work</h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            A selection of my recent projects, showcasing my expertise in building scalable, 
            intelligent systems and engaging web experiences.
          </p>
        </motion.div>

        <MagicGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </MagicGrid>
        
      </div>
    </section>
  );
}
