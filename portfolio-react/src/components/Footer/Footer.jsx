import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';
import mail from '../../assets/email.svg';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={mail} alt="Email Icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2023 Ayush Daphal. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Connect with me</p>
          <a className="connect-redirect" href="https://www.instagram.com/ayush.daphal/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className="connect-redirect" href="https://www.linkedin.com/in/ayushdaphal/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="connect-redirect" href="https://github.com/ayushdaphal" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
