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
      quolification: "National Diploma in Computing - Multimedia",
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
            <h2 className='text-5xl md:text-6xl uppercase font-bold text-center mb-16'>
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
          <div className="relative items-center justify-center text-center">
                <div className="w-48 h-48 items-center justify-center mx-auto font-mono mb-4">
                  <img src={Avatar} alt='my avatar'/>
                </div>
                <div className="text-lg">Naoya Ueda</div>
                <div>Multimedia Designer & Developer</div>
                <div className='flex flex-row items-center justify-center gap-2 md:gap-4 mt-6'>
                  From<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#fff" r="256"/><circle cx="256" cy="256" fill="#d80027" r="111.304"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> 
                  Lived in<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m512 256c0 141.384-114.616 256-256 256s-256-114.616-256-256c0 .061 256-255.972 256-256 141.384 0 256 114.616 256 256z" fill="#0052b4"/><g fill="#fff"><path d="m256 0c-.014 0-.029 0-.043 0z"/><path d="m255.315 256h.685c0-.23 0-.454 0-.685-.228.229-.456.457-.685.685z"/><path d="m256 133.565c0-45.045 0-74.56 0-133.565h-.043c-141.365.024-255.957 114.629-255.957 256h133.565v-75.211l75.212 75.211h46.539c.228-.228.457-.456.685-.685 0-17.247 0-32.636 0-46.537l-75.213-75.213z"/></g><g fill="#d80027"><path d="m129.515 33.391c-40.039 22.799-73.325 56.085-96.124 96.124v126.485h66.783v-155.824-.002h155.826c0-21.063 0-41.129 0-66.783z"/><path d="m256 224.519-90.953-90.953s-31.481.002-31.481 0v.002l122.433 122.432h.001s0-21.707 0-31.481z"/><path d="m443.33 189.959 5.525 17.006h17.881l-14.466 10.51 5.526 17.005-14.466-10.509-14.467 10.509 5.526-17.005-14.467-10.51h17.881z"/><path d="m379.411 312.393 8.289 25.51h26.821l-21.7 15.764 8.29 25.509-21.7-15.765-21.7 15.765 8.29-25.509-21.7-15.764h26.821z"/><path d="m381.825 112.046 6.908 21.259h22.351l-18.084 13.135 6.908 21.258-18.083-13.139-18.082 13.139 6.907-21.258-18.082-13.135h22.35z"/><path d="m320.322 189.217 8.288 25.51h26.822l-21.7 15.764 8.29 25.509-21.7-15.765-21.7 15.765 8.29-25.509-21.7-15.764h26.821z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> 
                  Now in<svg className="w-10 h-10 rounded-full shadow-md" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#fff" r="256"/><g fill="#d80027"><path d="m512 256c0-101.494-59.065-189.19-144.696-230.598v461.195c85.631-41.407 144.696-129.103 144.696-230.597z"/><path d="m0 256c0 101.494 59.065 189.19 144.696 230.598v-461.196c-85.631 41.408-144.696 129.104-144.696 230.598z"/><path d="m300.522 289.391 44.521-22.261-22.26-11.13v-22.261l-44.522 22.261 22.261-44.522h-22.261l-22.261-33.391-22.261 33.391h-22.261l22.261 44.522-44.522-22.261v22.261l-22.26 11.13 44.521 22.261-11.13 22.261h44.522v33.391h22.26v-33.391h44.522z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
                </div>
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
            <p>I didn’t start in design. I started in business. Early on, I learned how organizations make decisions, what stakeholders care about, and why “a nice website” isn’t the same as a website that actually works. Over time, that business lens pulled me deeper into the digital side, and I began building the kind of online experiences I wished more organizations had: clear, human, and purpose-driven.</p>
            <p>Today, I bring both worlds together as a web designer and developer. I design and build mobile first websites with a strong UI/UX foundation, then refine the behind-the-scenes workflows so teams can update content, respond faster, and scale without friction. I enjoy turning complexity into something simple, whether that means tightening a message for an audience or streamlining a process so it’s easier to maintain.</p>
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
                  className="backdrop-blur-sm border-4 border-mono-900/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent-orange hover:bg-white mb-10"
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
                  className="space-y-2 backdrop-blur-sm border-4 border-mono-900/10 rounded-2xl p-6 transition-all duration-300 hover:border-accent-orange hover:bg-white"
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
