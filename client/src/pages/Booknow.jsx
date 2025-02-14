import React, { useEffect, useState } from "react";
import axios from "axios";

const BookNow = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get("http://localhost:5070/booknow");
        setSchedule(response.data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div>
      <h1>Book Now</h1>
      <ul>
        {schedule.map((item, index) => (
          <li key={index}>
            Date: {item.date}, Time: {item.time}, Price: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookNow;
