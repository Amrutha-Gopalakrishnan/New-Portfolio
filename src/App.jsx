import Navbar from './Navbar';
import Home from './Home';
import React from 'react';
import About from './About';
import 'aos/dist/aos.css';
import Skills from './Skills';
import Projects from './Project';
import Education from './Education';
import Contact from './Contact'


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

        <div style={{backgroundImage: `url("/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"}}>
                <Skills />
        </div>

        <Projects />

        <div style={{backgroundImage: `url("/background.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"}}>
                <Education />
        </div>
        

        
        <Contact />

    </div>
  );
}

export default App;


