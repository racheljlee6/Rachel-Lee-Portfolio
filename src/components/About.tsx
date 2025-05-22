
import React from 'react';

const skills = [
  "User Experience Design",
  "Interface Design",
  "Design Systems",
  "User Research",
  "Prototyping",
  "Usability Testing",
  "Figma & Adobe Creative Suite",
  "HTML/CSS/JavaScript",
  "Responsive Design",
  "Accessibility"
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-accent py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
            <div className="space-y-4 text-lg">
              <p>
                I'm a product designer with over 5 years of experience creating digital products
                that are both beautiful and functional. My approach combines user-centered design
                principles with strategic thinking to deliver solutions that meet business goals
                and user needs.
              </p>
              <p>
                Previously, I've worked with startups and established companies to design
                experiences that delight users while driving key metrics. I'm passionate about
                creating inclusive designs that work for everyone.
              </p>
              <p>
                When I'm not designing, you can find me hiking, reading design books, or
                experimenting with new creative tools.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-background rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl mb-6">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium">Senior Product Designer</h4>
                  <p className="text-muted-foreground">Design Studio Inc. · 2021-Present</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">UX/UI Designer</h4>
                  <p className="text-muted-foreground">Tech Company · 2018-2021</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Product Design Intern</h4>
                  <p className="text-muted-foreground">Startup Co. · 2017-2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
