import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import theme from "src/theme/theme";
import { flex } from "src/theme/functions";

export const NavbarWrapper = styled.div`
  ${flex};
  position: absolute;
  top: 10px;
  left: 5px;
  font-size: 14px;
`;

export const NavBarItem = styled(NavLink)`
  padding: 0px 20px;
  text-decoration: none;
  color: ${theme.colors.primary};
  opacity: 0.6;
  &.active,
  &:hover {
    opacity: 0.9;
  }
  transition: opacity 500ms;
`;