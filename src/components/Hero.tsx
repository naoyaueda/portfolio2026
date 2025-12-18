import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className='bg-mono-100 text-mono-900'>
    <div className="py-32 container mx-auto p-6 md:flex gap-12 min-h-screen items-center justify-center">
      <div className='space-y-6'>
      <motion.h2 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl lg:text-4xl font-bold"
      >
        <span className='text-accent-amber text-6xl md:text-8xl uppercase'>Design</span> with<br/> <span className='text-accent-orange text-6xl md:text-8xl uppercase'>Purpose</span>,<br/><span className='text-accent-sky text-6xl md:text-8xl uppercase'>Build</span> with<br/><span className='text-accent-blue text-6xl md:text-8xl uppercase'>Clarity</span>.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-sm md:text-lg"
      >
        Strategy + design & development, aligned for user-centered experiences.
      </motion.div>
    {/* Interactive buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="justify-center items-center space-y-4 font-semibold text-sm"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-mono-900 hover:border-accent-amber hover:bg-accent-amber text-mono-900 rounded-full overflow-hidden group duration-300"
        >
          <span className="relative z-10">Projects</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-mono-900 hover:border-accent-orange hover:bg-accent-orange text-mono-900 hover:text-mono-100 rounded-full overflow-hidden group duration-300"
        >
          <span className="relative z-10">About</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-mono-900 hover:border-accent-sky hover:bg-accent-sky text-mono-900 hover:text-mono-900 rounded-full overflow-hidden group duration-300"
        >
          <span className="relative z-10">Expertise</span>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-mono-500 hover:border-accent-blue hover:bg-accent-blue text-mono-900 hover:text-mono-100 rounded-full overflow-hidden group duration-300"
        >
          <span className="relative z-10">Contact</span>
        </motion.button>
      </motion.div>
      </div>

      <div className='px-4 py-12'>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="relative w-max mx-auto p-2 bg-mono-800 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Chevron down icon */}
            <svg 
              className="w-8 h-8 text-mono-100 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;