
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
        "group project-card block rounded-2xl overflow-hidden relative", 
        featured ? "col-span-2" : "",
        className
      )}
    >
      <div className="overflow-hidden relative aspect-[16/10]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 bg-gradient-to-t from-background/90 to-background/0 absolute bottom-0 left-0 right-0">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 bg-accent rounded-full text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-medium text-white group-hover:text-primary-foreground transition-colors">{title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{description}</p>
          </div>
          <div className="bg-primary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
