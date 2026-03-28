import { motion } from 'motion/react';
import { Mail, Github, Globe, Zap, Send, Instagram, Phone, MessageSquare } from 'lucide-react';
import Magnetic from '../components/Magnetic';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-[120rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter text-white">
            Let's Connect
          </h1>
          <p className="font-mono text-[16px] uppercase tracking-widest leading-relaxed text-white/60 max-w-2xl">
            I'm always happy to connect and socialize, if you want anything feel free to contact me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-12">
          <div className="flex flex-col gap-8">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.4em] text-accent">Socials & Contact</h2>
            {[
              { icon: Instagram, label: "Instagram", value: "@pwyv.8", href: "https://www.instagram.com/pwyv.8/" },
              { icon: Github, label: "Github", value: "l-alagha2502", href: "https://github.com/l-alagha2502" },
              { icon: Mail, label: "Email", value: "l.alagha2502@gmail.com", href: "mailto:l.alagha2502@gmail.com" },
              { icon: Phone, label: "Phone Number", value: "+974 3382 0466", href: "tel:+97433820466" },
              { icon: MessageSquare, label: "Discord", value: "x.vst", href: "#" },
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

          <div className="flex flex-col gap-12">
            <h2 className="font-mono text-[12px] uppercase tracking-[0.4em] text-accent">Servers</h2>
            <div className="flex flex-col gap-6">
              <Magnetic strength={0.2}>
                <motion.a 
                  href="https://discord.com/invite/CcEFeHw9MN"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative z-10 px-12 py-10 border border-white/20 rounded-[3rem] font-display text-3xl uppercase tracking-tighter hover:border-magenta hover:bg-magenta/10 transition-all overflow-hidden group bg-white/5 backdrop-blur-md flex items-center justify-center"
                >
                  <span className="relative z-10 group-hover:text-magenta transition-colors flex items-center justify-center gap-6 text-white mix-blend-difference text-center">
                    Join the Vast Server
                    <Send className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 to-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <motion.a 
                  href="https://discord.com/invite/cy3t9tQbMT"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative z-10 px-12 py-10 border border-white/20 rounded-[3rem] font-display text-3xl uppercase tracking-tighter hover:border-magenta hover:bg-magenta/10 transition-all overflow-hidden group bg-white/5 backdrop-blur-md flex items-center justify-center"
                >
                  <span className="relative z-10 group-hover:text-magenta transition-colors flex items-center justify-center gap-6 text-white mix-blend-difference text-center">
                    Join My Friends Server
                    <Send className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 to-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.a>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
