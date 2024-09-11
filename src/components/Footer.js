import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span>&copy; Eniola Farinde, 2024</span>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" style={{ color: '#c19400' }}></i>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram" style={{ color: '#c19400' }}></i>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter" style={{color: '#c69400'}}></i>
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github" style={{color: '#c49400'}}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
