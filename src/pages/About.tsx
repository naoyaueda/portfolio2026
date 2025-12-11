import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Avatar from '../assets/images/avatar.png';

const About: React.FC = () => {
    const work = [
    {
      title: "Founder / Head of Operation",
      company: "Go and See Learning Inc.",
      place: "Calgary, AB, Canada",
      year: "2018-Present",
      desc: "Lead design and development of custom theme wordpress website and branding design. Material design principals with responsive, mobile-first approach to ensure users accessible experience across all devices and all information users need to make informed decisions.",
      skills: ["WordPress", "Material Design", "HTML/CSS", "JavaScript", "PHP", "MySQL", "Figma", "Digital Marketing", "Logo Design", "Branding ", "Design"],
    },
    {
      title: "Web Developer / Office Manager",
      company: "ASAC Ltd.",
      place: "Auckland, New Zealand",
      year: "2011-2018",
      desc: "Implemented UI/UX improvements to enhance user engagement and streamline workflows. Maintained and updated website content using WordPress CMS, ensuring accuracy and relevance. Troubleshooted and optimized code for reliability",
      skills: ["WordPress", "HTML/CSS", "JavaScript", "PHP", "Digital Marketing"],
    },
    {
      title: "Freelance Graphic and Web Designer & Developer",
      company: "708 International",
      place: "New Zealand, Japan, Canada",
      year: "2010-2018",
      desc: "Created logo, branding, and marketing materials for small business clients. Designed and developed websites using WordPress CMS, focusing on responsive design and user experience. Collaborated with clients to understand their needs and deliver tailored solutions.",
      skills: ["Logo Design", "Business Card Design", "Flyer Design", "HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    }
  ]
  const education = [
    {
      quolification: "National Diploma in Computing - Multimedia Design",
      school: "Regent International College - New Zealand",
      summary: "Most Promising Creative Talent Award recipient.",
    },
    {
      quolification: "Bachelor of Business Administration",
      school: "Ritsumeikan Asia Pacific University - Japan",
      summary: "Specialized in Asia Pacific Management",
    }
  ]
  return (
    <section id="about" className="bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-5xl md:text-6xl text-gradient-3d uppercase">About Me</h3>
          </motion.div>

        <div className='flex:none md:flex space-y-6'>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex:none md:flex-1"
          >
          <div className="relative items-center md:justify-center md:text-center">
                <div className="w-48 h-48 items-center md:justify-center md:mx-auto font-light mb-4">
                  <img src={Avatar} alt='my avatar'/>
                </div>
                <div className="text-light-100 text-xl">Naoya Ueda</div>
                <div className='text-sm text-light-300'>Multimedia Designer & Developer</div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-none md:flex-1 space-y-6"
          >
          <div className="text-light-200 leading-relaxed">
            Focused on clean, user-centered digital experiences. With expertise in WordPress, UI/UX, and workflow optimization, I build mobile-first websites that connect diverse audiences.
          </div>
          <div className="text-light-200 leading-relaxed">
            I specialize in mobile-first design, intuitive UI/UX, and efficient digital workflows that make websites not only look great but work seamlessly. Fluent in English and Japanese, I thrive on building solutions that connect diverse audiences and deliver real-world impact.
          </div>
        </motion.div>
        </div>
                  <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="my-20"
          >
            <h2 className="text-3xl font-light text-light-100 mb-8 font-serif">
              Professional Experience
            </h2>
              {work.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-900 backdrop-blur-sm border border-dark-800 rounded-2xl p-6 transition-all duration-300 hover:border-dark-600 mb-10"
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start'>
                    <h3 className="text-lg md:text-xl text-light-100">
                      {job.title}
                    </h3>
                    <p className='text-light-300 md:text-right'>
                      {job.company}
                    </p>
                    <p className="text-light-400">
                      {job.place}
                    </p>
                    <p className='text-light-500 md:text-right'>
                      {job.year}
                    </p>
                    <p className="text-light-200 text-sm leading-relaxed">
                      {job.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-yellow-500 text-xs rounded-full border border-yellow-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-light text-light-100 mb-8 font-serif">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-900 backdrop-blur-sm border border-dark-800 rounded-2xl p-6 transition-all duration-300 hover:border-dark-600"
                >
                  <h3 className="text-xl text-light-100 mb-2">
                    {edu.quolification}
                  </h3>
                  <p className="text-light-300 mb-2">
                    {edu.school}
                  </p>
                  <p className="text-light-300 text-sm leading-relaxed">
                    - {edu.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
