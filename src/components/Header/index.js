import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Submenu from "../Submenu";
import Slider from "../Slider";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && window.innerWidth < 960) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  return (
    <>
      <Slider />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Submenu />
    </>
  );
}

export default Header;
