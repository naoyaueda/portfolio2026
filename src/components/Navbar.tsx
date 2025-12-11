import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants: Variants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bg-dark-900/95 items-center top-0 w-full h-auto z-50 px-6 py-2 backdrop-blur-custom"
      >
        <div className="text-sm flex justify-between items-center">
          <Link to="/" className='text-sm text-white'>
            Naoya Ueda
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`hover:text-light-100 transition-colors ${location.pathname === link.path ? 'text-light-100 border-b border-light-300' : ''}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 -mt-2">
            <button onClick={toggleMenu} className="focus:outline-none">
              <motion.div
                className="w-6 h-6 flex flex-col justify-around"
                animate={isOpen ? "open" : "closed"}
              >
                <motion.span
                  className="block h-0.5 w-full bg-white"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 5 },
                  }}
                ></motion.span>
                <motion.span
                  className="block h-0.5 w-full bg-white"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                ></motion.span>
                <motion.span
                  className="block h-0.5 w-full bg-white"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -5 },
                  }}
                ></motion.span>
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-dark-900 z-40 flex flex-col items-start justify-center p-8"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-full">
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={linkVariants} className="my-4">
                  <Link
                    to={link.path}
                    className={`text-4xl font-display text-light-100 hover:text-accent-yellow transition-colors ${location.pathname === link.path ? 'text-accent-yellow' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
