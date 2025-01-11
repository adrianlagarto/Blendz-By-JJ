import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Service.scss"; // Import the SCSS file

const Service = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5070/Service");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="service-page">
      <h1>Service Page</h1>
      <p>Discover our services here.</p>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
