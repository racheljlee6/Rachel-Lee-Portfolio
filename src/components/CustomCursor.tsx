
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover detection for project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', handleHoverStart);
      card.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      projectCards.forEach(card => {
        card.removeEventListener('mouseenter', handleHoverStart);
        card.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
      style={{ 
        transition: 'transform 0.05s ease-out, width 0.2s, height 0.2s',
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div 
        className={`
          rounded-full bg-white/10 border border-white/30 backdrop-blur-sm
          transition-all duration-300 flex items-center justify-center
          ${isHovering ? 'w-20 h-20 -translate-x-10 -translate-y-10' : 'w-5 h-5 -translate-x-2.5 -translate-y-2.5'}
          ${isClicking ? 'scale-75' : 'scale-100'}
        `}
      >
        {isHovering && (
          <span className="text-xs text-white opacity-80">View</span>
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
