import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./Service.scss"; // Import the SCSS file

const Service = () => {
  // const [services, setServices] = useState([]);

  // const fetchServices = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5070/Service");
  //     setServices(response.data.services);
  //   } catch (error) {
  //     console.error("Error fetching services:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchServices();
  // }, []);

  const services = [
    {
      Service_type: "Haircut",
      Price: 25,
      Description: "Professional haircut tailored to your style.",
    },
    {
      Service_type: "dolorem inventore, nobis ",
      Price: 15,
      Description: "Lorem ipsum dolor sit",
    },
    {
      Service_type: "inventore",
      Price: 35,
      Description: "asperiores, quasi quia iure? Omnis necessitatibus ",
    },
    {
      Service_type: "Lorema da dawa",
      Price: 30,
      Description:
        ", animi asperiores dolorem inventore, nobis officia quasi sit.",
    },
  ];

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <p>Discover our services and prices below.</p>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h2>{service.Service_type}</h2>
            <p className="price">${service.Price}</p>
            <p className="description">{service.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
