import React from "react";
import "./Reviews.css";
import person1 from "../../../images/reviews/person-1.jpg";
import person2 from "../../../images/reviews/person-2.jpg";
import person3 from "../../../images/reviews/person-3.jpg";
import Review from "../Review/Review";

const reviews = [
  {
    id: 1,
    name: "Andy Smith",
    img: person1,
    description:
      "His customer support was amazing.His help was quick and gave me instruction to follow",
  },
  {
    id: 2,
    name: "Jack Lee",
    img: person2,
    description:
      "His customer support was amazing.His help was quick and gave me instruction to follow",
  },
  {
    id: 3,
    name: "Abdul Samad",
    img: person3,
    description:
      "His customer support was amazing.His help was quick and gave me instruction to follow",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section ">
      <h2 className="text-center my-5">Customer Reviews</h2>
      <div className="review-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
