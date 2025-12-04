import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import About from './About';
import 'aos/dist/aos.css';
import Skills from './Skills';
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
    <div className="font-sans">

        <div style={{backgroundImage: `url("/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"}}>
        <Navbar />
        <Home />
        </div>

          <About />

      
         <Skills />
        
        <Tech />

       

        <Projects />

        <Experience />

        <Certifications />
        
          <Achievements />

          <Publications />
        
        <Education />
        <Contact />

    </div>
  );
}

export default App;


