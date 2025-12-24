import Sidebar from './Sidebar';
import Home from './Home';
import React from 'react';
import About from './About';
import 'aos/dist/aos.css';
import Projects from './Project';
import Education from './Education';
import Contact from './Contact'
import Tech from './Tech'
import Experience from './Experience';
import Certifications from './Certifications';
import Publications from './Publications';
import Achievements from './Achievements';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#070708] text-white font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-20 lg:ml-24 transition-all duration-300">
        <Home />
        <About />
        <Tech />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Publications />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
