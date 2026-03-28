import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Archive from './pages/Archive';
import ContactPage from './pages/ContactPage';
import Scene from './components/Scene';
import ScrollToTop from './components/ScrollToTop';
import { ImageProvider } from './context/ImageContext';

function AppContent() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 80);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        (target.closest && (target.closest('button') !== null || target.closest('a') !== null))
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-void flex flex-col items-center justify-center z-[10000] px-10">
        <div className="w-full max-w-md relative z-10">
          <div className="flex justify-between mb-4 font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            <span>INITIATING</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="bg-void text-white selection:bg-accent selection:text-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[999] mix-blend-difference"
        animate={{
          x: mousePos.x - 8,
          y: mousePos.y - 8,
          scale: isHovering ? 4 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-accent rounded-full pointer-events-none z-[998] mix-blend-difference"
        animate={{
          x: mousePos.x - 24,
          y: mousePos.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.8 }}
      />

      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
        <div className="absolute inset-0 grid-lines opacity-10" />
        <div className="absolute inset-0 noise opacity-30" />
      </div>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Page Transition Overlay */}
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} className="relative z-10">
          
          {/* Simple Fade Transition */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] pointer-events-none bg-void"
          />

          {/* Page Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <ImageProvider>
        <ScrollToTop />
        <AppContent />
      </ImageProvider>
    </Router>
  );
}
