import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-display mb-8">
          Thanks for stopping by, let's chat!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-semibold mb-2">CONTACT ME</h3>
            <p className="text-muted-foreground">
              <a href="mailto:racheljlee18@gmail.com" className="hover:text-primary transition-colors">racheljlee18@gmail.com</a>
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-2">LET'S CONNECT</h3>
            <p className="text-muted-foreground">
              <a href="https://www.linkedin.com/in/racheljlee6" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Linkedin</a> | 
              <a href="https://drive.google.com/file/d/1IKKIwXKu741UQdRhBmy9HZ7Y1Z_uca-5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors ml-1 mr-1">Resume</a>
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-sm text-muted-foreground">©2025 Rachel Lee</p>
          <p className="text-sm text-muted-foreground mt-1">Made with love, matcha and lots of iteration</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
