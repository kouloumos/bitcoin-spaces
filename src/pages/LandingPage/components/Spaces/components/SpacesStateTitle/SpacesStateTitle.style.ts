import styled from "@emotion/styled";

import { flexCenterVertical } from "src/theme/functions";
import { UpdateStatus } from "src/components/common.style";

export const LiveTitleWrapper = styled.span`
  ${flexCenterVertical};
`;

type LiveCircleProps = {
  state: "live" | "ended";
};
export const LiveCircle = styled.div<LiveCircleProps>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.state === "live" ? "rgb(239, 68, 68)" : "rgb(75, 85, 99)"};
  margin-right: 7px;
`;

export const UpdateDetails = styled(UpdateStatus)`
  display: none;
  @media (min-width: 1000px) {
    display: inline;
  }
`;