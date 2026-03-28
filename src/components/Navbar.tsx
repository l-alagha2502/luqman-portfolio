import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { FlaskConical, Archive, Home, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Studio', path: '/studio', icon: FlaskConical },
    { name: 'Archive', path: '/archive', icon: Archive },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-6 md:px-20 py-8 flex justify-between items-start pointer-events-none">
      <Magnetic strength={0.2}>
        <Link to="/" className="pointer-events-auto group flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-500">
            <span className="font-serif italic text-white group-hover:text-accent font-bold">L</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white">Luqman</span>
          </div>
        </Link>
      </Magnetic>

      <div className="pointer-events-auto flex flex-row items-center gap-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-row gap-2 bg-void/80 backdrop-blur-xl border border-white/10 p-2 rounded-full"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`group relative flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-500 ${
                    location.pathname === item.path 
                      ? 'bg-accent text-white' 
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${location.pathname === item.path ? 'text-white' : 'text-accent group-hover:text-white'}`} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] hidden md:block">
                    {item.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <Magnetic strength={0.2}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-500 glass shrink-0"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </Magnetic>
      </div>
    </nav>
  );
}
