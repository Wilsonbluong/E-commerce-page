import React from "react";

import {
  HeroGridContainer,
  HeroGridCard,
  HeroGridLeft,
  HeroGridRight,
  HeroGridTitle,
  HeroGridLink,
} from "./styles/HeroGrid";

const HeroGrid = () => {
  return (
    <>
      <HeroGridContainer>
        <HeroGridCard>
          <HeroGridLeft>
            <HeroGridTitle>Buy Online</HeroGridTitle>
            <HeroGridTitle>Pick Up In Store</HeroGridTitle>
          </HeroGridLeft>
          <HeroGridRight>
            <HeroGridTitle>10% Off Your Order</HeroGridTitle>
            <HeroGridLink>Details {">"}</HeroGridLink>
          </HeroGridRight>
        </HeroGridCard>
        <HeroGridCard>
          <HeroGridLeft>
            <HeroGridTitle>In-Store Safety</HeroGridTitle>
          </HeroGridLeft>
          <HeroGridRight>
            <HeroGridTitle>Find An Open Store</HeroGridTitle>
            <HeroGridLink>Details {">"}</HeroGridLink>
          </HeroGridRight>
        </HeroGridCard>
        <HeroGridCard>
          <HeroGridLeft>
            <HeroGridTitle>Pac Cares</HeroGridTitle>
            <HeroGridTitle>Black Lives Matter</HeroGridTitle>
          </HeroGridLeft>
          <HeroGridRight>
            <HeroGridTitle>Be The Change</HeroGridTitle>
            <HeroGridLink>Learn More {">"}</HeroGridLink>
          </HeroGridRight>
        </HeroGridCard>
      </HeroGridContainer>
    </>
  );
};

export default HeroGrid;
