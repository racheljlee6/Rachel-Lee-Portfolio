import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

// Array of rotating texts
const rotatingTexts = [
  "a designer",
  "a problem solver",
  "a creative thinker",
  "a UX enthusiast"
];

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isWaitingAfterTyping, setIsWaitingAfterTyping] = useState(false);
  
  // References to keep track of text animation state
  const textRef = useRef({
    currentTextIndex,
    displayText,
    isDeleting,
    typingSpeed,
    isWaitingAfterTyping
  });
  
  textRef.current = {
    currentTextIndex,
    displayText,
    isDeleting,
    typingSpeed,
    isWaitingAfterTyping
  };
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const type = () => {
      const { currentTextIndex, displayText, isDeleting, isWaitingAfterTyping } = textRef.current;
      const fullText = rotatingTexts[currentTextIndex];
      
      // Calculate new typing speed
      let newSpeed = textRef.current.typingSpeed;
      
      if (isWaitingAfterTyping) {
        // Just wait, don't change the text
        setIsWaitingAfterTyping(false);
        setIsDeleting(true);
        newSpeed = 50; // Speed for deletion
      } else if (isDeleting) {
        // Faster when deleting
        setDisplayText(fullText.substring(0, displayText.length - 1));
        newSpeed = 50;
      } else {
        // Normal speed when typing
        setDisplayText(fullText.substring(0, displayText.length + 1));
        newSpeed = 150;
      }
      
      setTypingSpeed(newSpeed);
      
      // Check if completed typing the full text
      if (!isDeleting && !isWaitingAfterTyping && displayText === fullText) {
        // Pause at the end of typing
        setIsWaitingAfterTyping(true);
        newSpeed = 1500; // Pause for 1.5 seconds with the full text visible
      } 
      // Check if finished deleting
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypingSpeed(500);
        // Move to next text
        setCurrentTextIndex((currentTextIndex + 1) % rotatingTexts.length);
      }
      
      timer = setTimeout(type, newSpeed);
    };
    
    timer = setTimeout(type, 1000); // Initial delay
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-52 pb-10">
      <div className="max-w-4xl mx-auto reveal-animation">
        <div className="flex flex-col gap-1 mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight">
            Hi! I'm Rachel
          </h1>
          <div className="h-[80px] md:h-[100px] lg:h-[120px] flex items-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-primary/80 leading-tight">
              {displayText}<span className="cursor-pulse">|</span>
            </h2>
          </div>
        </div>
        
        <p className="text-xl md:text-2xl max-w-2xl">
          Currently a <span className="font-medium text-foreground">Product Designer</span> at <a href="#" className="font-medium text-foreground underline underline-offset-4">Commonwealth Bank</a>. 
          Previously at <a href="#" className="font-medium text-foreground underline underline-offset-4">Zendesk</a> and <a href="#" className="font-medium text-foreground underline underline-offset-4">Accenture</a>.
        </p>
      </div>
      
      <div className="flex justify-center animate-bounce">
        <a href="#projects" className="p-2 rounded-full border border-border flex items-center justify-center">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
