
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-md">
              I'm currently available for freelance work and full-time opportunities. 
              If you'd like to chat about a project or just say hi, drop me a message.
            </p>
            
            <div className="mt-8">
              <a 
                href="mailto:hello@portfolio.com" 
                className="text-lg underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                hello@portfolio.com
              </a>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl mb-4">Connect</h3>
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  Twitter
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dribbble"
                >
                  Dribbble
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-accent p-8 rounded-2xl">
            <h3 className="text-xl mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
