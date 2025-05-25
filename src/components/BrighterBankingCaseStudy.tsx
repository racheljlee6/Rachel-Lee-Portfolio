import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { projects } from './ProjectGrid';

const BrighterBankingCaseStudy: React.FC = () => {
  const project = projects.find(p => p.slug === "brighter-banking");
  
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
          
          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Project Overview</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg mb-6">{project.extendedDescription}</p>
              <p className="text-lg mb-6">The Brighter Banking Microservices project aimed to overhaul the bank's fragmented digital services into a cohesive, user-friendly ecosystem that enhanced the customer experience while streamlining internal operations.</p>
              <div className="bg-accent p-6 rounded-lg my-8">
                <h4 className="font-medium text-lg mb-2">Key Metrics</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30% improvement in task completion rates</li>
                  <li>42% reduction in customer support calls</li>
                  <li>25% increase in digital banking adoption</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Discovery & Research */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Discovery & Research</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Research Methodology</h3>
              <p className="text-lg mb-6">Our research combined quantitative analytics with qualitative insights to gain a holistic understanding of user needs:</p>
              <ul className="list-disc pl-6 text-lg mb-8">
                <li className="mb-2">12 in-depth user interviews with diverse customer segments</li>
                <li className="mb-2">Analysis of 10,000+ customer journey touchpoints</li>
                <li className="mb-2">Competitive analysis of 8 leading banking platforms</li>
                <li className="mb-2">Heuristic evaluation of existing microservices</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">User Friction</h4>
                  <p>Customers struggled with inconsistent experiences when moving between services, creating confusion and abandonment.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Mental Models</h4>
                  <p>Users organized their financial activities by goals rather than by product categories.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Technical Complexity</h4>
                  <p>Backend systems required significant translation to meet user expectations.</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Trust Indicators</h4>
                  <p>Security cues and transparency were critical to user comfort and engagement.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Problem Definition */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Problem Definition</h2>
            </div>
            <div className="md:col-span-8">
              <div className="bg-accent p-6 rounded-lg mb-8">
                <p className="text-lg font-medium italic">"How might we create a unified banking experience that simplifies complex financial tasks while maintaining security and compliance?"</p>
              </div>
              
              <h3 className="text-xl font-medium mb-4">Design Principles</h3>
              <ul className="list-disc pl-6 text-lg mb-8">
                <li className="mb-4"><span className="font-medium">Contextual Clarity:</span> Provide users with the right information at the right time</li>
                <li className="mb-4"><span className="font-medium">Progressive Disclosure:</span> Reveal complexity only as needed</li>
                <li className="mb-4"><span className="font-medium">Consistent Patterns:</span> Use familiar interactions across all services</li>
                <li className="mb-4"><span className="font-medium">Transparent Security:</span> Make safety visible without causing friction</li>
              </ul>
            </div>
          </div>
          
          {/* Design Process */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Design Process</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Information Architecture</h3>
              <p className="text-lg mb-6">I redesigned the service taxonomy to align with user mental models, creating a goal-based navigation system that bridged disparate services.</p>
              <div className="aspect-video bg-muted rounded-lg mb-10 flex items-center justify-center">
                <p className="text-muted-foreground">Information Architecture Diagram</p>
              </div>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Wireframing & Prototyping</h3>
              <p className="text-lg mb-6">Through iterative sketches and wireframes, I explored multiple approaches to integrating microservices into a cohesive experience.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Early Wireframes</p>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Refined Wireframes</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Usability Testing</h3>
              <p className="text-lg mb-6">I conducted moderated testing sessions with 8 participants to validate the design direction and identify areas for improvement.</p>
              <div className="bg-accent p-6 rounded-lg mb-8">
                <h4 className="font-medium mb-2">Key Findings</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users successfully completed 92% of critical tasks</li>
                  <li>Navigation between services showed significant improvement</li>
                  <li>Security indicators needed additional emphasis</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Solution */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Solution</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Core Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Unified Dashboard</h4>
                  <p>Centralized view of accounts with goal-based organization</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Seamless Transfers</h4>
                  <p>Simplified cross-service money movement with clear confirmation steps</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Contextual Help</h4>
                  <p>Just-in-time assistance based on user behavior and task complexity</p>
                </div>
                <div className="border border-border p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Security Timeline</h4>
                  <p>Transparent activity tracking with anomaly highlighting</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Final Design</h3>
              <p className="text-lg mb-6">The final solution integrated previously siloed services into a cohesive experience while respecting technical constraints and regulatory requirements.</p>
              <div className="aspect-video bg-muted rounded-lg mb-10 flex items-center justify-center">
                <p className="text-muted-foreground">Final Design Mockups</p>
              </div>
            </div>
          </div>
          
          {/* Outcomes & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Outcomes & Impact</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Quantitative Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-accent p-4 rounded-lg text-center">
                  <p className="text-3xl font-medium mb-1">30%</p>
                  <p className="text-sm text-muted-foreground">Increase in user satisfaction</p>
                </div>
                <div className="bg-accent p-4 rounded-lg text-center">
                  <p className="text-3xl font-medium mb-1">42%</p>
                  <p className="text-sm text-muted-foreground">Reduction in support tickets</p>
                </div>
                <div className="bg-accent p-4 rounded-lg text-center">
                  <p className="text-3xl font-medium mb-1">25%</p>
                  <p className="text-sm text-muted-foreground">Increase in digital adoption</p>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Stakeholder Feedback</h3>
              <div className="border-l-4 border-primary pl-4 italic mb-8">
                <p className="text-lg mb-2">"This redesign has transformed how our customers interact with our services. The integration is seamless and has significantly reduced friction points."</p>
                <p className="text-base text-muted-foreground">— VP of Digital Banking</p>
              </div>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Business Impact</h3>
              <p className="text-lg mb-6">The project not only improved the customer experience but also delivered significant business value:</p>
              <ul className="list-disc pl-6 text-lg">
                <li className="mb-2">Reduced development costs through standardized components</li>
                <li className="mb-2">Increased cross-selling opportunities through contextual recommendations</li>
                <li className="mb-2">Improved regulatory compliance with transparent data handling</li>
              </ul>
            </div>
          </div>
          
          {/* Reflections & Learnings */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-display mb-4">Reflections & Learnings</h2>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xl font-medium mb-4">Challenges Overcome</h3>
              <p className="text-lg mb-6">The project presented several significant challenges:</p>
              <ul className="list-disc pl-6 text-lg mb-8">
                <li className="mb-2">Balancing technical legacy constraints with modern UX expectations</li>
                <li className="mb-2">Navigating complex regulatory requirements while maintaining simplicity</li>
                <li className="mb-2">Aligning multiple stakeholders with different priorities</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-4 mt-10">Key Takeaways</h3>
              <p className="text-lg mb-6">This project reinforced several important lessons:</p>
              <ul className="list-disc pl-6 text-lg">
                <li className="mb-2">Early alignment on design principles creates decision-making efficiency</li>
                <li className="mb-2">Continuous user validation prevents assumption-based design decisions</li>
                <li className="mb-2">Cross-functional collaboration is essential for successful microservices integration</li>
              </ul>
            </div>
          </div>
          
          {/* Next project */}
          <div className="mt-24 pt-8 border-t border-border">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Next Project</h3>
            <Link to={`/work/finance-app-redesign`} className="group">
              <h2 className="text-2xl md:text-3xl font-display group-hover:text-primary transition-colors">
                Finance App Redesign
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

export default BrighterBankingCaseStudy; 