import React from 'react';
import './LandingPage.css';
import logo from './img/athidhi-logo.png';
import logosymbol from './img/logosymbol.jpeg';
import qrCode from './img/qr.svg';

const LandingPage = () => {
  return (
    <div className="landing-bg">
      <div className="main-content">
        <div className="center-content">
          <div className="logo-absolute-center">
            {/* <img src={logosymbol} alt="Side Right" className="side-image absolute-symbol right-symbol" /> */}
            <img src={logo} alt="Symbol" className="symbol-gold" />
          </div>
          <h1 className="coming-soon">Coming Soon</h1>
          <p className="subtitle">Get ready everyone! We are currently working on something awesome.</p>
        </div>
        <div className="info-section">
          <div className="contact-details">
            <h2>Contact Us</h2>
            <p>For all enquiries call:</p>
            <p><strong>+91 972 292 7897</strong></p>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="insta-link">
              <i className="fab fa-instagram"></i>
            </a>
            {/* <p>Email: <a href="mailto:info@athidhiaalayam.com">info@athidhiaalayam.com</a></p> */}
          </div>
          <div className="menu-qr">
            <h2>Menu QR Code</h2>
            <img src={qrCode} alt="Menu QR Code" className="qr-image" />
          </div>
        </div>
      </div>
      <footer className="footer">
      13089 Main St, Suite #100, Frisco TX 75035
      </footer>
    </div>
  );
};

export default LandingPage; 