import React, { useState, useRef, useEffect } from 'react';
import { motion, Transition, Variants } from 'framer-motion';

// Define types for Skill
interface Skill {
  name: string;
  level: number;
}

// Define props for SkillBar component
interface SkillBarProps {
  skill: Skill;
  index: number;
}

const Expertise = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillsData = [
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 100 },
        { name: "Javascript", level: 90 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "WordPress", level: 95 },
        { name: "PHP", level: 85 },
        { name: "Framer Mortion", level: 75 },
        { name: "Python", level: 80 },
      ]
    },
    {
      category: "Graphic Design",
      skills: [
        { name: "UI/UX", level: 95 },
        { name: "Branding", level: 100 },
        { name: "Logo", level: 95 },
        { name: "Business Card", level: 85 },
        { name: "Flyer / Print", level: 75 },
        { name: "Marketing Collateral ", level: 90 },
        { name: "Thumbnail / Banner", level: 80 },
      ]
    },
    {
      category: "Apps",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Photoshop", level: 80 },
        { name: "Illustrator", level: 85 },
        { name: "Dreamweaver", level: 75 },
        { name: "After Effects", level: 70 },
        { name: "Affinity Photo", level: 80 },
        { name: "Affinity Designer", level: 90 },
        { name: "Pixelmator Pro", level: 90 },
        { name: "Canva", level: 95 },
      ]
    },
    {
      category: "Other",
      skills: [
        { name: "Business Operations", level: 90 },
        { name: "Digital Marketing", level: 95 },
        { name: "SEO", level: 90 },
        { name: "AI, LLM, CLI", level: 95 },
        { name: "Microsoft 365", level: 90 },
        { name: "Google Workspace", level: 80 },
        { name: "English & Japanese", level: 90 },
     ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = { // Explicitly type itemVariants
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      } as Transition, // Explicitly cast to Transition
    },
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollWidth, clientWidth, scrollLeft } = container;
      setIsScrollable(scrollWidth > clientWidth);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.firstElementChild?.clientWidth || 0;
      const scrollAmount = cardWidth * 1;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const barRef = useRef<HTMLDivElement>(null); // Type for useRef

    return (
      <motion.div
        ref={barRef}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="mb-6 cursor-pointer"
        onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-mono-100 ">{skill.name}</span>
          <motion.span 
            className="text-accent-sky font-mono text-sm"
            animate={{ opacity: isHovered ? [1, 0.5, 1] : 1 }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          >
            {skill.level}%
          </motion.span>
        </div>
        
        <div className="relative h-0.5 bg-mono-900 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-sky/50 to-accent-sky rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: index * 0.1,
              ease: "easeOut"
            }}
            style={{ boxShadow: isHovered ? "0 0 20px rgba(255, 255, 0, 0.6)" : "none" }}
          />
          

        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="expertise" 
      
      className="bg-mono-800 relative px-6 py-32 bg-gradient-to-b overflow-hidden"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-full items-center'>
          <div className="col-left">
            <h2 className="text-5xl md:text-7xl mb-6 uppercase font-bold">
            <span className="text-gradient-3d">Technical</span><br/><span className='text-accent-sky'>Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-mono-100">
            Comprehensive skill set spanning frontend development, backend architecture, and creative design. 
            Constantly evolving with cutting-edge technologies.
          </p>
          </div>
          <div className="col-right">
        {/* Expertise visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full lg:px-16"
        >
          <div className="bg-mono-100/10 rounded-3xl p-8">
            <h3 className="text-3xl font-display  text-mono-100 mb-8 text-center">
              Proficiency Overview
            </h3>
            
            {/* Circular skill visualization */}
            <div className="grid grid-cols-2 gap-8">
              {skillsData.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="5"
                        fill="none"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8ECAE6" />
                          <stop offset="100%" stopColor="#1c1c1c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl  text-mono-100">
                        {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                      </span>
                    </div>
                  </div>
                  <p className="text-mono-100 ">{category.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
          </div>
          </div>
        </motion.div>
        

        {/* Skills grid */}
        <div className="relative">
          <motion.div
            ref={scrollContainerRef}
            onScroll={checkScrollability}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto pb-4"
          >
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="p-2 flex-shrink-0 w-full md:w-[50%]"
              >
                <div className='bg-mono-100/10 p-6 rounded-3xl'>
                {/* Category header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-display text-mono-100">
                      {category.category}
                    </h3>
                  </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-x-6 text-xs md:text-sm">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex}
                    />
                  ))}
                </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {isScrollable && (
            <div className="flex justify-center mt-4">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="px-4 py-2 bg-mono-900 rounded-full disabled:opacity-50"
              >
                &lt;
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="ml-2 px-4 py-2 bg-mono-900 rounded-full disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise;