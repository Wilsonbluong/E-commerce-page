import React from "react";
import { Data } from "./data";
import SidebarSubMenu from "../SidebarSubmenu";

import { SidebarContainer, SidebarMenu, SidebarTab } from "./styles/Sidebar";

const Sidebar = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarMenu>
        {Data.map((item, index) => {
          return <SidebarSubMenu item={item} key={index} />;
        })}
        <SidebarTab to="/">Styled by Pacsun</SidebarTab>
        <SidebarTab to="/">Gift Cards</SidebarTab>
        <SidebarTab to="/">Get Email</SidebarTab>
        <SidebarTab to="/">Help</SidebarTab>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
