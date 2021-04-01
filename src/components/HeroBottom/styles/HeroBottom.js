import styled from "styled-components/macro";
import { WiStars } from "react-icons/wi";
import { FaUserFriends, FaRegHeart } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

export const HeroBottomContainer = styled.div`
  width: 100%;

  @media (min-width: 750px) {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }
`;

export const HeroBottomCard = styled.div`
  padding: 2.5em 0 5em 0;
  border-top: 1px solid #f1f1f1;
  border-left: 1px solid #f1f1f1;
  border-right: 1px solid #f1f1f1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 750px) {
    padding: 2.5em 3em 5em 3em;
    border: 0;
  }
`;

export const CardTitle = styled.h4`
  text-align: center;
`;

export const CardBody = styled.p`
  font-size: 0.7rem;
  text-align: center;
`;

export const CardLink = styled.a`
  display: block;
  font-weight: 900;
  text-align: center;
  font-size: 0.7rem;
  text-decoration: underline;
`;

export const RewardsIcon = styled(WiStars)`
  text-align: center;
  font-size: 4rem;
`;

export const ReferIcon = styled(FaUserFriends)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0.25em;
`;

export const StyledIcon = styled(GoPackage)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 0.25em;
`;

export const LikeIcon = styled(FaRegHeart)`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0.25em;
`;
