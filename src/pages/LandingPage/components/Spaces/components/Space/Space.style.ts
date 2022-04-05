import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { flex, flexCenterVertical } from "src/theme/functions";
import theme from "src/theme/theme";

export const SpaceWrapper = styled.div`
  ${flex};
  flex-direction: column;
  margin-bottom: 15px;
`;

export const TitleWrapper = styled.div`
  ${flexCenterVertical};
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Title = styled.a`
  font-size: 18px;
  color: ${theme.textColor};
  text-decoration: none;
`;

export const LanguageTagTitleWrapper = styled.span`
  ${flexCenterVertical};
`;

type DetailsChevronProps = {
  open: boolean;
};
export const DetailsChevron = styled(FontAwesomeIcon)<DetailsChevronProps>`
  margin-left: 5px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 1s;
  transition: transform 1.5s;
  ${(props) => props.open && `transform: rotate(180deg);`}
  &:hover {
    opacity: 1;
  }
`;

export const LanguageTag = styled.span`
  font-size: 14px;
  color: ${theme.colors.grey};
  margin-right: 7px;
`;