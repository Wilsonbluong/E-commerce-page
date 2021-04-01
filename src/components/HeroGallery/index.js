import React from "react";
import "./styles/HeroGallery.css";

import {
  HeroGalleryTop,
  HeroGalleryBottom,
  HeroGalleryContainer,
  HeroGalleryMain,
} from "./styles/HeroGallery.js";

const HeroGallery = () => {
  return (
    <>
      <HeroGalleryContainer>
        <HeroGalleryMain>
          <img
            className="gallery-main"
            src="/images/heroGallery/gallery5.jpg"
            alt=""
          />
        </HeroGalleryMain>
        <HeroGalleryTop>
          <img
            className="gallery-img"
            src="/images/heroGallery/gallery1.jpg"
            alt=""
          />
          <img
            className="gallery-img"
            src="/images/heroGallery/gallery2.jpg"
            alt=""
          />
        </HeroGalleryTop>
        <HeroGalleryBottom>
          <img
            className="gallery-img"
            src="/images/heroGallery/gallery3.jpg"
            alt=""
          />
          <img
            className="gallery-img"
            src="/images/heroGallery/gallery4.jpg"
            alt=""
          />
          <img
            className="gallery-img"
            src="/images/heroGallery/womens6.webp"
            alt=""
          />
        </HeroGalleryBottom>
      </HeroGalleryContainer>
    </>
  );
};

export default HeroGallery;
