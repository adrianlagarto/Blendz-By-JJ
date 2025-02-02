import React from "react";
import "./About.scss"; // Import the SCSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your Trusted Barbershop Since 2010</p>
      </div>

      <div className="about-content">
        <section className="about-history">
          <h2>Our History</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget
            aliquam nisl nunc eget nisl. Nulla euismod, nisl eget aliquam
            ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
          </p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget
            aliquam nisl nunc eget nisl. Nulla euismod, nisl eget aliquam
            ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
          </p>
        </section>

        <section className="about-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="/images/barber1.jpg" // Replace with actual image path
                alt="Barber John"
              />
              <h3>John Doe</h3>
              <p>Master Barber</p>
            </div>
            <div className="team-member">
              <img
                src="/images/barber2.jpg" // Replace with actual image path
                alt="Barber Jane"
              />
              <h3>Jane Smith</h3>
              <p>Stylist</p>
            </div>
            <div className="team-member">
              <img
                src="/images/barber3.jpg" // Replace with actual image path
                alt="Barber Mike"
              />
              <h3>Mike Johnson</h3>
              <p>Beard Specialist</p>
            </div>
          </div>
        </section>

        <section className="about-services">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, eget
            aliquam nisl nunc eget nisl. Nulla euismod, nisl eget aliquam
            ultricies, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
