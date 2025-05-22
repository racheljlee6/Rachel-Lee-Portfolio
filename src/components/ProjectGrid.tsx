
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
  {
    title: "Productivity Tool",
    description: "Task management application with seamless cross-platform experience",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format",
    tags: ["Product Design", "Interaction", "Design System"],
    link: "#"
  },
];

const ProjectGrid: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'carousel'>('carousel');

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl">Selected Projects</h2>
          <div className="flex gap-2">
            <Button 
              variant={viewType === 'grid' ? "default" : "outline"} 
              onClick={() => setViewType('grid')}
              size="sm"
            >
              Grid
            </Button>
            <Button 
              variant={viewType === 'carousel' ? "default" : "outline"} 
              onClick={() => setViewType('carousel')}
              size="sm"
            >
              Carousel
            </Button>
          </div>
        </div>
        
        {viewType === 'grid' ? (
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
        ) : (
          <div className="mb-12">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                    <div className="p-1">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        tags={project.tags}
                        link={project.link}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-6 gap-2">
                <CarouselPrevious className="relative static translate-y-0" />
                <CarouselNext className="relative static translate-y-0" />
              </div>
            </Carousel>
          </div>
        )}
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects 
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
