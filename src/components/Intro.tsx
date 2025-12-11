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
        <h2 className="text-5xl md:text-6xl text-gradient-3d uppercase mb-20">About Me</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-18 items-end"
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
                      className="w-48 h-48 lg:mx-auto mb-4 rounded-full flex items-center justify-center"
                    >
                      <div><img src={avatar} alt='my avatar'/></div>
                    </motion.div>
                    <div className="text-lg">Naoya Ueda</div>
                    <div className="text-sm">Multimedia Designer & Developer</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-6">
            
            
            <div className="leading-relaxed">
              <div className='text-xl mb-4'>What I do</div>
              <p>
                Focused on clean, user-centered digital experiences. With expertise in WordPress, UI/UX, and workflow optimization, I build mobile-first websites that connect diverse audiences.
              </p>
            </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
            >
              <h3 className="text-xl font-light text-yellow-500 mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-4 py-2 bg-dark-800 border border-gray-500/30 rounded-lg text-sm text-light-200 hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200"
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