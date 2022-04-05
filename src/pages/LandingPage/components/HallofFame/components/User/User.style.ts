import styled from "@emotion/styled";

import { flex, flexCenterVertical } from "src/theme/functions";
import theme from "src/theme/theme";

export const UserWrapper = styled.div`
  ${flex};
  flex-direction: column;
  padding: 10px 0px;
`;

export const HighlightedNumber = styled.div`
  font-size: 24px;
`;

export const UserName = styled.a`
  text-decoration: none;
  color: ${theme.textColor};
  cursor: pointer;
  margin-left: 10px;
`;

export const TitleWrapper = styled.div`
  ${flexCenterVertical};
  width: 100%;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const UserNameWrapper = styled.div`
  ${flexCenterVertical};
`;

export const SpacesNumberWrapper = styled.div`
  ${flex};
  opacity: 0.6;
  align-items: flex-start;
  &:hover {
    opacity: 0.9;
  }
  transition: opacity 500ms;
  cursor: pointer;
`;