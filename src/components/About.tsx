import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Droplets, Zap, Plus } from 'lucide-react';
import Magnetic from './Magnetic';
import { useImageModal } from '../context/ImageContext';

const words = "I'm a 15-year-old student, graphic designer, and vibe coder based in Qatar. My journey has taken me from Palestine to Britain, Turkey, and now Qatar—a blend of cultures that fuels my creativity. I love socializing, sketching, and bringing ideas to life through design and code.".split(" ");

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { openImage } = useImageModal();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 50%"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative min-h-screen py-20 px-6 md:px-20 bg-transparent overflow-hidden"
    >
      <div className="max-w-[100rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left Column - Large Image */}
          <div className="lg:col-span-5 relative h-full">
            <motion.div 
              style={{ y, scale }}
              className="relative h-full min-h-[600px] lg:min-h-[800px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl cursor-pointer glass"
              onClick={() => openImage("/the-human-pic.png", "Luqman Alagha")}
            >
              <motion.img 
                src="/the-human-pic.png" 
                alt="Luqman Alagha"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-80 pointer-events-none" />
              
              {/* Floating Tech Label */}
              <div className="absolute bottom-12 left-12 flex flex-col gap-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.6em] text-white/50">Subject / 001</span>
                <span className="font-mono text-[18px] uppercase tracking-widest text-white">Luqman Alagha</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Editorial Content */}
          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.8em] text-accent">The Human / 001</span>
              <h2 className="font-display font-black text-5xl sm:text-7xl md:text-[8vw] text-white leading-[0.8] tracking-tighter flex flex-col" data-text="BEYOND BORDERS">
                <div className="flex">
                  {"BEYOND".split('').map((char, i) => (
                    <span key={i} className="overflow-hidden inline-block">
                      <motion.span
                        initial={{ y: '100%', rotate: 10 }}
                        whileInView={{ y: '0%', rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                        className="inline-block origin-bottom-left"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </div>
                <div className="flex text-gradient-multi pb-4">
                  {"BORDERS".split('').map((char, i) => (
                    <span key={i} className="overflow-hidden inline-block">
                      <motion.span
                        initial={{ y: '100%', rotate: -10 }}
                        whileInView={{ y: '0%', rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                        className="inline-block origin-bottom-right"
                      >
                        {char}
                      </motion.span>
                    </span>
                  ))}
                </div>
              </h2>
              
              {/* Scroll Reveal Text */}
              <div ref={textRef} className="font-serif italic text-3xl md:text-5xl leading-relaxed max-w-3xl flex flex-wrap gap-x-3 gap-y-2 mt-8">
                {words.map((word, i) => {
                  const start = i / words.length;
                  const end = start + (1 / words.length);
                  const opacity = useTransform(textScrollProgress, [start, end], [0.1, 1]);
                  const color = useTransform(textScrollProgress, [start, end], ['rgba(255,255,255,0.1)', 'rgba(255,255,255,1)']);
                  const y = useTransform(textScrollProgress, [start, end], [20, 0]);
                  
                  return (
                    <motion.span key={i} style={{ opacity, color, y }} className="transition-colors duration-200 inline-block">
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            </div>

            {/* Technical Grid for Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
                    <Droplets className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-cyan">MY VIBE</span>
                </div>
                <p className="font-mono text-[14px] uppercase tracking-widest leading-relaxed opacity-60">
                  I love creativity and innovation, and I adore exploring and discovering new fields of everything.
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
                    <Zap className="w-5 h-5 text-magenta" />
                  </div>
                  <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-magenta">MY ENERGY</span>
                </div>
                <p className="font-mono text-[14px] uppercase tracking-widest leading-relaxed opacity-60">
                  I'm a very active teen, always looking forward for new experiences and environments, and I like socializing
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-start">
              <Magnetic strength={0.3}>
                <Link 
                  to="/studio"
                  className="flex items-center gap-8 group"
                >
                  <div className="w-24 h-24 border border-violet rounded-full flex items-center justify-center group-hover:bg-violet transition-all duration-500 glow-magenta bg-white/5 backdrop-blur-md">
                    <Plus className="w-10 h-10 text-violet group-hover:text-white transition-colors group-hover:rotate-90 duration-500" />
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-mono text-[14px] uppercase tracking-[0.6em] text-violet group-hover:text-white transition-colors">DISCOVER STUDIO</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2">THE STUDIO / 001</span>
                  </div>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 pointer-events-none" />
    </section>
  );
}
