import React from "react";

import { NavbarWrapper, NavBarItem } from "./Navbar.style";

const Navbar = () => {

  return (
    <NavbarWrapper>
      <NavBarItem to="/hosts">/hosts</NavBarItem>
      <NavBarItem to="/speakers">/speakers</NavBarItem>
      <NavBarItem to="/live">/live</NavBarItem>
      <NavBarItem to="/scheduled">/scheduled </NavBarItem>
    </NavbarWrapper>
  );
};

export default Navbar;
