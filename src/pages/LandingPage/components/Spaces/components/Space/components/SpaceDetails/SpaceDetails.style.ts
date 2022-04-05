import styled from "@emotion/styled";

import {
  customScrollbars,
  flex,
  flexCenterVertical,
} from "src/theme/functions";

export const SpaceDetailsWrapper = styled.div`
  ${flex};
  flex-wrap: wrap-reverse;
  flex-direction: column-reverse;
  @media (min-width: 460px) {
    flex-direction: row;
  }
`;

export const GraphWrapper = styled.div`
  @media (min-width: 460px) {
    flex: 1;
  }
  height: 240px;
`;

export const SpeakersWrapper = styled.div`
  flex: 0.8;
  margin-left: 10px;
  max-height: 240px;
`;

export const SpeakersTitle = styled.div`
  margin: 10px 0px;
`;

export const SpeakersContainer = styled.div`
  ${customScrollbars};
  overflow-y: scroll;
  max-height: 200px;
`;

export const SpeakerWrapper = styled.div`
  margin-bottom: 7px;
  ${flexCenterVertical};
  line-height: 1.1;
  font-size: 14px;
`;

export const SpeakerName = styled.div`
  margin-left: 10px;
`;