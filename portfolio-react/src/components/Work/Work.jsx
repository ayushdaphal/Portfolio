import React from 'react';
import mywork_data from '../../assets/mywork_data';
import './Work.css'

const Work = () => {
  return (
    <div id="work" class="mywork">
        <div className="work-title">
            <h1>Work Experience</h1>
        </div>
        <div className="work-fields">
      {mywork_data.map((work, index) => (
        <div key={index} className="work-item">
        <h2>{work.w_name}</h2>
        <h4>{work.w_date}</h4>
        <h3 >{work.w_company}</h3>
        <p >{work.w_description}</p>
        <p ><strong>Tools:</strong> {work.w_tools}</p>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Work;


