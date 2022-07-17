import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  Contact,
} from "./NavbarStyles";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/project" onClick={toggle}>
            Project
          </SidebarLink>

          <Contact>
            <a href="mailto:prince.ibrahim76@gmail.com">Contact</a>
          </Contact>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
