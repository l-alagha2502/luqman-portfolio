import { motion } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Plus, Zap, Sparkles } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import { useImageModal } from '../context/ImageContext';

const archiveItems = [
  {
    id: '20',
    title: 'Luqman Portfolio',
    year: '2025',
    color: 'text-cyan',
    glow: 'glow-cyan',
    image: '/luqman-portfolio.png',
    tags: ['WEB', 'PORTFOLIO'],
    link: '/',
    alwaysShowIcon: true
  },
  {
    id: '15',
    title: 'Vast Website',
    year: '2025',
    color: 'text-accent',
    glow: 'glow-accent',
    image: '/Vast-Website.png',
    tags: ['WEB', 'VAST'],
    link: 'https://vastx.app/',
    alwaysShowIcon: true
  },
  {
    id: '16',
    title: 'Link-in-bio Website',
    year: '2025',
    color: 'text-cyan',
    glow: 'glow-cyan',
    image: '/link-in-bio.png',
    tags: ['WEB', 'BIO'],
    link: 'https://l-alagha2502.github.io/luqman.github.io/'
  },
  {
    id: '17',
    title: 'Biolink',
    year: '2025',
    color: 'text-magenta',
    glow: 'glow-magenta',
    image: '/biolink.png',
    tags: ['WEB', 'LINK'],
    link: 'https://lqmn-lol.vercel.app/'
  },
  {
    id: '18',
    title: 'Link-in-bio for A',
    year: '2025',
    color: 'text-lime',
    glow: 'glow-accent',
    image: '/link-in-bio-a.png',
    tags: ['FRIEND', 'BIO'],
    link: 'https://vastx.app/a/'
  },
  {
    id: '19',
    title: 'Link-in-bio for Me',
    year: '2025',
    color: 'text-violet',
    glow: 'glow-magenta',
    image: '/link-in-bio-me.png',
    tags: ['PERSONAL', 'BIO'],
    link: 'https://vastx.app/l/'
  },
  {
    id: '01',
    title: 'AETHER Banner Chrome',
    year: '2025',
    color: 'text-cyan',
    glow: 'glow-cyan',
    image: '/AETHER-Banner-Chrome-Edition.png',
    tags: ['DESIGN', 'CHROME']
  },
  {
    id: '02',
    title: 'AETHER Banner',
    year: '2025',
    color: 'text-magenta',
    glow: 'glow-magenta',
    image: '/AETHER-Banner.png',
    tags: ['DESIGN', 'BANNER']
  },
  {
    id: '03',
    title: 'AETHER Logo DFE',
    year: '2025',
    color: 'text-lime',
    glow: 'glow-accent',
    image: '/AETHER-Logo-DFE.png',
    tags: ['LOGO', 'BRANDING']
  },
  {
    id: '04',
    title: 'Bold Dreams',
    year: '2024',
    color: 'text-violet',
    glow: 'glow-magenta',
    image: '/Bold-Dreams.png',
    tags: ['ART', '3D']
  },
  {
    id: '05',
    title: 'Fashion AETHER Logo',
    year: '2024',
    color: 'text-emerald',
    glow: 'glow-cyan',
    image: '/Fashion-AETHER-Logo.png',
    tags: ['FASHION', 'LOGO']
  },
  {
    id: '06',
    title: 'Fasicm AETHER Logo',
    year: '2024',
    color: 'text-accent',
    glow: 'glow-accent',
    image: '/Fasicm-AETHER-Logo.png',
    tags: ['LOGO', 'DESIGN']
  },
  {
    id: '07',
    title: 'Glint Daze',
    year: '2024',
    color: 'text-cyan',
    glow: 'glow-cyan',
    image: '/Glint-Daze.png',
    tags: ['ART', 'GLINT']
  },
  {
    id: '08',
    title: 'Luqman.page Logo',
    year: '2024',
    color: 'text-magenta',
    glow: 'glow-magenta',
    image: '/Luqman.page-logo.png',
    tags: ['PERSONAL', 'LOGO']
  },
  {
    id: '09',
    title: 'Makkah Towers',
    year: '2024',
    color: 'text-lime',
    glow: 'glow-accent',
    image: '/Makkah-Towers.png',
    tags: ['ARCHITECTURE', 'DESIGN']
  },
  {
    id: '10',
    title: 'Vast BTC',
    year: '2024',
    color: 'text-violet',
    glow: 'glow-magenta',
    image: '/Vast-BTC.png',
    tags: ['CRYPTO', 'DESIGN']
  },
  {
    id: '11',
    title: 'Vast Cheesy',
    year: '2024',
    color: 'text-emerald',
    glow: 'glow-cyan',
    image: '/Vast-Cheesy.png',
    tags: ['FUN', 'DESIGN']
  },
  {
    id: '12',
    title: 'Yuji DOWT Background',
    year: '2024',
    color: 'text-accent',
    glow: 'glow-accent',
    image: '/Yuji-DOWT-Background.png',
    tags: ['BACKGROUND', 'ART']
  },
  {
    id: '13',
    title: 'Flowy',
    year: '2024',
    color: 'text-cyan',
    glow: 'glow-cyan',
    image: '/Flowy.png',
    tags: ['DESIGN', 'FLOW']
  },
  {
    id: '14',
    title: 'Stellar',
    year: '2024',
    color: 'text-magenta',
    glow: 'glow-magenta',
    image: '/Stellar.png',
    tags: ['SPACE', 'ART']
  }
];

