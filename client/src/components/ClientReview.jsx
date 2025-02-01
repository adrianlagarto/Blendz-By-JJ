import React from "react";
import "./ClientReview.scss";

const ClientReview = ({ clientName, comment, rating }) => {
  return (
    <div className="client-review">
      <h3>{clientName}</h3>
      <p>{comment}</p>
      <div className="rating">Rating: {rating}/5</div>
    </div>
  );
};

export default ClientReview;
