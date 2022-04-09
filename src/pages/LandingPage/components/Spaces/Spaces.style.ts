import styled from "@emotion/styled";

import { flex } from "src/theme/functions";
import theme from "src/theme/theme";

export const NavBottom = styled.div`
  ${flex};
  justify-content: flex-end;
  padding: 10px 5px;
  a {
    text-decoration: none;
    color: ${theme.colors.primary};
  }
  opacity: 0.3;
  &:hover {
    opacity: 0.7;
  }
  transition: opacity 500ms;
`;
