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

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [ // Explicitly type projects array
    {
      id: 1,
      title: "Go and See Learning",
      intro: "Custom Material Design WordPress theme for an educational agency, built with tailored functionality.",
      description: "Custom WordPress theme built with Material Design principles, developed for an educational agency, Go and See Learning Inc. with tailored functionality.",
      category: "web",
      image: goseelearningImage,
      tech: ["Material Design", "WordPress", "HTML/CSS", "PHP", "JavaScript", "MySQL"],
      link: "https://goseelearning.com/en",
    },
    {
      id: 2,
      title: "Go and See Learning",
      intro: "Branding design for an educational agency, connecting students with international education.",
      description: "From branding to logo and business card design for Go and See Learning Inc., reflecting their mission to connect Japanese students with international education opportunities.",
      category: "branding",
      image: goseelearningBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Graphic Design"],
      link: "https://goseelearning.com/en",
    },
    {
      id: 3,
      title: "Calgary.JP",
      intro: "Custom Bootstrap-based WordPress theme for a news and information portal in Calgary, Canada.",
      description: "Custom WordPress theme built with Bootstrap, designed and developed for a dynamic information portal delivering real‑time news and updates in Calgary, Canada.",
      category: "web",
      image: calgaryjpImage,
      tech: ["WordPress", "Bootstrap", "JavaScript", "HTML/CSS", "PHP", "MySQL"],
      link: "https://calgary.jp",
    },
    {
      id: 4,
      title: "Calgary.JP",
      intro: "Logo design for Calgary.JP, reflecting Japan–Canada community and cultural exchange.",
      description: "Logo design for Calgary.JP, capturing the essence of the community and its cultural exchange between Japan and Canada.",
      category: "branding",
      image: calgaryjpBrandingImage,
      tech: ["Branding", "Logo", "Graphic Design"],
      link: "https://calgary.jp",
    },
    {
      id: 5,
      title: "Fukushima Sand Story",
      intro: "Logo for NPO, expressing hope, resilience, and community spirit in a design that resonates locally.",
      description: "Expressing the essence of Fukushima Sand Story through a logo that embodies hope, resilience, and community spirit. A design that resonates with local audiences.",
      category: "branding",
      image: fssLogoImage,
      tech: ["Branding", "Logo", "Graphic Design"],
      link: "https://www.fukushima-sand-story.com/english/",
    },
    {
      id: 6,
      title: "Bodai Consulting",
      intro: "Branding package with logo, business card, and print design, creating a cohesive, professional identity.",
      description: "A complete branding package including logo, business card, and print design for a small marketing consultanting business, establishing a cohesive and professional brand identity.",
      category: "branding",
      image: bcBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Letter Head"],
      link: "#",
    },
    {
      id: 7,
      title: "Other Branding",
      intro: "Other branding projects, including logo and business card designs for clients across various industries.",
      description: "Some of my other branding projects, including logo and business card designs for various clients across different industries.",
      category: "branding",
      image: otherBrandingImage,
      tech: ["Branding", "Logo", "Business Card", "Graphic Design"],
      link: "#",
    },
    {
      id: 8,
      title: "naoyaueda.com",
      intro: "My portfolio website with my curiosity and experiment, trying new things, exploring deeper.",
      description: "Always keen to explore new tools and go deeper, I used React, TypeScript, Tailwind CSS, and Framer Motion to build a modern, responsive, and interactive personal portfolio site.",
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
          boxShadow: "0 20px 40px rgba(255, 255, 0, 0.3)",
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
              <span className="inline-block px-3 py-1 bg-dark-900 rounded-full backdrop-blur-sm">
                <span className="text-yellow-400 group-hover:text-yellow-500 text-xs  uppercase tracking-wider">
                  {project.category}
                </span>
              </span>
            </div>
          </div>

          {/* Bottom half - Text content */}
          <div className="flex-1 bg-dark-900 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-display  text-light-100 mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-light-300 text-sm leading-relaxed mb-4">
                {project.intro}
              </p>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string) => ( // Type 'tech'
                <span
                  key={tech}
                  className="px-2 py-1 text-yellow-400 group-hover:text-yellow-500 text-xs rounded-full border border-yellow-400 group-hover:border-yellow-500"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons - shown on hover */}
            <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="px-4 py-2 bg-yellow-500 text-dark-900 rounded-full text-sm hover:bg-yellow-400 transition-colors">
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
        className="fixed inset-0 z-50 bg-dark-800/90 backdrop-blur-md flex items-center justify-center p-8"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-dark-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e: React.MouseEvent) => e.stopPropagation()} // Type 'e'
        >
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-display text-light-100 mb-2">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-2xl text-gray-400 hover:text-yellow-500 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="rounded-2xl mb-6 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-light-400 mb-5">{selectedProject.description}</div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-white mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string) => ( // Type 'tech'
                    <span key={tech} className="px-3 py-1 border border-yellow-400 text-yellow-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-yellow-500 text-dark-900 rounded-full"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full h-full bg-transparent text-dark-900"
                    >
                      View Live Project
                    </motion.button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-32 px-6 bg-dark-800 overflow-hidden">

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className="col-left">
          <h2 className="text-5xl md:text-6xl">
            <span className="text-gradient-3d uppercase">Featured<br/>Projects</span>
          </h2>
          </div>
          <div className="col-right">
          <p className="text-gray-400 mb-8">
            Explore my latest projects showcasing expertise in graphic and web design & development.
          </p>
          {/* Filter buttons */}
          <div className="inline-flex rounded-full border border-yellow-500/30 bg-dark-900 backdrop-blur-sm p-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full  transition-all duration-300 ${
                  filter === category
                    ? 'bg-yellow-500 text-dark-900'
                    : 'text-light-300 hover:text-yellow-500'
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
          {filteredProjects.map((project, index) => (
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