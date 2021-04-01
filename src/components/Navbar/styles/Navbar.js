import styled from "styled-components/macro";
import { NavLink as Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiShoppingBagLine, RiAccountCircleLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const NavHeader = styled.div`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 2rem 0 1.25rem;
  //position: sticky;
  //top: 0;
`;

export const NavLogo = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1rem;
  color: #000;

  @media (min-width: 600px) {
    color: #000;
    font-size: 2rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1rem;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  font-size: 0.75rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;

  &:hover,
  &:focus {
    font-weight: 900;
  }
`;

export const RedLink = styled(NavLink)`
  color: red;
`;

export const Bars = styled(FaBars)`
  -webkit-text-stroke: 1px black;
  display: block;
  color: #000;
  position: absolute;
  top: 30px;
  left: 50px;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const ShoppingIcon = styled(RiShoppingBagLine)`
  position: absolute;
  top: 50px;
  right: 15px;
  font-size: 1.5rem;
`;

export const LocationIcon = styled(GrLocation)`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 1.5rem;
`;

export const AccountIcon = styled(RiAccountCircleLine)`
  display: none;
  position: absolute;
  top: 50px;
  right: 80px;
  font-size: 1.5rem;

  @media (min-width: 750px) {
  }
`;

export const Close = styled(FaTimes)`
  display: block;
  color: #000;
  position: absolute;
  top: 35px;
  left: 50px;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

export const NavBtn = styled.nav`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  cursor: pointer;
  transitions: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover,
  &:focus {
    transitions: all 0.2s ease-in-out;
    background: #fff;
    color: #010686;
  }
`;