function ArchiveCard({ item, index }: { item: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { openImage } = useImageModal();

  const handleClick = () => {
    if (item.link) {
      window.open(item.link, '_blank');
    } else {
      openImage(item.image, item.title);
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className="relative group cursor-pointer mb-4"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <div className={`relative border border-white/10 glass rounded-3xl overflow-hidden group-hover:border-${item.color.split('-')[1]} transition-colors duration-500`}>
        <img 
          src={item.image} 
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 pointer-events-none" />
        
        {/* External Link Icon for redirects */}
        {item.link && (
          <div className={`absolute bottom-6 right-6 z-20 transition-all duration-500 ${item.alwaysShowIcon ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}>
            <div className={`w-12 h-12 rounded-full glass flex items-center justify-center border border-white/20 glow-${item.color.split('-')[1]} bg-accent/20`}>
              <ExternalLink className={`w-6 h-6 ${item.color}`} />
            </div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
            <span className={`font-mono text-[10px] uppercase tracking-[0.4em] ${item.color}`}>{item.year}</span>
            <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center glass group-hover:${item.glow}`}>
              <Zap className={`w-4 h-4 ${item.color}`} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={`font-display font-bold text-2xl text-white tracking-tighter group-hover:${item.color} transition-colors`} data-text={item.title}>
              {item.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.tags.map(tag => (
                <span key={tag} className="font-mono text-[8px] uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Archive() {
  return (
    <div className="relative bg-transparent min-h-screen pt-32 pb-32 px-6 md:px-20 overflow-hidden">
      {/* Background Kinetic Text */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none z-0 mix-blend-overlay">
        <div className="font-display font-black text-[40vw] leading-none text-outline rotate-90">
          ARCHIVE
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mix-blend-difference">
        <div className="flex flex-col gap-12 mb-32">
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] uppercase tracking-[1em] text-accent animate-pulse">Vault / 001</span>
            <div className="h-[1px] flex-1 bg-white/20" />
          </div>
          <h1 className="font-serif italic text-6xl md:text-[10vw] text-white leading-none tracking-tighter flex flex-col">
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
              {"ARCHIVE".split('').map((char, i) => (
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
          <p className="font-mono text-[14px] uppercase tracking-widest leading-relaxed opacity-80 max-w-2xl text-white">
            A collection of digital fragments, failed experiments, and transmuted ideas. 
            The history of our digital alchemy.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {archiveItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <ArchiveCard item={item} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-12 mt-40">
          <div className="h-40 w-[1px] bg-gradient-to-b from-white/20 to-accent" />
          <Magnetic strength={0.3}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-8 group"
            >
              <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500 glow-accent bg-white/5 backdrop-blur-md">
                <Plus className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[14px] uppercase tracking-[0.6em] text-accent">New Experiment</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 text-white">The Void / 001</span>
              </div>
            </motion.button>
          </Magnetic>
        </div>
      </div>

      {/* Footer Space */}
      <footer className="mt-40 text-center mix-blend-difference">
        <span className="font-mono text-[10px] uppercase tracking-[1em] opacity-40 text-white">
          © 2026 LUQMAN ALAGHA / ALL RIGHTS RESERVED
        </span>
      </footer>
    </div>
  );
}
