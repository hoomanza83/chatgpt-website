import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import yalda from "../../../images/carousel/yalda.jpg";
import fiveYear from "../../../images/carousel/five-year-birth.webp";
import halloween from "../../../images/carousel/eight-month-birth-halloween.jpg";
import newborn from "../../../images/carousel/one-month-special.webp";
import CarouselCard from "./carouselCard";

const Carousel = () => {
  const carouselData = [
    {
      imageURL: halloween,
      title: "Halloween Theme",
      description:
        "A fun and spooky photo session with babies dressed in Halloween costumes.",
    },
    {
      imageURL: yalda,
      title: "Winter Wonderland",
      description:
        "A magical winter photo session with babies and families surrounded by snow and winter wonders.",
    },
    {
      imageURL: newborn,
      title: "Newborn Babies",
      description:
        "Capturing the beauty and innocence of newborn babies in a timeless and beautiful way.",
    },
    {
      imageURL: fiveYear,
      title: "Newborn Babies",
      description:
        "Capturing the beauty and innocence of newborn babies in a timeless and beautiful way.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const slider = true;
  let renderSlider = "";
  renderSlider =
    slider === true
      ? carouselData.map((item, index) => (
          <CarouselCard key={index} data={item} />
        ))
      : "";

  return (
    <div className="slider">
      <Slider {...sliderSettings}>{renderSlider}</Slider>
    </div>
  );
};

export default Carousel;
