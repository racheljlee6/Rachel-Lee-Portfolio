import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTheme } from './ThemeProvider';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const funLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileFunLinkRef = useRef<HTMLAnchorElement>(null);
  const confettiTimeoutRef = useRef<number | null>(null);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Custom scroll handler for smooth scrolling with correct offset
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the first project card
      const firstProjectCard = element.querySelector('.project-card');
      
      if (firstProjectCard && targetId === 'work') {
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
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Set up confetti effect for Fun link
  useEffect(() => {
    const desktopFunLink = funLinkRef.current;
    const mobileFunLink = mobileFunLinkRef.current;
    
    const triggerConfetti = (e: MouseEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.right) / 2;
      const y = (rect.top + rect.bottom) / 2;
      
      // First burst of confetti
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { 
          x: x / window.innerWidth, 
          y: y / window.innerHeight 
        },
        colors: ['#FFD700', '#FF69B4', '#00BFFF', '#32CD32', '#FF4500', '#8A2BE2'],
        disableForReducedMotion: true,
        scalar: 1.2
      });
      
      // Delayed second burst for a more impressive effect
      setTimeout(() => {
        confetti({
          particleCount: 30,
          spread: 70,
          origin: { 
            x: x / window.innerWidth, 
            y: y / window.innerHeight 
          },
          colors: ['#FF1493', '#00FFFF', '#FFFF00', '#7CFC00', '#FF6347'],
          disableForReducedMotion: true,
          startVelocity: 25,
          gravity: 0.8
        });
      }, 150);
    };
    
    const handleMouseEnter = (e: MouseEvent) => {
      // Clear any existing timeout
      if (confettiTimeoutRef.current) {
        window.clearTimeout(confettiTimeoutRef.current);
      }
      
      // Set a new timeout to trigger confetti after 0.5 seconds
      confettiTimeoutRef.current = window.setTimeout(() => {
        triggerConfetti(e);
      }, 500);
    };
    
    const handleMouseLeave = () => {
      // Clear the timeout if mouse leaves before 0.5 seconds
      if (confettiTimeoutRef.current) {
        window.clearTimeout(confettiTimeoutRef.current);
        confettiTimeoutRef.current = null;
      }
    };
    
    if (desktopFunLink) {
      desktopFunLink.addEventListener('mouseenter', handleMouseEnter);
      desktopFunLink.addEventListener('mouseleave', handleMouseLeave);
    }
    
    if (mobileFunLink) {
      mobileFunLink.addEventListener('click', triggerConfetti);
    }
    
    return () => {
      if (desktopFunLink) {
        desktopFunLink.removeEventListener('mouseenter', handleMouseEnter);
        desktopFunLink.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (mobileFunLink) {
        mobileFunLink.removeEventListener('click', triggerConfetti);
      }
      
      // Clear any remaining timeout on unmount
      if (confettiTimeoutRef.current) {
        window.clearTimeout(confettiTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-display font-medium">Rachel Lee</Link>
        <div className="flex items-center">
          <nav className="hidden md:flex space-x-8 mr-6">
            {isHomePage ? (
              <a 
                href="#work" 
                className="link-underline text-base"
                onClick={(e) => handleSmoothScroll(e, 'work')}
              >
                Work
              </a>
            ) : (
              <Link to="/#work" className="link-underline text-base">Work</Link>
            )}
            <a 
              href="#" 
              className="text-base fun-link" 
              ref={funLinkRef}
            >
              Fun
            </a>
            {isHomePage ? (
              <a 
                href="#about" 
                className="link-underline text-base"
                onClick={(e) => handleSmoothScroll(e, 'about')}
              >
                About
              </a>
            ) : (
              <Link to="/#about" className="link-underline text-base">About</Link>
            )}
            <a href="https://drive.google.com/file/d/1IKKIwXKu741UQdRhBmy9HZ7Y1Z_uca-5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="link-underline text-base">Resume</a>
          </nav>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-2 rounded-full border border-border hover:bg-accent/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <button 
            className="md:hidden ml-4 p-1.5 focus:outline-none border border-border rounded-md hover:bg-accent/50 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} strokeWidth={1.25} />
            ) : (
              <Menu size={20} strokeWidth={1.25} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[60px] z-40 bg-background/98 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        )}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="flex flex-col space-y-6 text-center">
            {isHomePage ? (
              <a 
                href="#work" 
                className="text-2xl hover:text-primary transition-colors" 
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleSmoothScroll(e, 'work');
                }}
              >
                Work
              </a>
            ) : (
              <Link 
                to="/#work" 
                className="text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
            )}
            <a 
              href="#" 
              className="text-2xl fun-link"
              onClick={() => setIsMenuOpen(false)}
              ref={mobileFunLinkRef}
            >
              Fun
            </a>
            {isHomePage ? (
              <a 
                href="#about" 
                className="text-2xl hover:text-primary transition-colors" 
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleSmoothScroll(e, 'about');
                }}
              >
                About
              </a>
            ) : (
              <Link 
                to="/#about" 
                className="text-2xl hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            )}
            <a 
              href="https://drive.google.com/file/d/1IKKIwXKu741UQdRhBmy9HZ7Y1Z_uca-5/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
