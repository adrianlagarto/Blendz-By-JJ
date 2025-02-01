import React, { useEffect, useState } from "react";
//import ClientReview from "/components/ClientReview/ClientReview";
import "./Home.scss"; // Import SCSS file
//import barberChair from "../../assets/barber-chair.jpg"; // Example image

const Home = () => {
  const [message, setMessage] = useState("");
  const [availability, setAvailability] = useState({
    Monday: "8 AM - 5 PM",
    Tuesday: "8 AM - 5 PM",
    Wednesday: "8 AM - 5 PM",
    Thursday: "8 AM - 5 PM",
    Friday: "8 AM - 5 PM",
    Saturday: "Off",
    Sunday: "Off",
  });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5070/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        if (data.services && data.services.length > 0) {
          setAvailability(data.services[0].availability);
        }
        if (data.reviews) {
          setReviews(data.reviews);
        }
      });
  }, []);

  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Modern Cuts Barbershop</h1>
          <p>Your style, our passion.</p>
          <button className="cta-button">Book Now</button>
        </div>
        <img src={barberChair} alt="Barber Chair" className="hero-image" />
      </header>

      <section className="availability-section">
        <h2>Our Availability</h2>
        <ul>
          {Object.entries(availability).map(([day, hours]) => (
            <li key={day}>
              <strong>{day}:</strong> {hours}
            </li>
          ))}
        </ul>
      </section>

      <section className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="review-list">
          {reviews.map((review, index) => (
            <ClientReview
              key={index}
              clientName={review.clientName}
              comment={review.comment}
              rating={review.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
