import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <div id="education" className="education">
        <div className="education-title">
          <h1>Education</h1>
        </div>
        
        <div className="education-field">
            <div className="education-detail">
                <h2>B-Tech </h2>
                <p>Bachelors of Technology in CSE </p>
                <p>Manipal University Jaipur</p>
                <p> <span>2022-2026</span></p>
            </div>
            <div className="education-detail">
                <h2>HSC </h2>
                <p>Higher Secondary School </p>
                <p>P JOG Institutes</p>
                <p><span>2020-2022</span></p>
            </div>
            <div className="education-detail">
                <h2>SSC </h2>
                <p>Schooling </p>
                <p>Sinhgad Spring Dale School</p>
                <p> <span>2007-2020</span></p>
            </div>
            
     </div>
    </div>  
  )
}

export default Education
