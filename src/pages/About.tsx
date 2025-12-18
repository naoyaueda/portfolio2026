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
      company: "",
      place: "New Zealand, Japan, Canada",
      year: "2010-2018",
      desc: "Created logo, branding, and marketing materials for small business clients. Designed and developed websites using WordPress CMS, focusing on responsive design and user experience. Collaborated with clients to understand their needs and deliver tailored solutions.",
      skills: ["Logo Design", "Business Card Design", "Flyer Design", "HTML/CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    }
  ]
  const education = [
    {
      quolification: "National Diploma in Computing - Multimedia Design",
      school: "Regent International College",
      place: "Auckland, New Zealand",
      summary: "Most Promising Creative Talent Award recipient.",
    },
    {
      quolification: "Bachelor of Business Administration",
      school: "Ritsumeikan Asia Pacific University",
      place: "Oita, Japan",
      summary: "Specialized in Asia Pacific Management",
    }
  ]
  return (
    <section id="about" className="bg-mono-100 text-mono-900">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className='text-5xl md:text-6xl uppercase font-bold md:text-center mb-16'>
              <span className="text-gradient-3d-dark">About</span> <span className='text-accent-orange'>Me</span>
            </h2>
          </motion.div>

        <div className='md:flex space-y-6 items-center'>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:flex-1"
          >
          <div className="relative items-center md:justify-center md:text-center">
                <div className="w-48 h-48 items-center md:justify-center md:mx-auto font-mono mb-4">
                  <img src={Avatar} alt='my avatar'/>
                </div>
                <div className="text-lg font-bold">Naoya Ueda</div>
                <div>Multimedia Designer & Developer</div>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:flex-1 space-y-6 leading-relaxed story-border"
          >
            <div className='space-y-4 p-8'>
            <h3 className='font-semibold text-lg'>My Story</h3>
            <p>I didn’t start in design—I started in business. Early on, I learned how organizations make decisions, what stakeholders care about, and why “a nice website” isn’t the same as a website that actually works. Over time, that business lens pulled me deeper into the digital side, and I began building the kind of online experiences I wished more organizations had: clear, human, and purpose-driven.</p>
            <p>Today, I bring both worlds together as a web designer and developer. I design and build mobile-first websites with a strong UI/UX foundation, then refine the behind-the-scenes workflows so teams can update content, respond faster, and scale without friction. I enjoy turning complexity into something simple—whether that means tightening a message for an international audience or streamlining a process so it’s easier to maintain.</p>
            <p>Most of my work lives at the intersection of communication, technology, and trust. If you need someone who can think strategically, build practically, and care about the details your users actually feel, I’d love to help.</p>
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
            <h2 className="text-3xl text-mono-900 font-semibold mb-8">
              Professional Experience
            </h2>
              {work.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-sm border-4 border-mono-900/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent-orange mb-10"
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start'>
                    <h3 className="text-lg md:text-xl text-mono-900 font-semibold">
                      {job.title}
                    </h3>
                    <p className='text-mono-700 md:text-right'>
                      {job.company}
                    </p>
                    <p className="text-mono-500">
                      {job.place}
                    </p>
                    <p className='text-mono-300 md:text-right'>
                      {job.year}
                    </p>
                    <p className="text-mono-900 text-sm leading-relaxed">
                      {job.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-accent-orange text-xs rounded-full border border-accent-orange"
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
            <h2 className="text-3xl text-mono-900 mb-8 font-semibold">
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
                  className="space-y-2 backdrop-blur-sm border-4 border-mono-900/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent-orange"
                >
                  <h3 className="text-xl text-mono-900 font-semibold">
                    {edu.quolification}
                  </h3>
                  <p className="text-mono-900">
                    {edu.school}
                  </p>
                  <p className='text-mono-700'>
                    {edu.place}
                  </p>
                  <p className="text-mono-500 text-sm leading-relaxed">
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
