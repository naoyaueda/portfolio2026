import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import './App.css';

function App() {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      <ScrollToTop /> {/* Render ScrollToTop here */}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
