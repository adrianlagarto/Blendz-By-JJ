import React, { useState, useEffect } from "react";
import axios from "axios";

const ScheduleManager = () => {
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await axios.get("/booknow");
      setSchedule(response.data);
      setNewSchedule(response.data);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedSchedule = [...newSchedule];
    updatedSchedule[index][field] = value;
    setNewSchedule(updatedSchedule);
  };

  const handleSave = async () => {
    try {
      await axios.post("/booknow", newSchedule);
      setSchedule(newSchedule);
      alert("Schedule updated successfully");
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  return (
    <div>
      <h1>Schedule Manager</h1>
      {newSchedule.map((item, index) => (
        <div key={index}>
          <input
            type="date"
            value={item.date}
            onChange={(e) => handleInputChange(index, "date", e.target.value)}
          />
          <input
            type="time"
            value={item.time}
            onChange={(e) => handleInputChange(index, "time", e.target.value)}
          />
          <input
            type="number"
            value={item.price}
            onChange={(e) => handleInputChange(index, "price", e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSave}>Save Schedule</button>
    </div>
  );
};

export default ScheduleManager;
