import React from "react";
import "./Footer.scss"; // Import SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2025 Your Company Name. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
