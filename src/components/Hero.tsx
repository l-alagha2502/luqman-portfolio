import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100vh] flex flex-col justify-center pb-32 md:pb-48 bg-transparent overflow-hidden"
    >
      {/* Main Content Container */}
      <motion.div 
        style={{ y, opacity }}
        className="max-w-[120rem] mx-auto w-full px-4 sm:px-6 md:px-12 relative z-10 pointer-events-none pt-24 md:pt-32"
      >
        <div className="flex flex-col items-center text-center gap-2 mix-blend-difference">
          <div className="relative w-full flex flex-col items-center">
            <h1 
              className="font-serif italic font-light text-[16vw] md:text-[14vw] lg:text-[12vw] leading-tight tracking-tighter text-white uppercase flex"
            >
              {"LUQMAN".split('').map((char, i) => (
                <span key={i} className="overflow-hidden inline-block pb-4 -mb-4">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.2, delay: 0.2 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>
            <h1 
              className="font-signature text-[20vw] md:text-[16vw] lg:text-[14vw] leading-none tracking-normal flex text-accent -mt-[10vw] md:-mt-[8vw] ml-[10vw] z-10"
            >
              {"Alagha".split('').map((char, i) => (
                <span key={i} className="overflow-hidden inline-block pb-8 -mb-8 pt-4 -mt-4">
                  <motion.span
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 1.2, delay: 0.4 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            className="mt-8 md:mt-12 flex flex-col items-center gap-6 px-4"
          >
            <p className="font-mono text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-widest text-white/50 max-w-xl leading-relaxed">
              Hi, I'm Luqman Alagha, a student with a love for creativity and development. I design graphics, vibe code, play sports, and develop new stuff.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
