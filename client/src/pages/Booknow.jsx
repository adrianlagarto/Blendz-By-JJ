import React, { useEffect, useState } from "react";

const BookNow = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("/Booknow")
      .then((response) => response.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error("Error fetching schedule:", error));
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
