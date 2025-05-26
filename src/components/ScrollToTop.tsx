import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component automatically scrolls to the top of the page
// when navigating between routes and handles hash navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Small delay to ensure DOM has updated
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Special handling for the work section
          const firstProjectCard = element.querySelector('.project-card');
          
          if (firstProjectCard && id === 'work') {
            // Scroll to the first project card's top border
            const rect = firstProjectCard.getBoundingClientRect();
            const scrollTop = rect.top + window.pageYOffset - 80; // Add 80px space above the border
            
            window.scrollTo({
              top: scrollTop,
              behavior: 'smooth'
            });
          } else {
            // Default behavior for other sections
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    } else {
      // Otherwise scroll to top when the route changes
      window.scrollTo({
        top: 0,
        behavior: 'auto' // Instant scroll to top
      });
    }
  }, [pathname, hash]);

  // This component doesn't render anything
  return null;
};

export default ScrollToTop; 