
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  tags,
  className
}) => {
  return (
    <a 
      href={link}
      className={cn(
        "group project-card block rounded-2xl overflow-hidden", 
        className
      )}
    >
      <div className="overflow-hidden relative aspect-[4/3]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 bg-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
