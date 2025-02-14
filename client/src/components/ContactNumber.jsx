import React from "react";
import "./ContactNumber.module.scss";

const ContactNumber = ({ phoneNumber }) => {
  return (
    <section className="contact-number-section">
      <div className="contact-number-content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        <a href={`tel:${phoneNumber}`} className="contact-button">
          {phoneNumber}
        </a>
      </div>
    </section>
  );
};

export default ContactNumber;
