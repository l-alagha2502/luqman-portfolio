import { Link } from 'react-router-dom';
import { motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Zap, FlaskConical, Droplets, Code, Plus, Eye } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const steps = [
  {
    id: '01',
    title: 'SPARK',
    color: 'text-accent',
    border: 'border-accent/20',
    description: 'Taking inspiration from other projects & designs and merging them with other projects & designs.'
  },
  {
    id: '02',
    title: 'THINK',
    color: 'text-cyan',
    border: 'border-cyan/20',
    description: 'Thinking outside the box to transform inspirations into ideas with my style'
  },
  {
    id: '03',
    title: 'CREATE',
    color: 'text-magenta',
    border: 'border-magenta/20',
    description: 'Turning the ideas into reality using different creative methods.'
  }
];

export default function Studio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative bg-transparent">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void/50 z-1 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 text-center mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <span className="font-mono text-[10px] uppercase tracking-[1em] text-accent animate-pulse">Laboratory / 001</span>
            <h1 className="font-display font-black text-7xl md:text-[12vw] leading-none tracking-tighter text-white flex flex-row flex-wrap justify-center gap-4 md:gap-8" data-text="THE STUDIO">
              <div className="flex">
                {"THE".split('').map((char, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '100%', rotate: 10 }}
                      animate={{ y: '0%', rotate: 0 }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                      className="inline-block origin-bottom-left"
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </div>
              <div className="flex text-gradient-multi pb-4">
                {"STUDIO".split('').map((char, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '100%', rotate: -10 }}
                      animate={{ y: '0%', rotate: 0 }}
                      transition={{ duration: 1.2, delay: 0.2 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                      className="inline-block origin-bottom-right"
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </div>
            </h1>
            <p className="font-mono text-[14px] uppercase tracking-widest leading-relaxed opacity-80 max-w-2xl mx-auto text-white">
              A spot for creativity, experiment, innovation. Where I craft my ideas to make them reality
            </p>
          </motion.div>
        </div>

        {/* Floating Technical Data */}
        <div className="absolute bottom-10 left-10 md:left-20 font-mono text-[8px] uppercase tracking-widest opacity-50 flex flex-col gap-2 mix-blend-difference text-white">
          <span>[ LOCATION: Qatar ]</span>
          <span>[ STATUS: Experimental ]</span>
          <span className="text-cyan animate-pulse">[ FREQUENCY: - Hz ]</span>
        </div>
      </section>

      {/* The Process Section */}
      <section className="relative py-32 px-6 md:px-20 border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto mix-blend-difference">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-accent animate-pulse">Methodology / 001</span>
                <h2 className="font-serif italic text-5xl md:text-7xl text-white leading-none tracking-tighter">
                  THE <span className="text-accent">PROCESS</span>
                </h2>
              </div>
              <p className="font-mono text-[14px] uppercase tracking-widest leading-relaxed opacity-80 text-white">
                My process of creating things, is pretty simple.
              </p>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center glass group-hover:bg-accent/20 transition-colors">
                    <Eye className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white">Visionary</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center glass group-hover:bg-cyan/20 transition-colors">
                    <FlaskConical className="w-5 h-5 text-cyan group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-[12px] uppercase tracking-[0.4em] text-white">Empirical</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`p-12 border ${step.border} glass rounded-3xl flex flex-col gap-8 group relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                    <span className="font-display font-black text-8xl leading-none">{step.id}</span>
                  </div>
                  <div className="flex flex-col gap-4 relative z-10">
                    <span className={`font-mono text-[10px] uppercase tracking-[0.4em] ${step.color}`}>{step.id} / Step</span>
                    <h3 className={`font-display font-bold text-4xl text-white tracking-tighter group-hover:${step.color} transition-colors`}>{step.title}</h3>
                  </div>
                  <p className="font-mono text-[12px] uppercase tracking-widest leading-relaxed opacity-60 text-white group-hover:opacity-100 transition-opacity relative z-10">
                    {step.description}
                  </p>
                  <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${step.color.split('-')[1]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-6 md:px-20 bg-transparent overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none mix-blend-overlay">
          <div className="font-display font-black text-[40vw] leading-none text-outline">
            VOID
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 mix-blend-difference">
          <div className="flex flex-col items-center text-center gap-16">
            <div className="flex flex-col gap-8">
              <span className="font-mono text-[10px] uppercase tracking-[1em] text-magenta animate-pulse">Philosophy / 001</span>
              <h2 className="font-serif italic text-6xl md:text-[8vw] text-white leading-none tracking-tighter">
                PHILOSOPHY & <span className="text-gradient-cyan">MINDSET</span>
              </h2>
            </div>
            
            <div className="w-full p-12 md:p-20 glass rounded-3xl border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-white relative z-10">
                "I believe that mistakes are only losses if nothing is learned from them; we all do mistakes, but who wins is who learns from these mistakes to improve and not repeat them, meanwhile the loser is the person that skips his mistakes, and doesn't learn from them, therefore repeating them again and again."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Alchemist Section */}
      <section className="relative py-32 px-6 md:px-20 border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto mix-blend-difference">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div 
                className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl shadow-accent/20"
              >
                <img 
                  src="/pfp.jpg.jpeg" 
                  alt="Luqman Alagha"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[72%_center] grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-accent animate-pulse">THE HUMAN / 002</span>
                <h2 className="font-display font-black text-6xl md:text-8xl text-white leading-none tracking-tighter" data-text="LUQMAN ALAGHA">
                  LUQMAN <br /> <span className="text-gradient-magenta">ALAGHA</span>
                </h2>
              </div>
              
              <div className="flex flex-col gap-8">
                <p className="font-mono text-[16px] uppercase tracking-widest leading-relaxed opacity-80 text-white">
                  A 15-year-old student, graphic designer, and vibe coder based in Qatar. 
                  My journey from Palestine to Britain, Turkey, and Qatar fuels my creativity. 
                  I love socializing, sketching, and bringing ideas to life through design and code.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {['Graphic Design', 'Vibe Coding', 'Sketching', 'Sports', 'Socializing'].map(skill => (
                    <span key={skill} className="px-6 py-3 glass rounded-full font-mono text-[10px] uppercase tracking-[0.4em] opacity-60 text-white hover:opacity-100 hover:border-accent transition-all hover:bg-white/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Magnetic strength={0.3}>
                <Link 
                  to="/contact"
                  className="flex items-center gap-8 group w-fit"
                >
                  <div className="w-20 h-20 border border-accent rounded-full flex items-center justify-center group-hover:bg-accent transition-all duration-500 glow-accent bg-white/5 backdrop-blur-md">
                    <Plus className="w-8 h-8 text-accent group-hover:text-white transition-colors group-hover:rotate-90 duration-500" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-[12px] uppercase tracking-[0.6em] text-accent group-hover:text-white transition-colors">Connect</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 text-white">The Contact / 001</span>
                  </div>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <footer className="py-20 px-6 md:px-20 border-t border-white/5 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[1em] opacity-20">
          © 2026 LUQMAN ALAGHA / ALL RIGHTS RESERVED
        </span>
      </footer>
    </div>
  );
}
