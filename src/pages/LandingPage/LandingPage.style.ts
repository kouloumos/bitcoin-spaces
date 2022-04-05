import styled from "@emotion/styled";

import theme from "src/theme/theme";
import { customScrollbars, flex, flexCenter } from "src/theme/functions";

export const PageWrapper = styled.div`
  ${flex};
  justify-content: space-evenly;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.black};
  font-family: "Oswald", sans-serif;
  color: ${theme.textColor};
  @media (min-width: 1000px) {
    height: 100vh;
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1.3;
  ${flexCenter};
  padding: 10px 0px;
  box-sizing: border-box;
  width: 100%;
  @media (min-width: 1000px) {
    max-height: 100%;
  }
`;

export const Content = styled.div`
  ${flex};
  flex-direction: column;
  width: 80%;
  align-self: flex-start;
  @media (min-width: 1000px) {
    ${customScrollbars};
    overflow-y: scroll;
    max-height: 100%;
    align-self: center;
  }
`;