import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
  projectType: string;
}

interface SocialLink {
  icon: string;
  value: string;
  href: string;
}

const Connect = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const projectTypes = [
    'Web Development',
    'UI/UX Design',
    'Brand Identity',
    'Mobile App',
    'E-commerce',
    'Other'
  ] as const;

  const socialLinks: SocialLink[] = [
    { icon: 'C', value: 'Calgary, AB, Canada', href: 'https://maps.app.goo.gl/c48gwxh3pJAuJGXw5' },
    { icon: 'E', value: 'Email me', href: 'mailto:hello@naoyaueda.com' },
    { icon: 'L', value: 'My LinkedIn', href: 'https://www.linkedin.com/in/naoyaueda/' },
    { icon: 'G', value: 'My GitHub', href: 'https://github.com/naoyaueda' },
  ];

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key not found in environment variables');
    }
  }, []);

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your message');
      return false;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      return false;
    }
    if (formData.message.length > 1000) {
      setError('Message must be less than 1000 characters');
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Debug environment variables
      console.log('Environment variables:', {
        serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      });

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType || 'Not specified',
        message: formData.message,
        to_name: 'Naoya'
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      console.log('Email successfully sent!', result.text);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', projectType: '' });
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      if (error instanceof Error) {
        setError(`Failed to send message: ${error.message}. Please try again or contact directly at hello@naoyaueda.com`);
      } else {
        setError('Failed to send message. Please try again or contact directly at hello@naoyaueda.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      
      className="bg-mono-100 relative py-32 px-6 bg-gradient-to-b overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          <h2 className="text-5xl md:text-7xl uppercase font-bold">
            <span className="text-gradient-3d-dark">Connect</span><br/><span className='text-accent-blue'>with me.</span>
          </h2>
          <p className="text-lg sm:text-xl text-mono-900 flex items-center">
            From complete web design and development to intuitive UI/UX, branding strategy, and technical consulting, I help bring your ideas to life with clarity and impact.
          </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent-blue rounded-3xl p-6"
          >
            <h3 className="text-2xl font-display mb-8" >
              Let's explore how we can collaborate.
            </h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✓</span>
                </div>
                <h4 className="text-2xl text-white mb-4">Message Sent Successfully!</h4>
                <p className="text-gray-300">Thank you for reaching out! I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : error ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✕</span>
                </div>
                <h4 className="text-2xl text-white mb-4">Submission Failed</h4>
                <p className="text-gray-300 mb-4">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" name="contact-form">
                {error && !submitted && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-mono-100 border rounded-xl text-mono-900 placeholder-mono-200 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        error && !formData.name.trim() 
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                          : 'border-gray-500/30 focus:border-accent-blue focus:ring-yellow-400/20'
                      } disabled:opacity-50`}
                      placeholder="Your Name"
                      minLength={2}
                      maxLength={50}
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 bg-mono-100 border rounded-xl text-mono-900 placeholder-mono-200 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        error && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                          : 'border-mono-600/30 focus:border-accent-blue focus:ring-yellow-400/20'
                      } disabled:opacity-50`}
                      placeholder="Email Address"
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-mono-100 border border-gray-500/30 rounded-xl text-mono-900 focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue transition-all duration-300 disabled:opacity-50"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    minLength={10}
                    maxLength={1000}
                    className={`w-full px-4 py-3 bg-mono-100 border rounded-xl text-mono-900 placeholder-mono-200 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      error && (formData.message.length < 10 || formData.message.length > 1000)
                        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' 
                        : 'border-gray-500/30 focus:border-accent-blue focus:ring-yellow-400/20'
                    } disabled:opacity-50`}
                    placeholder="Tell me about your project (minimum 10 characters)..."
                  />
                  <div className="text-right text-xs text-mono-100 mt-1">
                    {formData.message.length}/1000 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-mono-100/50 text-black font-semibold rounded-xl hover:bg-mono-100/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-mono-900 border-t-transparent rounded-full mr-2 animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-accent-blue rounded-3xl p-6">
              <h3 className="text-2xl text-mono-100 mb-8">
                Connect Directly
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center rounded-full pr-4 hover:bg-mono-100/20 transition-all duration-300 group"
                  >
                    <div className=" bg-mono-100/20 rounded-full w-12 h-12 flex justify-center items-center mr-3 text-mono-100 hover:bg-transparent">
                      {link.icon}
                    </div>
                    <div className="flex-1 group-hover:text-white transition-colors">
                      {link.value}
                    </div>
                    <div className="opacity-20 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <h4 className="text-2xl sm:text-3xl text-mono-900">Open for Opportunities</h4>
              <div className="w-3 h-3 bg-accent-sky rounded-full animate-ping" />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8 text-mono-900">
              <span className="px-3 py-1 bg-mono-900/10 rounded-full text-sm">
                Remote Friendly
              </span>
              <span className="px-3 py-1 bg-mono-900/10 rounded-full text-sm">
                Full-time Available
              </span>
              <span className="px-3 py-1 bg-mono-900/10 rounded-full text-sm">
                Global Clients
              </span>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-mono-900'>
              <div>
                <h5 className='text-lg mb-3 border-l-4 border-accent-blue pl-4'>Web Development</h5>
                <p className='text-sm leading-relaxed'>Full-stack development, UI/UX design, and technical consulting from concept to deployment.</p>
              </div>
              <div>
                <h5 className='text-lg mb-3 border-l-4 border-accent-blue pl-4'>Brand Identity</h5>
                <p className='text-sm leading-relaxed'>Unique logos and brand identities that resonate with your target audience.</p>
              </div>
              <div>
                <h5 className='text-lg mb-3 border-l-4 border-accent-blue pl-4'>WordPress Development</h5>
                <p className='text-sm leading-relaxed'>Custom themes tailored to your needs with engaging user experiences.</p>
              </div>
              <div>
                <h5 className='text-lg mb-3 border-l-4 border-accent-blue pl-4'>AI Integration</h5>
                <p className='text-sm leading-relaxed'>Leveraging AI to create innovative solutions and reach new possibilities.</p>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Connect;