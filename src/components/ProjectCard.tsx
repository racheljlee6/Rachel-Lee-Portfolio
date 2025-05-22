
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  className?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  tags,
  className,
  featured = false
}) => {
  return (
    <a 
      href={link}
      className={cn(
        "group project-card block relative overflow-hidden", 
        className
      )}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-7/12 overflow-hidden rounded-xl">
          <div className="overflow-hidden relative aspect-[16/10]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        <div className="w-full md:w-5/12">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-3 py-1 bg-accent rounded-full text-accent-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary-foreground transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mt-2 mb-4 text-base">{description}</p>
          
          <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:text-primary-foreground transition-colors">
            <span>View Project</span>
            <div className="bg-primary rounded-full p-1 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform">
              <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
