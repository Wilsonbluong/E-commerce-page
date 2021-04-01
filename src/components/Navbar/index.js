import React, { useState } from "react";
import {
  Nav,
  NavHeader,
  NavLogo,
  NavLink,
  Bars,
  Close,
  NavMenu,
  RedLink,
  ShoppingIcon,
  LocationIcon,
  AccountIcon,
} from "./styles/Navbar";
import { useGlobalContext } from "../../context/submenu";

const Navbar = ({ toggle, isOpen }) => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 10;
    openSubmenu(page, { center, bottom });
  };

  const hideSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <>
      <NavHeader>
        <NavLink to="/">
          <NavLogo>Pacsun</NavLogo>
        </NavLink>
        <AccountIcon />
        <ShoppingIcon />
        <LocationIcon />
        {!isOpen ? <Bars onClick={toggle} /> : <Close onClick={toggle} />}
      </NavHeader>
      <Nav onMouseOver={hideSubmenu}>
        <NavMenu>
          <NavLink
            to="/about"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Women
          </NavLink>
          <NavLink
            to="/services"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Men
          </NavLink>
          <NavLink
            to="/contact-us"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Unisex
          </NavLink>
          <NavLink
            to="/sign-up"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Jeans
          </NavLink>
          <NavLink
            to="/sign-up"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Swim
          </NavLink>
          <NavLink
            to="/sign-up"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Brands
          </NavLink>
          <RedLink
            to="/sign-up"
            className="link-btn"
            onMouseOver={displaySubmenu}
          >
            Sale
          </RedLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
