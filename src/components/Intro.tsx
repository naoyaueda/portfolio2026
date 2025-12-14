import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/images/avatar.png';

const Intro: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const skills = [
    "JavaScript", "React", "TypeScript", "Node.js", "Tailwind CSS", "Python", "HTML/CSS", "PHP", "WordPress", "Branding", "Logo Design"
  ];

  return (
    <section id="about" className="py-32 px-6 bg-dark-800 border-b-2 border-dark-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-gradient-3d uppercase mb-16 font-bold">About Me</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden glow-effect"
              >
                <div className="flex items-center lg:justify-center">
                  <div className="lg:text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                      className="w-48 h-48 lg:mx-auto rounded-full flex items-center justify-center"
                    >
                      <div><img src={avatar} alt='my avatar'/></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
            <motion.div variants={itemVariants} className='space-y-4'>
              <div className='text-lg font-bold'>Naoya Ueda</div>
              <div>Multimedia Designer & Developer</div>
              <p>Focused on clean, user-centered digital experiences. With expertise in WordPress, UI/UX, and workflow optimization, I build mobile-first websites that connect diverse audiences.</p>
              <h3 className="text-lg text-yellow-500">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-4 py-2 bg-dark-800 border border-gray-500/30 rounded-full text-sm text-light-200 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Intro;