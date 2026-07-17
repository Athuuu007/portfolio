import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '@/constants';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filtered = navLinks.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-primary/85 backdrop-blur-md"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 50, damping: 15 }}
            className="relative w-full max-w-md bg-black-100 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center px-4 border-b border-white/10 gap-2">
              <span className="text-accent-blue font-mono text-lg select-none">⌘</span>
              <input
                autoFocus
                className="w-full bg-transparent py-4 text-white placeholder-white/30 outline-none font-mono text-sm"
                placeholder="Navigate to section..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <kbd className="hidden sm:flex items-center px-2 py-1 text-xs text-white/30 border border-white/10 rounded font-mono">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length > 0 ? (
                filtered.map((cmd, i) => (
                  <motion.a
                    key={cmd.id}
                    href={`#${cmd.id}`}
                    onClick={() => { setIsOpen(false); setSearch(''); }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15, delay: i * 0.04  }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/8 transition-all font-mono text-sm group"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent-blue/40 group-hover:bg-accent-blue transition-colors" />
                    {cmd.label}
                    <span className="ml-auto text-accent-gold/40 text-xs">→</span>
                  </motion.a>
                ))
              ) : (
                <div className="p-6 text-center text-white/40 text-sm font-mono">
                  No sections found.
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-white/5 flex items-center gap-2">
              <span className="text-white/20 text-xs font-mono">Press</span>
              <kbd className="px-1.5 py-0.5 text-xs text-white/30 border border-white/10 rounded font-mono">↑↓</kbd>
              <span className="text-white/20 text-xs font-mono">to navigate</span>
              <span className="ml-auto text-white/20 text-xs font-mono">Ctrl + K</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
