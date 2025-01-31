import React from "react";
import "./ClientReview.scss";

const ClientReview = ({ clientName, comment, rating }) => {
  return (
    <div className="client-review">
      <h3>{clientName}</h3>
      <p>{comment}</p>
      <p>
        <strong>Rating:</strong> {rating} / 5
      </p>
    </div>
  );
};

export default ClientReview;
