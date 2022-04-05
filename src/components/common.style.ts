import styled from "@emotion/styled";
import { flexCenterVertical } from "src/theme/functions";
import theme from "src/theme/theme";

export const UserImage = styled.img`
  border-radius: 50%;
`;

export const HostTag = styled.div`
  font-size: 9px;
  padding: 1px 4px;
  margin-left: 5px;
  color: ${theme.colors.white};
  background-color: rgba(247, 147, 26, 0.3);
  border-radius: 2px;
  white-space: nowrap;
`;

export const UpdateStatus = styled.span`
  font-size: 10px;
  color: ${theme.colors.grey};
  @media (min-width: 1000px) {
    font-size: 14px;
  }
`;

export const TitleWrapper = styled.div`
  ${flexCenterVertical};
  justify-content: space-between;
  border-bottom: 2px solid ${theme.colors.primary};
  margin-bottom: 4px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: ${theme.colors.primary};
  text-transform: uppercase;
`;
