import React from 'react'
import {
  NavContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  FaIcon,
  NavLinks,
} from "./NavbarStyles";

const Navbar = ({ toggle }) => {
  return (
    <NavContainer>
      <NavLinks to="/" spy={true} smooth={true} duration={500} className='ojay'>
        {" "}
        OJAY{" "}
      </NavLinks>
      <MobileIcon onClick={toggle}>
        <FaIcon />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks to="/project" spy={true} smooth={true} duration={500}>
            {" "}
            Work{" "}
          </NavLinks>
        </NavItem>

        <NavItem>
          <NavLinks to="/about" spy={true} smooth={true} duration={500}>
            {" "}
            About{" "}
          </NavLinks>
        </NavItem>
        <NavItem>
          <a href="mailto:prince.ibrahim@gmail.com"> Contact </a>
        </NavItem>
      </NavMenu>

      {/* </motion.div> */}
    </NavContainer>
  );
};

export default Navbar