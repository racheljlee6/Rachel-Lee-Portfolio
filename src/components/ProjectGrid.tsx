
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Finance App Redesign",
    description: "Simplified dashboard for personal finance management",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format",
    tags: ["UX Design", "UI Design", "Research"],
    link: "#",
    featured: true
  },
  {
    title: "E-commerce Experience",
    description: "End-to-end shopping experience with focus on accessibility",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format",
    tags: ["UX Design", "Accessibility", "Prototyping"],
    link: "#"
  },
  {
    title: "Healthcare Portal",
    description: "Patient-focused interface for medical appointment scheduling",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1200&auto=format",
    tags: ["UX Research", "UI Design", "User Testing"],
    link: "#"
  },
];

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
              featured={project.featured}
              className={`animate-fade-in [animation-delay:${index * 150}ms]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
