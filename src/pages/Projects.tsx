import React from 'react';
import Work from '../components/Work';
import Footer from '../components/Footer';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Work />
      <Footer />
    </div>
  );
};

export default Projects;