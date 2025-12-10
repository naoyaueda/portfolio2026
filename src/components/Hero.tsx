import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="py-32 container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-screen items-center justify-center">
      <div className='space-y-6'>
      <motion.h2 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl lg:text-7xl text-light-100"
      >
        Design with Purpose, Build with <span className='text-accent-yellow'>Clarity</span>.
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg md:text-xl text-light-300"
      >
        Multimedia design and development for better user-centered digital experiences.
      </motion.div>
    {/* Interactive buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="justify-center items-center space-y-4"
      >

        <motion.button
          whileHover={{ 
            scale: 1.05,
            borderColor: "#ffff00",
            color: "#ffff00"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-light-500 text-light-400  rounded-full transition-all duration-300"
        >
          <span>About</span>
        </motion.button>

        <motion.button
          whileHover={{ 
            scale: 1.05,
            borderColor: "#ffff00",
            color: "#ffff00"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-light-500 text-light-400  rounded-full transition-all duration-300"
        >
          <span>Expertise</span>
        </motion.button>

        <motion.button
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 40px rgba(255, 255, 0, 0.6)" 
          }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="mr-4 px-6 py-3 border border-light-500 hover:bg-yellow-500/80 text-light-400 hover:text-dark-900 rounded-full overflow-hidden group duration-300"
        >
          <span className="relative z-10">My Projects</span>
        </motion.button>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            borderColor: "#ffff00",
            color: "#ffff00"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 border border-light-500 text-light-400  rounded-full transition-all duration-300"
        >
          <span>Contact</span>
        </motion.button>
      </motion.div>
      </div>

      <div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Chevron down icon */}
            <svg 
              className="w-8 h-8 text-gray-400 mx-auto" 
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
          
          {/* "Scroll" text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-sm text-gray-300 mt-4 tracking-widest uppercase"
          >
            Scroll
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;