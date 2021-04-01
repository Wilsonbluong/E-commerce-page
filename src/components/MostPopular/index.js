import React from "react";
import Carousel from "react-elastic-carousel";
import "./styles/MostPopular.css";

const MostPopular = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 500, itemsToShow: 4 },
    { width: 700, itemsToShow: 4 },
    { width: 875, itemsToShow: 4 },
    { width: 925, itemsToShow: 5 },
  ];
  return (
    <>
      <h3 className="mostPopularHeader">Most Popular</h3>
      <p className="mostPopularLink">Show All</p>
      <Carousel
        className="carousel"
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={5000}
        itemsToScroll={5}
      >
        <img className="popularImg" src="images/mostPopular/pop1.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop2.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop3.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop4.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop5.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop6.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop7.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop8.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop9.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop10.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop11.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop12.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop13.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop14.jpg" alt="" />
        <img className="popularImg" src="images/mostPopular/pop15.jpg" alt="" />
      </Carousel>
    </>
  );
};

export default MostPopular;
