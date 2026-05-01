import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ProblemSolving from './components/ProblemSolving'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="bg-animation">
        <div className="bg-pattern"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProblemSolving />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
