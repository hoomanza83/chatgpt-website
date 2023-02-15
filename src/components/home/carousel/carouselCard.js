import React from "react";
import "./carouselCard.css";
const CarouselCard = (props) => {
  const { data } = props;
  return (
    <div key={data.index} className="carousel">
      <img src={data.imageURL} alt={data.title} />
      <h3>{data.title}</h3>
      <p className="testimonial-text">{data.description}</p>
    </div>
  );
};

export default CarouselCard;
