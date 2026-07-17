import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '@/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-accent-blue/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="text-white font-heading font-bold text-lg">
            Atharva<span className="text-gradient">.</span>
          </p>
          <p className="text-secondary text-sm mt-1 font-mono">
            AI & Machine Learning Engineer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-accent-blue text-xl transition-all hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-accent-blue text-xl transition-all hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.socials.email}
            className="text-white/40 hover:text-accent-gold text-xl transition-all hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-sm font-mono text-center">
          © {year} {personalInfo.name}. Built with React & ❤️
        </p>
      </div>
    </footer>
  );
}
