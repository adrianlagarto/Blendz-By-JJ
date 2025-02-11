import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./InstagramIcon.scss"; // Import the SCSS file

const InstagramIcon = () => {
  return (
    <a
      href="https://www.instagram.com/" // Replace with your Instagram link
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-icon"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  );
};

export default InstagramIcon;
