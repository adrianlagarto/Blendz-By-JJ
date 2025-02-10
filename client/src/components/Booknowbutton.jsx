import React from "react";
import "./Booknowbutton.scss";
import { useNavigate } from "react-router-dom";

const BookNowButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booknow");
  };

  return (
    <button
      className="book-now-button"
      aria-label="Book Now"
      onClick={handleClick}
    >
      Book Now
    </button>
  );
};

export default BookNowButton;
