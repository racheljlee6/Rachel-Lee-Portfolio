import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { projects } from './ProjectGrid';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Link to="/" className="text-primary hover:underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to work
          </Link>
          
          {/* Hero section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">{project.description}</p>
          </div>
          
          {/* Project info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 border-y border-border py-8">
            {project.year && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Year</h3>
                <p className="text-base">{project.year}</p>
              </div>
            )}
            
            {project.role && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Role</h3>
                <p className="text-base">{project.role}</p>
              </div>
            )}
            
            {project.scope && (
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Scope</h3>
                <p className="text-base">{project.scope}</p>
              </div>
            )}
          </div>
          
          {/* Hero image */}
          <div className="w-full aspect-video mb-16 overflow-hidden rounded-lg">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Project content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Overview</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg mb-6">{project.extendedDescription}</p>
              <p className="text-lg">This case study showcases my work on the {project.title} project. During this process, I focused on delivering solutions that aligned with both user needs and business objectives.</p>
            </div>
          </div>
          
          {/* Process section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Process</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Problem Definition</h3>
              <p className="text-lg mb-6">The challenge was to create a solution that addressed key user pain points while achieving specific business outcomes.</p>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Research & Discovery</h3>
              <p className="text-lg mb-6">Through user interviews and market analysis, we uncovered critical insights that informed our design direction.</p>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Ideation & Design</h3>
              <p className="text-lg mb-6">I created multiple design concepts, refining them through feedback and iteration to arrive at the optimal solution.</p>
            </div>
          </div>
          
          {/* Results section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Results</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg mb-6">The implemented solution resulted in significant improvements in user engagement and business metrics.</p>
              <ul className="list-disc pl-6 text-lg">
                <li className="mb-2">Improved user experience and satisfaction</li>
                <li className="mb-2">Increased conversion rates</li>
                <li className="mb-2">Enhanced system efficiency</li>
              </ul>
            </div>
          </div>
          
          {/* Next project */}
          <div className="mt-24 pt-8 border-t border-border">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Next Project</h3>
            <Link to={`/work/${getNextProject(slug)}`} className="group">
              <h2 className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors">
                {getNextProjectTitle(slug)}
                <ArrowLeft className="ml-2 rotate-180 inline-block transition-transform group-hover:translate-x-1" />
              </h2>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper functions to get next project
const getNextProject = (currentSlug: string) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0].slug;
  }
  return projects[currentIndex + 1].slug;
};

const getNextProjectTitle = (currentSlug: string) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projects.length - 1) {
    return projects[0].title;
  }
  return projects[currentIndex + 1].title;
};

export default ProjectDetail; 