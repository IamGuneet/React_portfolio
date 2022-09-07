import React from 'react'
import Navbar from "./navbar.js";
import Intro from "./intro.js"
import About from "./about.js"
import Skills from "./skill.js"
import Projects from "./project.js"
import Contact from "./contact.js"
function App() {
  return (
    <div>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}

export default App
