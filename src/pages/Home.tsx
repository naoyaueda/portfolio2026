import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Expertise from '../components/Expertise';
import Work from '../components/Work';
import Connect from '../components/Connect';
import Footer from '../components/Footer';


const Home: React.FC = () => {

 return (
    <div className="min-h-screen text-light-100 overflow-x-hidden">
        <Hero />
        <Intro />
        <Expertise />
        <Work />
        <Connect />
        <Footer />
    </div>
  );

};

export default Home;