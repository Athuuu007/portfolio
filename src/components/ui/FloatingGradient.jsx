import { motion } from "framer-motion";

export function FloatingGradient({ children, className = "" }) {
  return (
    <div className={`relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-400 group-hover:border-t-white/30 group-hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)] group-hover:-translate-y-1 ${className}`}>
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-gray-400 to-white opacity-20 blur-3xl pointer-events-none mix-blend-screen"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-zinc-500 to-gray-300 opacity-20 blur-3xl pointer-events-none mix-blend-screen"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        style={{ bottom: "10%", right: "10%" }}
      />
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-slate-500 to-white opacity-20 blur-3xl pointer-events-none mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
        style={{ top: "50%", left: "50%" }}
      />
      <div className="relative z-10 flex h-full w-full flex-col">
        {children}
      </div>
    </div>
  );
}

export default FloatingGradient;
