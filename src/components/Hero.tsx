
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex items-center px-6 md:px-12 pt-20">
      <div className="max-w-4xl mx-auto reveal-animation">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
          Product Designer creating thoughtful digital experiences
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
          Focused on crafting intuitive interfaces and meaningful interactions that solve real user problems.
          Currently available for new opportunities.
        </p>
        <div className="mt-10 flex space-x-4">
          <a 
            href="#projects" 
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
