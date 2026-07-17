import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaLayerGroup, FaHandsHelping } from 'react-icons/fa';
import ScrollStack, { ScrollStackItem } from '@/components/ui/ScrollStack';

export default function WhyHireMe() {
  const reasons = [
    {
      icon: FaBrain,
      title: "AI & ML Expertise",
      description: "Deep understanding of Python, CNNs, and predictive modeling to build high-performance intelligent systems that solve real-world problems.",
      color: "text-purple-400",
      gradient: "from-[#1a0b2e] to-[#2d1b4e]"
    },
    {
      icon: FaChartLine,
      title: "Data-Driven Approach",
      description: "Proven ability to analyze complex datasets, perform data preprocessing, and extract actionable insights through robust visualization and modeling.",
      color: "text-blue-400",
      gradient: "from-[#0b1a2e] to-[#1b2d4e]"
    },
    {
      icon: FaLayerGroup,
      title: "End-to-End Implementation",
      description: "Capable of taking projects from concept to deployment, integrating machine learning models with seamless web interfaces using HTML, CSS, and Flask.",
      color: "text-teal-400",
      gradient: "from-[#0b2e25] to-[#1b4e3e]"
    },
    {
      icon: FaHandsHelping,
      title: "Collaborative Problem Solver",
      description: "Strong communication skills and a quick learner, dedicated to working effectively in teams to deliver optimized, innovative engineering solutions.",
      color: "text-yellow-400",
      gradient: "from-[#2e250b] to-[#4e3f1b]"
    }
  ];

  return (
    <section id="why-hire-me" className="pt-32 pb-0 relative z-10 w-full flex flex-col items-center">
      <div className="w-full max-w-[1200px] px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: 'spring', stiffness: 50, damping: 15 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Why Hire Me</h2>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            I bring a unique blend of technical expertise, data-driven thinking, and collaborative energy to every project.
          </p>
        </motion.div>

      </div>

      {/* Remove fixed height so the stack can naturally dictate the scroll space */}
      <div className="w-full relative">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          scaleDuration={0.5}
          rotationAmount={0}
          blurAmount={0}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollStackItem key={index} itemClassName="w-full max-w-[800px] mx-auto !p-0 !bg-transparent !shadow-none !border-none">
                <div className={`w-full h-auto min-h-[20rem] sm:h-[25rem] p-6 sm:p-10 py-10 flex flex-col items-center text-center justify-center gap-4 sm:gap-6 group hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden rounded-[40px] bg-gradient-to-br ${reason.gradient} border border-white/10 shadow-2xl`}>
                  
                  {/* Subtle background glow */}
                  <div className={`absolute inset-0 opacity-20 blur-[80px] bg-current ${reason.color}`} />
                  
                  <div className="p-5 bg-black/20 rounded-2xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500 z-10">
                    <Icon className={`text-4xl ${reason.color}`} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white z-10">{reason.title}</h3>
                  <p className="text-white/80 text-lg max-w-xl leading-relaxed z-10">
                    {reason.description}
                  </p>
                  
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
      
    </section>
  );
}
