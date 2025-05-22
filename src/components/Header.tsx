
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#" className="text-lg font-display font-medium">Portfolio</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#projects" className="link-underline text-sm">Projects</a>
          <a href="#about" className="link-underline text-sm">About</a>
          <a href="#contact" className="link-underline text-sm">Contact</a>
        </nav>
        <button className="md:hidden">Menu</button>
      </div>
    </header>
  );
};

export default Header;
