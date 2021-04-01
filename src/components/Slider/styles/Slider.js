import styled from "styled-components";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const Header = styled.section`
  display: flex;
  text-align: center;
  color: #fff;
  background-color: #000;
  text-align: center;
  height: 40px;
  position: relative;
  overflow: hidden;
`;

export const Headline = styled.article`
  position: absolute;
  top: 13px;
  // left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0.6rem;
  letter-spacing: 1.6px;
  transition: all 0.3s linear;

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }

  @media (min-width: 750px) {
    font-size: 0.8rem;
    top: 10px;
  }
`;

export const Prev = styled(FiChevronLeft)`
  position: absolute;
  left: 5px;
  top: 10px;
  border-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const Next = styled(FiChevronRight)`
  position: absolute;
  right: 5px;
  top: 10px;
  border-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
`;
