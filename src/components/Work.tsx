import React, { useState } from 'react';
import { motion } from 'framer-motion';
import calgaryjpImage from '../assets/images/calgaryjp.jpg';
import calgaryjpBrandingImage from '../assets/images/calgaryjp_logo.jpg';
import goseelearningImage from '../assets/images/goseelearning.jpg';
import goseelearningBrandingImage from '../assets/images/goseelearning_branding.jpg';
import bcBrandingImage from '../assets/images/bc_branding.jpg';
import fssLogoImage from '../assets/images/fss_logo.jpg';
import otherBrandingImage from '../assets/images/other_branding.jpg';
import naoyauedaImage from '../assets/images/naoyaueda.jpg';

// Define Project interface
interface Project {
  id: number;
  title: string;
  intro: string;
  description: string;
  role: string;
  category: string;
  image: string;
  tech: string[];
  link: string;
}

// Define props for ProjectCard component
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Define props for Work component
interface WorkProps {
  limit?: number;
}

const Work: React.FC<WorkProps> = ({ limit }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [ // Explicitly type projects array
    {
      id: 1,
      title: "Go and See Learning",
      intro: "Custom Material Design WordPress theme for an educational agency, built with tailored functionality.",
      description: "Go and See Learning Inc. needed a modern, easy-to-manage website to support their work as an educational agency. I built a custom WordPress theme from scratch, using Material Design principles to create a clean, consistent UI and an intuitive browsing experience. The site was designed to align with the brand’s color palette and to support tailored content and functionality requirements, while remaining simple for staff to update and maintain through WordPress.",
      role: "Go and See Learning Inc. needed a modern, easy-to-manage website to support their work as an educational agency. I built a custom WordPress theme from scratch, using Material Design principles to create a clean, consistent UI and an intuitive browsing experience. The site was designed to align with the brand’s color palette and to support tailored content and functionality requirements, while remaining simple for staff to update and maintain through WordPress.",
      category: "web",
      image: goseelearningImage,
      tech: ["Material Design", "WordPress", "HTML/CSS", "PHP", "JavaScript", "MySQL"],
      link: "https://goseelearning.com/en",
    },
    {
      id: 2,
      title: "Calgary.JP",
      intro: "Custom Bootstrap-based WordPress theme for a news and information portal in Calgary, Canada.",
      description: "Calgary.JP is a dynamic information portal that shares timely news and local updates about Calgary, Canada. The goal of this project was to build a fast, flexible WordPress site that supports frequent content updates while maintaining a clear, responsive reading experience across devices. I designed and developed a custom WordPress theme using Bootstrap to ensure a consistent layout system, scalable templates, and reliable performance for a content-driven platform.",
      role: "I designed and developed the site end to end, creating a custom Bootstrap-based WordPress theme tailored to Calgary.JP’s publishing needs. I translated the design into responsive page templates, implemented WordPress functionality to support ongoing updates, and refined the UI for readability and consistency. I also handled setup and configuration to ensure the site was straightforward to maintain and expand over time.",
      category: "web",
      image: calgaryjpImage,
      tech: ["WordPress", "Bootstrap", "JavaScript", "HTML/CSS", "PHP", "MySQL"],
      link: "https://calgary.jp",
    },
    {
      id: 3,
      title: "Fukushima Sand Story",
      intro: "Logo for NPO, expressing hope, resilience, and community spirit in a design that resonates locally.",
      description: "Fukushima Sand Story is an NPO in Japan dedicated to sharing local stories and strengthening community connection. This project focused on creating a logo that communicates hope, resilience, and community spirit in a way that feels authentic and welcoming to local audiences. The concept draws inspiration from Fukushima’s landscape — especially a well-known mountain where melting snow forms rabbit-shaped patterns — along with the region’s beloved beaches and the simple joy of playing in the sand. The final mark is designed to be meaningful and versatile, supporting confident use across both print and digital touchpoints.",
      role: "I led the logo design process from concept to final delivery. I listened closely to the organization’s story and values, translated key themes into multiple visual directions, and refined the chosen concept into a clear, memorable symbol. I delivered production-ready logo assets designed for consistent use across applications.",
      category: "branding",
      image: fssLogoImage,
      tech: ["Branding", "Logo", "Graphic Design"],
      link: "https://www.fukushima-sand-story.com/english/",
    },
    {
      id: 4,
      title: "Go and See Learning",
      intro: "Branding design for an educational agency, connecting students with international education.",
      description: "Go and See Learning Inc. helps connect Japanese students with international education opportunities. This project focused on creating a clean, approachable brand identity that communicates trust and clarity at a glance, especially for student audiences. The visual direction uses a yellow and green palette inspired by Kelowna, Canada—reflecting the contrast of bright lakeside beaches and surrounding mountain landscapes.",
      role: "I led the branding and design work from concept to delivery, including the logo and business card design. I developed the core visual direction (color palette and overall look and feel) and produced final, print-ready assets to ensure consistent presentation across key touchpoints.",
      category: "branding",
      image: goseelearningBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Graphic Design"],
      link: "https://goseelearning.com/en",
    },
    {
      id: 5,
      title: "Calgary.JP",
      intro: "Logo design for Calgary.JP, reflecting Japan–Canada community and cultural exchange.",
      description: "Calgary.JP is a community-driven platform that connects people through local information and shared experiences between Japan and Canada. The goal of this logo project was to create a clear, memorable mark that represents Calgary.JP’s welcoming community presence while subtly expressing the idea of cultural exchange.",
      role: "I designed the Calgary.JP logo from concept to final delivery. I explored directions that balanced local identity with a Japan–Canada connection, refined the selected concept for clarity and recognizability, and prepared final logo assets for consistent use across digital touchpoints.",
      category: "branding",
      image: calgaryjpBrandingImage,
      tech: ["Branding", "Logo", "Graphic Design"],
      link: "https://calgary.jp",
    },
    {
      id: 6,
      title: "Bodai Consulting",
      intro: "Branding package with logo, business card, and print design, creating a cohesive, professional identity.",
      description: "This project delivered a complete branding package for a small marketing consulting business. The goal was to establish a cohesive, professional identity that builds credibility and looks consistent across key touchpoints. The deliverables included a logo, business card, and supporting print materials designed to work together as a unified brand system.",
      role: "I designed the brand identity from concept to final production. I developed the logo direction, extended it into business card and print layouts, and prepared print-ready files to ensure accurate, consistent results. I also ensured the system remained flexible enough to support future marketing materials.",
      category: "branding",
      image: bcBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Letter Head"],
      link: "#",
    },
    {
      id: 7,
      title: "Other Branding",
      intro: "Other branding projects, including logo and business card designs for clients across various industries.",
      description: "A selection of additional branding work, including logo design and business cards for clients in various industries—each tailored to the client’s audience, tone, and practical usage needs.",
      role: "I designed logos and business cards for clients across different industries, ensuring each identity felt distinct while remaining practical and production-ready. I handled concept development, design refinement, and final file preparation for print and digital applications.",
      category: "branding",
      image: otherBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Graphic Design"],
      link: "#",
    },
    {
      id: 8,
      title: "naoyaueda.com",
      intro: "My portfolio website with my curiosity and experiment, trying new things, exploring deeper.",
      description: "This project is my personal portfolio website, built to showcase selected design and development work in a modern, responsive, and interactive format. It also serves as a technical playground where I can explore new tools, refine my frontend workflow, and experiment with motion and UI polish. The site was developed with React, TypeScript, Tailwind CSS, and Framer Motion to support a fast, component-based build with smooth, purposeful animation.",
      role: "I planned, designed, and developed the site end to end. I implemented the UI with React and TypeScript, styled the interface with Tailwind CSS, and added interaction and page motion using Framer Motion. I also handled responsive behavior and overall front-end refinement to ensure the site feels consistent and engaging across devices.",
      category: "web",
      image: naoyauedaImage,
      tech: ["React", "TypeScript", "HTML/CSS", "JavaScript", "Tailwind CSS", "Framer Mortion"],
      link: "https://naoyaueda.com",
    }
  ];

  const categories = ['all', 'web', 'branding'];
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {

    return (
<motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15
        }}
        whileHover={{
          boxShadow: "0 20px 40px rgba(216, 164, 57, 0.7)",
          y: -5
        }}
        className="relative group cursor-pointer rounded-3xl overflow-hidden"
        onClick={() => setSelectedProject(project)}
      >
<motion.div
          className="relative h-full rounded-3xl overflow-hidden transition-all duration-300 flex flex-col"
        >
          {/* Top half - Project image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="inset-0 w-full h-auto object-cover brightness-75 group-hover:brightness-100 filter grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-mono-800 rounded-full backdrop-blur-sm">
                <span className="text-accent-amber group-hover:text-accent-amber text-xs  uppercase tracking-wider">
                  {project.category}
                </span>
              </span>
            </div>
          </div>

          {/* Bottom half - Text content */}
          <div className="flex-1 bg-mono-900 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display text-mono-100 mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-mono-200 text-sm leading-relaxed mb-4">
                {project.intro}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string) => ( // Type 'tech'
                <span
                  key={tech}
                  className="px-2 py-1 text-accent-amber group-hover:text-accent-amber text-xs rounded-full border border-accent-amber group-hover:border-accent-amber"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons - shown on hover */}
            <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="px-4 py-2 font-medium bg-accent-amber text-mono-900 rounded-full text-sm hover:bg-accent-amber transition-colors">
                View Project
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Project modal
  const ProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-mono-100/10 backdrop-blur-md flex items-center justify-center p-4"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-mono-900 rounded-3xl container w-full max-h-[90vh] overflow-y-auto"
          onClick={(e: React.MouseEvent) => e.stopPropagation()} // Type 'e'
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-mono-100 mb-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-mono-300 hover:text-accent-amber transition-colors"
              >
                ✕
              </button>
            </div>
            <div className='md:flex items-center gap-12'>
            <div className="flex-1 rounded-2xl mb-6 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 text-mono-100 mb-5 space-y-4">
              <h3 className='font-semibold text-xl'>About this project</h3>
              <div>{selectedProject.description}</div>
              <h3 className='font-semibold text-xl'>My role</h3>
              <div>{selectedProject.role}</div>
              <div>
              <h3 className="text-xl text-mono-100 font-semibold mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => ( // Type 'tech'
                    <span key={tech} className="px-3 py-1 border border-accent-amber text-accent-amber rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              <div className="flex space-x-4 mt-8">
                {selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent-amber text-mono-900 font-medium rounded-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full bg-transparent text-mono-900"
                    >
                      View Live Project
                    </motion.button>
                  </a>
                )}
              </div>
            </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="px-6 bg-mono-800 overflow-hidden">

      <div className="container mx-auto relative z-10 py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className="col-left">
          <h2 className="text-5xl md:text-6xl font-bold uppercase">
            <span className="text-gradient-3d">Featured</span><br/>
            <span className='text-accent-amber'>Projects</span>
          </h2>
          </div>
          <div className="col-right">
          <p className="text-mono-100 mb-8">
            Explore my latest projects showcasing expertise in graphic and web design & development.
          </p>
          {/* Filter buttons */}
          <div className="inline-flex rounded-full border border-accent-amber bg-mono-900 backdrop-blur-sm p-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-accent-amber text-mono-900 font-medium'
                    : 'text-mono-200 hover:text-accent-amber'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          </div>
          </div>
          
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredProjects.slice(0, limit).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>

      {/* Project modal */}
      <ProjectModal />
    </section>
  );
};

export default Work;