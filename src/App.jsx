import React from 'react';
import InteractiveBackground from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app relative">
      <InteractiveBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}

export default App;
