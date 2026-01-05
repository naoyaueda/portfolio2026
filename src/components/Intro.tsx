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
    "JavaScript", "React", "TypeScript", "Node.js", "Tailwind CSS", "Python", "HTML/CSS", "PHP", "WordPress", "Branding", "Logo Design", "Digital Marketing", "Online Strategy"
  ];

  return (
    <section id="about" className="py-32 px-6 text-mono-900 bg-mono-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className='text-5xl md:text-7xl uppercase font-bold md:text-center mb-16'>
          <span className="text-gradient-3d-dark">About</span> <span className='text-accent-orange'>Me</span>
        </h2>
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
                      className="w-48 h-48 lg:mx-auto rounded-full flex items-center justify-center mb-4"
                    >
                      <div><img src={avatar} alt='my avatar'/></div>
                    </motion.div>
                    <div className='text-lg'>Naoya Ueda</div>
                    <div>Multimedia Designer & Developer</div>
                    <div className='flex flex-row items-center justify-center gap-2 md:gap-4 mt-6'>
                      From<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#fff" r="256"/><circle cx="256" cy="256" fill="#d80027" r="111.304"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> 
                      Lived in<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 141.384-114.616 256-256 256s-256-114.616-256-256c0 .061 256-255.972 256-256 141.384 0 256 114.616 256 256z" fill="#0052b4"/><g fill="#fff"><path d="m256 0c-.014 0-.029 0-.043 0z"/><path d="m255.315 256h.685c0-.23 0-.454 0-.685-.228.229-.456.457-.685.685z"/><path d="m256 133.565c0-45.045 0-74.56 0-133.565h-.043c-141.365.024-255.957 114.629-255.957 256h133.565v-75.211l75.212 75.211h46.539c.228-.228.457-.456.685-.685 0-17.247 0-32.636 0-46.537l-75.213-75.213z"/></g><g fill="#d80027"><path d="m129.515 33.391c-40.039 22.799-73.325 56.085-96.124 96.124v126.485h66.783v-155.824-.002h155.826c0-21.063 0-41.129 0-66.783z"/><path d="m256 224.519-90.953-90.953s-31.481.002-31.481 0v.002l122.433 122.432h.001s0-21.707 0-31.481z"/><path d="m443.33 189.959 5.525 17.006h17.881l-14.466 10.51 5.526 17.005-14.466-10.509-14.467 10.509 5.526-17.005-14.467-10.51h17.881z"/><path d="m379.411 312.393 8.289 25.51h26.821l-21.7 15.764 8.29 25.509-21.7-15.765-21.7 15.765 8.29-25.509-21.7-15.764h26.821z"/><path d="m381.825 112.046 6.908 21.259h22.351l-18.084 13.135 6.908 21.258-18.083-13.139-18.082 13.139 6.907-21.258-18.082-13.135h22.35z"/><path d="m320.322 189.217 8.288 25.51h26.822l-21.7 15.764 8.29 25.509-21.7-15.765-21.7 15.765 8.29-25.509-21.7-15.764h26.821z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> 
                      Now in<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#fff" r="256"/><g fill="#d80027"><path d="m512 256c0-101.494-59.065-189.19-144.696-230.598v461.195c85.631-41.407 144.696-129.103 144.696-230.597z"/><path d="m0 256c0 101.494 59.065 189.19 144.696 230.598v-461.196c-85.631 41.408-144.696 129.104-144.696 230.598z"/><path d="m300.522 289.391 44.521-22.261-22.26-11.13v-22.261l-44.522 22.261 22.261-44.522h-22.261l-22.261-33.391-22.261 33.391h-22.261l22.261 44.522-44.522-22.261v22.261l-22.26 11.13 44.521 22.261-11.13 22.261h44.522v33.391h22.26v-33.391h44.522z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
            <motion.div variants={itemVariants} className='space-y-6 text-mono-900'>
              <h3 className='font-semibold text-lg'>Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="px-4 py-2 bg-mono-100 border border-accent-orange rounded-full text-sm text-accent-orange hover:bg-accent-orange hover:text-mono-100 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <p>Started in business, now working at the intersection of strategy, design, and development. I am passionate about building clear, mobile first websites and smoother content workflows.</p>
              <div><a href="/about">
                <span className='hover:px-4 py-2 hover:bg-accent-orange hover:text-mono-100 transition-all duration-300 rounded-full'>Read the full story →</span>
              </a></div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Intro;