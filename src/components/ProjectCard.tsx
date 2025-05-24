import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  extendedDescription?: string;
  imageUrl: string;
  link: string;
  tags: string[];
  className?: string;
  featured?: boolean;
  year?: string;
  role?: string;
  scope?: string;
  media?: { name: string; url: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  extendedDescription,
  imageUrl,
  link,
  tags,
  className,
  featured = false,
  year,
  role,
  scope,
  media,
}) => {
  // Check if the link is internal or external
  const isInternalLink = link.startsWith('/');
  
  const content = (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      <div className="w-full lg:w-5/12 pr-8">
        <h3 className="text-2xl md:text-3xl font-medium text-foreground group-hover:text-primary transition-colors mb-6">
          {title}
          <ArrowUpRight className="inline-block ml-2 w-5 h-5 transform translate-y-0 group-hover:translate-y-[-2px] transition-transform" />
        </h3>
        
        <p className="text-foreground mt-2 mb-8 text-base">{description}</p>
        
        {extendedDescription && (
          <p className="text-muted-foreground mb-8 text-base">{extendedDescription}</p>
        )}
        
        {(year || role || scope || media) && (
          <div className="mt-6 border-t border-border pt-6">
            <table className="w-full text-sm">
              <tbody>
                {year && (
                  <tr>
                    <td className="pb-2 text-muted-foreground">Years</td>
                    <td className="pb-2">{year}</td>
                  </tr>
                )}
                {role && (
                  <tr>
                    <td className="pb-2 text-muted-foreground">Role</td>
                    <td className="pb-2">{role}</td>
                  </tr>
                )}
                {scope && (
                  <tr>
                    <td className="pb-2 text-muted-foreground">Scope</td>
                    <td className="pb-2">{scope}</td>
                  </tr>
                )}
                {media && media.length > 0 && (
                  <tr>
                    <td className="pb-2 text-muted-foreground">Media</td>
                    <td className="pb-2">
                      {media.map((item, index) => (
                        <span key={index}>
                          <a href={item.url} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            {item.name} ↗
                          </a>
                          {index < media.length - 1 ? ' ' : ''}
                        </span>
                      ))}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      <div className="w-full lg:w-7/12 overflow-hidden rounded-lg">
        <div className="overflow-hidden relative aspect-[16/10]">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </div>
  );
  
  // Render Link for internal navigation, or anchor for external links
  return isInternalLink ? (
    <Link 
      to={link}
      className={cn(
        "group project-card block relative overflow-hidden py-20 border-t border-border", 
        className
      )}
    >
      {content}
    </Link>
  ) : (
    <a 
      href={link}
      className={cn(
        "group project-card block relative overflow-hidden py-20 border-t border-border", 
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
};

export default ProjectCard;
