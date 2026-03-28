import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageContextType {
  openImage: (src: string, alt?: string) => void;
  closeImage: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageAlt] = useState('');

  const openImage = (src: string, alt: string = '') => {
    setImageSrc(src);
    setImageAlt(alt);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setTimeout(() => {
      setImageSrc('');
      setImageAlt('');
    }, 300);
  };

  return (
    <ImageContext.Provider value={{ openImage, closeImage }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-void/90 backdrop-blur-xl p-4 md:p-12 cursor-pointer"
          >
            <button 
              onClick={closeImage}
              className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={imageSrc}
              alt={imageAlt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </ImageContext.Provider>
  );
}

export function useImageModal() {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error('useImageModal must be used within an ImageProvider');
  }
  return context;
}
