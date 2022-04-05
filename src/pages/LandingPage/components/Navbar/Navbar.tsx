import React from "react";
import { useLocation } from "react-router-dom";

import { NavbarWrapper, NavBarItem } from "./Navbar.style";

const Navbar = () => {
  const location = useLocation();
  const inHallofFame = ["/hosts", "/speakers"].includes(location.pathname);
  const inLive = ["/", "/live"].includes(location.pathname);

  return (
    <NavbarWrapper>
      {!inHallofFame ? (
        <NavBarItem to="/hosts">/HALL OF FAME</NavBarItem>
      ) : (
        <>
          <NavBarItem to="/hosts">/hosts</NavBarItem>
          <NavBarItem to="/speakers">/speakers</NavBarItem>
        </>
      )}
      {!inLive && <NavBarItem to="/live">/live</NavBarItem>}
      {location.pathname !== "/scheduled" && !inHallofFame && (
        <NavBarItem to="/scheduled">/scheduled </NavBarItem>
      )}
      {location.pathname !== "/ended" && !inHallofFame && (
        <NavBarItem to="/ended">/ended </NavBarItem>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;