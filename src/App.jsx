import React, { Suspense, lazy } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import 'aos/dist/aos.css';

// Lazy load non-critical sections below the fold to improve LCP and bundle size
const About = lazy(() => import('./About'));
const Tech = lazy(() => import('./Tech'));
const Projects = lazy(() => import('./Project'));
const Experience = lazy(() => import('./Experience'));
const Certifications = lazy(() => import('./Certifications'));
const Achievements = lazy(() => import('./Achievements'));
const Publications = lazy(() => import('./Publications'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#070708] text-white font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Home is critical for LCP, load eagerly */}
        <Home />
        
        <Suspense fallback={<div className="flex justify-center items-center min-h-[50vh]"><div className="w-10 h-10 border-4 border-t-blue-500 rounded-full animate-spin"></div></div>}>
          <About />
          <Tech />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Publications />
          <Education />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
