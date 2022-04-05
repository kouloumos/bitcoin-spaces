import styled from "@emotion/styled";

import { flexCenterVertical } from "src/theme/functions";

export const SummaryContainer = styled.div`
  ${flexCenterVertical};
  justify-content: space-between;
  font-size: 14px;
`;
export const ScheduledStart = styled.div`
  line-height: 1.1;
`;

type ListenersProps = {
  detailsOpen: boolean;
};
export const Listeners = styled.div<ListenersProps>`
  opacity: 0.9;

  span {
    transition: font-size 2s;
    font-size: ${(props) => (props.detailsOpen ? "18px" : "14px")};
  }
`;

type HostWrapperProps = {
  hide: boolean;
};
export const HostWrapper = styled.div<HostWrapperProps>`
  margin-left: 7px;
  ${flexCenterVertical};
  line-height: 1.1;
  transition: opacity 2s;
  opacity: ${(props) => (props.hide ? "0" : "1")};
`;

export const HostName = styled.div`
  text-align: right;
  margin-left: 7px;
`;