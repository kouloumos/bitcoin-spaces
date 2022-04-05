import React, { memo, useMemo } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "@mui/material";

import { SpaceV2 } from "src/models/Spaces";
import theme from "src/theme/theme";

import { SpaceDetails, Summary } from "./components";
import {
  DetailsChevron,
  LanguageTag,
  LanguageTagTitleWrapper,
  SpaceWrapper,
  Title,
  TitleWrapper,
} from "./Space.style";

const spaceLink = (id: string) => {
  return `https://twitter.com/i/spaces/${id}${
    window.screen.width > 768 ? "/peek" : ""
  }`;
};

type Props = {
  index: number;
  showDetails?: boolean;
  onChevronClick: (index: number, show: boolean) => void;
} & SpaceV2;

const Space = ({
  index,
  showDetails = false,
  onChevronClick: setShowDetails,
  state, 
  lang,
  title,
  scheduled_start,
  _id: id,
  host_ids,
  speaker_ids,
  participants_stats,
  started_at,
  updated_at,
}: Props) => {
  //const queryClient = useQueryClient();
  const hostName = host_ids[0]?.name || "";
  const speakers = useMemo(() => {
    const coHosts = new Set(host_ids.map((host) => host._id).slice(1));

    const difference = speaker_ids?.filter(
      (speaker) => !coHosts.has(speaker._id)
    );
    return difference;
  }, [host_ids, speaker_ids]);

  const configParticipantCount = () => {
    if (participants_stats === undefined) return participants_stats;
    switch (state) {
      case "ended":
        return Math.max(...participants_stats);
      default:
        return participants_stats[participants_stats?.length - 1];
    }
  };

  // @TODO
  // const InvalidateTimer = () => {
  //   // run timeinterval to check if we are  out of the data
  //   // window and invalidateQueries
  //   queryClient.invalidateQueries()
  // }

  return (
    <SpaceWrapper>
      <TitleWrapper>
        <LanguageTagTitleWrapper>
          <LanguageTag>{`[${lang}]`}</LanguageTag>
          <Title href={spaceLink(id)} target="_blank" rel="noreferrer">
            {title || `${hostName}’s space`}
          </Title>
        </LanguageTagTitleWrapper>
        {(state === "live" || state === "ended") && (
          <DetailsChevron
            open={showDetails}
            icon={faChevronDown}
            color={theme.colors.primary}
            onClick={() => setShowDetails(index, !showDetails)}
          />
        )}
      </TitleWrapper>
      {(state === "live" || state === "ended") && (
        <Collapse in={showDetails} timeout={1500}>
          <SpaceDetails
            participants_stats={participants_stats}
            updated_at={updated_at}
            host_ids={host_ids}
            speaker_ids={speakers}
          />
        </Collapse>
      )}
      <Summary
        showDetails={showDetails}
        hostName={hostName}
        state={state}
        participant_count={configParticipantCount()}
        scheduled_start={scheduled_start}
        updated_at={updated_at}
      />
    </SpaceWrapper>
  );
};

export default memo(Space);
