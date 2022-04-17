import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, description } = review;
  return (
    <div className="d-flex">
      <div className="image-container">
        <img src={img} alt="" className="card-image" />
      </div>
      <div>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
