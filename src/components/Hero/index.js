import React from "react";
import HeroBottom from "../HeroBottom";
import HeroGallery from "../HeroGallery";
import HeroGrid from "../HeroGrid";
import MostPopular from "../MostPopular";
import PacsunCarousel from "../PacsunCarousel";
import HeroBanner from "../HeroBanner";
import { ShippingText } from "./styles/Hero";

const Hero = () => {
  return (
    <>
      <HeroBanner />
      <HeroGallery />
      <MostPopular />
      <HeroGrid />
      <HeroBottom />
      <ShippingText>
        *Valid on select styles. Savings not applicable to taxes. Free standard
        shipping on jeans, pants or swim orders. Free standard shipping or $8
        express shipping on orders over $50. U.S. only. Shipments to AK, HI, PR
        and Military APO/FPO do not qualify for free shipping. Offer subject to
        change.
      </ShippingText>
      <PacsunCarousel />
    </>
  );
};

export default Hero;
