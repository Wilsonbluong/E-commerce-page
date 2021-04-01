import React from "react";

import {
  HeroBottomContainer,
  HeroBottomCard,
  CardTitle,
  CardBody,
  CardLink,
  RewardsIcon,
  ReferIcon,
  StyledIcon,
  LikeIcon,
} from "./styles/HeroBottom";

const HeroBottom = () => {
  return (
    <>
      <HeroBottomContainer>
        <HeroBottomCard>
          <RewardsIcon />
          <CardTitle>PacSun Rewards</CardTitle>
          <CardBody>$5 Reward just for signing up!</CardBody>
          <CardLink>Learn More</CardLink>
        </HeroBottomCard>
        <HeroBottomCard>
          <ReferIcon />
          <CardTitle>Refer a Friend</CardTitle>
          <CardBody>Give 15% off to get 15% off</CardBody>
          <CardLink>Learn More</CardLink>
        </HeroBottomCard>
        <HeroBottomCard>
          <StyledIcon />
          <CardTitle>STYLED</CardTitle>
          <CardBody>Discover our curated subscription</CardBody>
          <CardLink>Learn More</CardLink>
        </HeroBottomCard>
        <HeroBottomCard>
          <LikeIcon />
          <CardTitle>Like Our Stuff</CardTitle>
          <CardBody>Like It. Save It. Buy It.</CardBody>
          <CardLink>Shop With Us</CardLink>
        </HeroBottomCard>
      </HeroBottomContainer>
    </>
  );
};

export default HeroBottom;
