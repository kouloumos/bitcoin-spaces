import styled from "@emotion/styled";

import { flex, flexCenter } from "src/theme/functions";
import theme from "src/theme/theme";

export const DescriptionWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  min-height: 200px;
  @media (min-width: 1000px) {
    flex: 1;
  }
`;

export const DescriptionContent = styled.div`
  width: 80%;
`;

export const TitleWrapper = styled.div`
  ${flex};
  flex-wrap: wrap;
  margin-bottom: 16px;
  margin-top: 40px;
  @media (min-width: 1000px) {
    margin-top: 24px;
  }
`;
export const Title = styled.span`
  color: ${theme.colors.primary};
  line-height: 1;
  font-size: 42px;
  @media (min-width: 460px) {
    font-size: 56px;
  }
`;

export const FeedbackLink = styled.a`
  color: ${theme.colors.orange};
  opacity: 0.2;
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
  margin-left: 5px;
`;