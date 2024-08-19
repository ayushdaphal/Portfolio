import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id="about" className="about">
        <div className="about-title">
            <h1>About Me</h1>
           
        </div>
        <div className="about-section">  
          <div className="about-para">
            <p>I am currently pursuing a Bachelor's degree in Computer Science from Manipal University Jaipur,</p>
            <p>where I am developing a strong foundation in software development and emerging technologies. </p>
            <p>Alongside my academic pursuits, I maintain a deep and unwavering interest in entrepreneurship and </p>
            <p>finance, regularly engaging with innovative business concepts and staying well-informed about </p>
            <p>financial markets. These varied passions collectively drive my commitment to excellence and </p>
            <p>innovation in all areas of my work.</p>
           
           
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{width:"35%"}}/>
            </div>  
            <div className="about-skill">
              <p>React Js</p> <hr style={{width:"25%"}}/>
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{width:"15%"}}/>
            </div>
            <div className="about-skill">
              <p>Vue Js</p> <hr style={{width:"15%"}}/>
            </div>
            <div className="about-skill">
              <p>Sonar Qube</p> <hr style={{width:"25%"}}/>
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{width:"10%"}}/>
            </div>
            <div className="about-skill">
              <p>MySQL</p> <hr style={{width:"20%"}}/>
            </div>
          </div>

      
         
        </div>
      
    </div>
  )
}

export default About
