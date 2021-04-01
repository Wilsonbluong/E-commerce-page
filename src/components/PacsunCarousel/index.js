import React from "react";
import Carousel from "react-elastic-carousel";
import "./styles/PacsunCarousel.css";

const PacsunCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 500, itemsToShow: 4 },
    { width: 700, itemsToShow: 5 },
    { width: 875, itemsToShow: 6 },
    { width: 925, itemsToShow: 7 },
  ];

  return (
    <>
      <h3 className="carouselHeader">Show us your looks using #PacFamily</h3>
      <Carousel
        className="carousel"
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={2000}
      >
        <img
          className="carouselImg"
          src="images/carousel/carousel1.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel2.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel3.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel4.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel5.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel6.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel7.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel8.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel9.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel10.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel11.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel12.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel13.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel14.jpg"
          alt=""
        />
        <img
          className="carouselImg"
          src="images/carousel/carousel15.jpg"
          alt=""
        />
      </Carousel>
    </>
  );
};

export default PacsunCarousel;
