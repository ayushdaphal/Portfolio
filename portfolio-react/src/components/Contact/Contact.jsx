import React from 'react'
import './Contact.css'
import mail from '../../assets/email.svg'
import phone from '../../assets/phone.svg'
import location from  '../../assets/location.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "77741591-48ac-4da6-9970-c82d0939131d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          event.target.reset();
        }
      };

  return (
    <div id="contact" className="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail} alt=""/>
                        <p>ayushdaphal111@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt=""/>
                        <p>+91 77580 95607</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt=""/>
                        <p>Pune, Maharashtra, India</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email id' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea rows="8" placeholder='Enter your message' name='message'/>

                <button type="submit" className="contact-submit">Submit now</button>
            </form>
 
        </div>
      
    </div>
  )
}

export default Contact
