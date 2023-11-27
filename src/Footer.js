import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: GMANappliances@damalware.com</p>
          <p>Phone: 9655893592</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/_laksh.man_/" target="_blank" rel="noopener noreferrer"><img className='insta' src='https://cdn-icons-png.flaticon.com/128/2111/2111463.png' alt=''></img></a>
            <a href="https://twitter.com/BoschHomeUS" target="_blank" rel="noopener noreferrer"><img className='insta' src='https://cdn-icons-png.flaticon.com/128/733/733579.png'  alt=''></img></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img className='insta' src='https://cdn-icons-png.flaticon.com/128/733/733547.png' alt=""></img></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Appliance booking System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
