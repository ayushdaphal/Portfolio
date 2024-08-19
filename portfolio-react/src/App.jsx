import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Education from './components/Education/Education.jsx'
import Work from './components/Work/Work.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from  './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
