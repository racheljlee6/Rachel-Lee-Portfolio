import React from 'react';
import ProjectCard from './ProjectCard';

export const projects = [
  {
    title: "Finance App Redesign",
    description: "Taking the job as the lead designer, I launched a completely revamped banking app with focus on simplicity and user control.",
    extendedDescription: "I led the design of payment and credit streams, introduced innovative money transfer flow and shaped the design system that became the foundation for future products.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format",
    tags: ["UX Design", "UI Design", "Research"],
    link: "/work/finance-app-redesign",
    slug: "finance-app-redesign",
    featured: false,
    year: "2022-2023",
    role: "Lead Product Designer",
    scope: "Product Strategy, UI/UX Design, Prototyping, Design System",
    media: [
      { name: "Case Study", url: "#" },
      { name: "Press Release", url: "#" }
    ]
  },
  {
    title: "E-commerce Experience",
    description: "I was a key contributor in transforming the company's flagship app with millions of daily users into a super app with integrated shopping experience.",
    extendedDescription: "After evaluating multiple concepts I came up with a solution that solved business goals, and I was also in charge of building an e-commerce platform from the ground up.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format",
    tags: ["UX Design", "Accessibility", "Prototyping"],
    link: "/work/ecommerce-experience",
    slug: "ecommerce-experience",
    year: "2021-2022",
    role: "Senior Product Designer",
    scope: "Product Strategy, UI/UX Design, Branding, Prototyping"
  },
  {
    title: "Healthcare Portal",
    description: "When COVID-19 first hit, we developed a patient-focused interface that simplified medical appointment scheduling and telemedicine.",
    extendedDescription: "The system helped connect patients with healthcare providers remotely, reducing the need for in-person visits during critical periods. It was ultimately adopted by several major healthcare networks.",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1200&auto=format",
    tags: ["UX Research", "UI Design", "User Testing"],
    link: "/work/healthcare-portal",
    slug: "healthcare-portal",
    year: "2020-2021",
    role: "Product Designer",
    scope: "Concept, UI/UX Design, Prototyping, User Research",
    media: [
      { name: "Featured Article", url: "#" }
    ]
  },
];

const ProjectGrid: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              extendedDescription={project.extendedDescription}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
              featured={project.featured || false}
              year={project.year}
              role={project.role}
              scope={project.scope}
              media={project.media}
              className={`project-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
