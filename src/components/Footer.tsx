import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/'},
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { href: 'mailto:hello@naoyaueda.com', label: 'Email' },
    { href: 'https://www.linkedin.com/in/naoyaueda/', label: 'LinkedIn' },
    { href: 'https://github.com/naoyaueda', label: 'GitHub' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mono-900 relative overflow-hidden">

      <div className="relative z-10 max-w-10xl mx-auto pb-6 px-6">
        <div className="grid md:grid-cols-4 gap-6 py-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-1"
          >
            <div className="flex items-center">
                <span className='text-mono-100 text-xl'>Naoya Ueda</span>
            </div>
            <div className="text-mono-200 text-sm">
              Multimedia Design & Development.
            </div>
            <div className="text-mono-300 text-sm">
              Design with Purpose, Build with Clarity.
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg text-mono-100">Menu</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link to={link.href} key={link.label}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                     className="block text-mono-300 hover:text-mono-100 transition-colors duration-200"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg text-mono-100">Connect</h4>
            <div className="space-y-3">
              <p className="text-mono-200 text-sm">
                Let's discuss our future collaborations!
              </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2}}
                  whileTap={{ scale: 0.9 }}
                  className="w-auto h-10 px-5 bg-mono-800 border border-mono-600/30 rounded-full flex items-center justify-center text-mono-100 hover:border-mono-100 hover:bg-mono-600/10 transition-all duration-300"
                >
                  <span className="text-xs text-center">{social.label}</span>
                </motion.a>
              ))}
            </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-mono-600 flex flex-col md:flex-row justify-between md:items-center space-y-4 md:space-y-0"
        >
          <div className="text-left text-mono-300 text-sm">
              © {currentYear} Naoya Ueda. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent-sky rounded-full animate-ping" />
              <span className="text-mono-300 text-sm">Available for work</span>
            </div>
            
            {/* Scroll to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-mono-600/20 border border-mono-600/30 rounded-full flex items-center justify-center text-mono-300 hover:bg-mono-500/30 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;