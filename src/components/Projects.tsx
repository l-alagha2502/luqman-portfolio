import { motion } from 'motion/react';
import { Plus, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';
import { Link } from 'react-router-dom';
import { useImageModal } from '../context/ImageContext';

const projects = [
  {
    id: '01',
    title: "FLOWY'S DAY",
    category: 'Experimental / 0001',
    image: '/Flowy.png',
    description: 'A minimalist & experimental artwork featuring Flowy',
    tags: ['React', 'Motion'],
    color: 'cyan'
  },
  {
    id: '02',
    title: 'VAST WEBSITE',
    category: 'WEB DEV / 002',
    image: '/Vast-Website.png',
    description: 'An immersive beautiful website I made for my organization, Vast',
    tags: ['Next.js', 'Tailwind'],
    color: 'magenta',
    hasRedirect: true,
    link: 'https://vastx.app/'
  },
  {
    id: '03',
    title: 'LUQMAN PORTFOLIO',
    category: 'WEB DEV / 003',
    image: '/luqman-portfolio.png',
    description: 'A Cool protfolio website for me, Its this website',
    tags: ['React', 'Tailwind'],
    color: 'cyan',
    hasRedirect: true,
    link: '/'
  },
  {
    id: '04',
    title: 'BOLD DREAMS',
    category: 'DreamWave / 004',
    image: '/Bold-Dreams.png',
    description: 'One of my first and best graphic design project as I prefer it over all my other graphic design projects',
    tags: ['Three.js', 'GLSL'],
    color: 'lime'
  }
];

function ProjectCard({ project }: { project: any }) {
  const { openImage } = useImageModal();

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      openImage(project.image, project.title);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col gap-6 group w-full cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-${project.color}/10 group-hover:shadow-${project.color}/30 transition-shadow duration-700 glass`}>
        <div className="relative w-full flex items-center justify-center z-10">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 z-20 pointer-events-none" />
        {project.hasRedirect && (
          <div className="absolute bottom-6 left-6 z-30 bg-void/50 backdrop-blur-md p-3 rounded-full border border-white/10 group-hover:bg-accent transition-colors duration-500">
            <ExternalLink className="w-5 h-5 text-white" />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className={`font-display font-black text-3xl md:text-4xl text-white tracking-tighter group-hover:text-${project.color} transition-colors duration-500`}>
            {project.title}
          </h3>
          <span className={`font-mono text-[10px] uppercase tracking-[0.4em] text-${project.color}`}>{project.category}</span>
        </div>
        <p className="font-mono text-[12px] uppercase tracking-widest opacity-60">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="works" className="relative min-h-screen py-32 px-6 md:px-20 bg-transparent z-10">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:gap-24">
            {/* Title Section */}
            <div className="flex flex-col justify-start pt-12">
              <div className="flex items-center gap-6 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.6em] text-accent">Archive / 001</span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              <h2 className="font-display font-black text-5xl sm:text-6xl md:text-[8vw] text-white leading-[0.8] tracking-tighter">
                SELECTED <br /><span className="text-gradient-multi">WORKS</span>
              </h2>
            </div>

            {/* Bold Dreams */}
            <ProjectCard project={projects[3]} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:gap-24">
            {/* Flowy's Day */}
            <ProjectCard project={projects[0]} />
            
            {/* Vast Website */}
            <ProjectCard project={projects[1]} />

            {/* Luqman Portfolio */}
            <ProjectCard project={projects[2]} />
          </div>
        </div>

        {/* See all works footer */}
        <div className="mt-32 flex items-center w-full">
          <div className="h-[1px] flex-1 bg-white/20" />
          <Magnetic strength={0.3}>
            <Link to="/archive" className="flex items-center gap-6 group pl-8">
              <div className="flex flex-col items-end text-right">
                <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-white group-hover:text-accent transition-colors">See all works</span>
                <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-1">The Archive / 001</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Plus className="w-6 h-6 text-white" />
              </div>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
