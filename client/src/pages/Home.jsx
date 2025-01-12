import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("http://127.0.0.1:5070/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        if (data.services && data.services.length > 0) {
          setAvailability(data.services[0].availability);
        }
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <p>Message from Backend: {message}</p>

      <h2>Availability</h2>
      <ul>
        {Object.entries(availability).map(([day, hours]) => (
          <li key={day}>
            <strong>{day}:</strong> {hours}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
