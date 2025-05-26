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
    <section className="min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-24 pb-10">
      <div className="max-w-7xl mx-auto w-full reveal-animation">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Left Column - Intro */}
          <div className="flex flex-col md:col-span-6">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight">
                Hi! I'm Rachel
              </h1>
              <div className="h-[60px] md:h-[80px] lg:h-[100px] flex items-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-muted-foreground leading-tight">
                  {displayText}<span className="cursor-pulse">|</span>
                </h2>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl max-w-2xl mb-6">
              Currently a <span className="font-medium text-foreground">Product Designer</span> at <a href="#" className="font-medium text-muted-foreground">Commonwealth Bank</a>. 
              Previously at <a href="#" className="font-medium text-muted-foreground">Zendesk</a> and <a href="#" className="font-medium text-muted-foreground">Accenture</a>.
            </p>
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <div className="h-64 w-px bg-border"></div>
          </div>
          
          {/* Right Column - Image and About */}
          <div className="flex flex-col md:col-span-5">
            <div className="w-full aspect-square rounded-full overflow-hidden mb-6 max-w-[120px] mx-0">
              <img 
                src="/rachel-lee-photo.png" 
                alt="Rachel Lee"
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="space-y-4 text-left">
              <p className="text-lg text-muted-foreground">
                I'm driven by a simple belief: good design meets people where they are. I bring empathy, clarity, and curiosity to every challenge — translating complex business problems into intuitive, human-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center animate-bounce mt-12">
        <a href="#work" className="p-2 rounded-full border border-border flex items-center justify-center">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
