import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-6 md:px-12 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              {/* Left Column - Image */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-6">
                  <img 
                    src="/rachel-lee-photo.png" 
                    alt="Rachel Lee"
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="md:col-span-8 lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight">
                  <span className="font-serif italic font-light block md:inline relative">
                    Hello,
                    <span className="absolute -bottom-2 left-0 h-1 w-1/2 bg-primary rounded-full hidden md:block"></span>
                  </span>{" "}
                  <span className="font-display font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600">I'm Rachel</span>
                </h1>
                
                <div className="space-y-6 text-lg">
                  <p className="text-xl">
                    I'm a product designer with over 5 years of experience creating digital products
                    that are both beautiful and functional. My approach combines user-centered design
                    principles with strategic thinking to deliver solutions that meet business goals
                    and user needs.
                  </p>
                  
                  {/* 9-5 and 5-9 Side by Side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    {/* 9-5 Column */}
                    <div>
                      <h2 className="text-2xl font-medium mb-4">9-5</h2>
                      <p>
                        During my day job, I'm a Product Designer at Commonwealth Bank where I work on
                        creating intuitive financial experiences that help people manage their money better.
                        I collaborate closely with product managers, engineers, and other designers to
                        solve complex problems and deliver exceptional user experiences.
                      </p>
                    </div>
                    
                    {/* 5-9 Column */}
                    <div>
                      <h2 className="text-2xl font-medium mb-4">5-9</h2>
                      <p>
                        Outside of work, I enjoy experimenting with new design tools and techniques,
                        exploring nature through hiking and photography, and reading design books to
                        stay current with industry trends. I'm also passionate about creating inclusive
                        designs and occasionally volunteer my skills for non-profit organizations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Timeline */}
        <section className="px-6 md:px-12 py-16 bg-accent">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12">Experience</h2>
            
            <div className="space-y-16">
              {/* Commonwealth Bank */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Commonwealth Bank</h3>
                  <p className="text-muted-foreground">2021 — Present</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">Product Designer</h4>
                  <p className="mb-4">
                    Leading the design of digital banking experiences that help millions of customers
                    manage their finances. Creating intuitive interfaces for complex financial products
                    while maintaining compliance with regulatory requirements.
                  </p>
                  <p>
                    Notable projects include redesigning the payment experience, developing a consistent
                    design system for the mobile app, and conducting extensive user research to identify
                    pain points in the customer journey.
                  </p>
                </div>
              </div>
              
              {/* Zendesk */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Zendesk</h3>
                  <p className="text-muted-foreground">2019 — 2021</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">UX/UI Designer</h4>
                  <p className="mb-4">
                    Designed customer service and support tools that improved agent productivity and
                    customer satisfaction. Collaborated with cross-functional teams to create features
                    that simplified complex workflows.
                  </p>
                  <p>
                    Key contributions included redesigning the ticket management interface, improving
                    accessibility across the platform, and creating interactive prototypes for user testing.
                  </p>
                </div>
              </div>
              
              {/* Accenture */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Accenture</h3>
                  <p className="text-muted-foreground">2017 — 2019</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">Junior Designer</h4>
                  <p className="mb-4">
                    Worked with various enterprise clients to deliver digital transformation solutions.
                    Assisted in user research, created wireframes and visual designs, and supported
                    the implementation of design systems.
                  </p>
                  <p>
                    Gained experience working across multiple industries including finance, retail,
                    and healthcare, developing a versatile approach to solving design challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12">Education</h2>
            
            <div className="space-y-16">
              {/* Design School */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Sydney Design School</h3>
                  <p className="text-muted-foreground">2015 — 2017</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">Master of Design</h4>
                  <p>
                    Specialized in digital product design with a focus on user experience and interface
                    design. Completed a thesis on designing for financial inclusion, exploring how
                    thoughtful UX can make financial services more accessible to underserved populations.
                  </p>
                </div>
              </div>
              
              {/* University */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">University of Sydney</h3>
                  <p className="text-muted-foreground">2011 — 2015</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">Bachelor of Visual Communication</h4>
                  <p>
                    Gained a strong foundation in visual design principles, typography, and
                    communication theory. Completed coursework in graphic design, digital media,
                    and interactive design, with additional electives in psychology and human-computer
                    interaction.
                  </p>
                </div>
              </div>
              
              {/* Additional Education */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <h3 className="text-xl font-medium">Nielsen Norman Group</h3>
                  <p className="text-muted-foreground">2018</p>
                </div>
                <div className="md:col-span-9">
                  <h4 className="text-xl font-medium mb-4">UX Certification</h4>
                  <p>
                    Completed an intensive certification program in user experience research and design,
                    covering methods for understanding user needs, information architecture, interaction
                    design, and usability evaluation techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 