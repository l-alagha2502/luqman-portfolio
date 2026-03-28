import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Github, Globe, Zap, Send, Instagram, Phone, MessageSquare } from 'lucide-react';
import { useRef } from 'react';
import Magnetic from './Magnetic';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="contact" ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden py-20">
      <motion.div 
        style={{ opacity }}
        className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-end">
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-8">
              <div className="w-24 h-[1px] bg-accent" />
              <span className="font-mono text-[12px] uppercase tracking-[0.8em] text-accent">
                The Connection
              </span>
            </div>

            <h3 className="font-display text-6xl sm:text-8xl md:text-[10vw] uppercase leading-[0.8] tracking-tighter mix-blend-difference text-white flex flex-col">
              <div className="flex">
                {"READY TO".split('').map((char, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '100%', rotate: 10 }}
                      whileInView={{ y: '0%', rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                      className="inline-block origin-bottom-left"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  </span>
                ))}
              </div>
              <div className="flex text-gradient-multi italic font-serif pb-4">
                {"DISSOLVE".split('').map((char, i) => (
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
              <div className="flex">
                {"BOUNDARIES?".split('').map((char, i) => (
                  <span key={i} className="overflow-hidden inline-block">
                    <motion.span
                      initial={{ y: '100%', rotate: 10 }}
                      whileInView={{ y: '0%', rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                      className="inline-block origin-bottom-left"
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </div>
            </h3>

            <div className="flex flex-col gap-12">
              <p className="font-mono text-[16px] uppercase tracking-widest leading-relaxed text-white/60 max-w-lg mix-blend-difference">
                I'm always happy to connect and socialize, if you want anything feel free to contact me
              </p>

              <div className="flex flex-col gap-8">
                {[
                  { icon: Mail, label: "Email", value: "l.alagha2502@gmail.com", href: "mailto:l.alagha2502@gmail.com" },
                  { icon: Phone, label: "Phone Number", value: "+974 3382 0466", href: "tel:+97433820466" },
                  { icon: Zap, label: "Status", value: "Mostly Available", href: "#" }
                ].map((item, i) => (
                  <Magnetic key={i} strength={0.2}>
                    <motion.a
                      href={item.href}
                      target={item.href !== "#" ? "_blank" : undefined}
                      rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 30 }}
                      className="flex items-center gap-8 group inline-flex"
                    >
                      <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 bg-white/5 backdrop-blur-md">
                        <item.icon className="w-6 h-6 group-hover:text-void transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 group-hover:text-accent transition-colors">{item.label}</span>
                        <span className="font-display text-3xl uppercase tracking-tighter text-white">{item.value}</span>
                      </div>
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-24 lg:items-end">
            <div className="flex flex-wrap gap-8 w-full lg:max-w-md lg:justify-end">
              {/* Removed social icons grid since they are now in the main list */}
            </div>

            {/* Void Pulse Interaction Perk */}
            <div className="relative w-full lg:max-w-md flex flex-col gap-6">
              
              {/* Floating Coordinates Perk */}
              <div className="mt-12 font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 flex flex-col items-end gap-2 mix-blend-difference text-white">
                <span>LAT: 25.2854° N</span>
                <span>LNG: 51.5310° E</span>
                <span>ALT: 10M</span>
              </div>
            </div>

            <div className="flex flex-col lg:items-end gap-4 mt-20">
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] opacity-30 text-white">
                © 2026 LUQMAN ALAGHA
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.8em] opacity-30 text-white">
                MADE IN THE VOID
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </section>
  );
}
