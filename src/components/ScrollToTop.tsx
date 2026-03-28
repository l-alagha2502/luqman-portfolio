import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll immediately
    window.scrollTo(0, 0);
    
    // Scroll again after exit animation completes (0.5s)
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
