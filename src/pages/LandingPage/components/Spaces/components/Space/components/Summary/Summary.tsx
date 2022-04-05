import React, { memo } from "react";

import { HostTag } from "src/components/common.style";
import { SpaceV2 } from "src/models/Spaces";
import { localeOptions } from "src/utils/common";

import {
  SummaryContainer,
  ScheduledStart,
  Listeners,
  HostWrapper,
  HostName,
} from "./Summary.style";

type Props = {
  showDetails: boolean;
  hostName: string;
  participant_count?: number;
} & Pick<SpaceV2, "state" | "scheduled_start" | "updated_at">;

const Summary = ({
  showDetails,
  state,
  scheduled_start,
  participant_count,
  hostName,
  updated_at,
}: Props) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString(undefined, localeOptions);
  };
  return (
    <SummaryContainer>
      {state === "scheduled" && scheduled_start && (
        <ScheduledStart>{formatDate(scheduled_start)}</ScheduledStart>
      )}
      {state === "live" && (
        <Listeners detailsOpen={showDetails}>
          <span>{`${participant_count}`}</span> listening
        </Listeners>
      )}
      {state === "ended" && updated_at && (
        <ScheduledStart>{`Ended ${formatDate(
          updated_at
        )} with peak ${participant_count} listeners`}</ScheduledStart>
      )}
      <HostWrapper hide={showDetails}>
        {/* <HostImage alt="profile" width={20} src={host_ids[0].profile_image_url} /> */}
        <HostName>{hostName}</HostName>
        <HostTag>HOST</HostTag>
      </HostWrapper>
    </SummaryContainer>
  );
};

export default memo(Summary);