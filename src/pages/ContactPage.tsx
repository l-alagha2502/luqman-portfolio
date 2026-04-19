import { motion } from 'motion/react';
import { Mail, Github, Globe, Zap, Send, Instagram, Phone, MessageSquare } from 'lucide-react';
import Magnetic from '../components/Magnetic';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
  </svg>
);

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
              { icon: Phone, label: "Phone Number", value: "+974 3382 0466", href: "https://wa.me/33820466" },
              { icon: DiscordIcon, label: "Discord", value: "x.vst", href: "https://discord.com/channels/@me" },
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
