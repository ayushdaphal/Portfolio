import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id="hero" className="hero">
        <img src={profile_img} alt=" "/>
        <div className="hero-text">
        <h1><span>I'm Ayush Daphal,</span> an aspiring full stack developer</h1>
        <p>Pursuing Full Stack Development as a Computer Science undergrad </p>
        <div className="hero-action">
            <div className="hero-connect"><a href="https://www.linkedin.com/in/ayushdaphal/" target="_blank" rel="noopener noreferrer">Connect with me</a></div>
            <div className="hero-resume">
              <a href="https://drive.google.com/file/d/1clQks3Fi6NUt5t9QxAXC7anz-4_7MbTv/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>
        </div>
    </div>
  )
}

export default Hero



