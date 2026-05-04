import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueProposition from './components/ValueProposition'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Workshops from './components/Workshops'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <ValueProposition />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Workshops />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
