import React from "react";
import { useNavigate } from "react-router-dom";

const BookNowButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booknow");
  };

  return <button onClick={handleClick}>Book Now</button>;
};

export default BookNowButton;
