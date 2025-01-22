import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    howDidYouHear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Have any questions or need more information? We’d love to hear from you!
        Feel free to reach out to us directly, and we will be happy to assist
        you.
      </p>
      <p>How did you hear about our barbershop?</p>
      <p>
        Let us know where you found out about us—we are always eager to know how
        we are reaching new clients.
      </p>
      <p>
        Thank you for visiting our website, and we look forward to serving you
        soon!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name (required)</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name (required)</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email (required)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message (required)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="howDidYouHear">
            How did you hear about us? (required)
          </label>
          <input
            type="text"
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
