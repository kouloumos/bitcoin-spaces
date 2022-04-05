import React, { memo, useMemo } from "react";
import {
  Brush,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { HostTag, UserImage } from "src/components/common.style";
import { SpaceV2 } from "src/models/Spaces";
import theme from "src/theme/theme";

import {
  GraphWrapper,
  SpaceDetailsWrapper,
  SpeakerName,
  SpeakersContainer,
  SpeakersTitle,
  SpeakersWrapper,
  SpeakerWrapper,
} from "./SpaceDetails.style";

type Props = Pick<
  SpaceV2,
  "participants_stats" | "host_ids" | "speaker_ids" | "updated_at"
>;

const SpaceDetails = ({
  participants_stats,
  updated_at,
  host_ids,
  speaker_ids,
}: Props) => {
  const updatedAt = updated_at ? new Date(updated_at) : undefined;

  const configureGraphData = useMemo(() => {
    if (!participants_stats) return [];
    const data = participants_stats.map((point, index) => {
      const normalizedPoint = point === 0 && index !== 0 ? null : point;
      return { x: normalizedPoint, index };
    });
    return data;
  }, [participants_stats]);

  const initialStartIndex = useMemo(() => {
    if (participants_stats === undefined) return 0;

    if (participants_stats.length > 12) {
      return participants_stats.length - 12;
    } else {
      return 0;
    }
  }, [participants_stats]);

  const formatTick = (value: any, index: number) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    if (!updatedAt || !participants_stats) return "";
    const time = new Date(updatedAt);
    time.setMinutes(
      time.getMinutes() - (participants_stats.length - 1 - index) * 5
    );
    return time.toLocaleString(undefined, options);
  };
  return (
    <SpaceDetailsWrapper>
      {participants_stats && participants_stats.length > 1 && (
        <GraphWrapper>
          <SpeakersTitle>{`Listeners Trend`}</SpeakersTitle>

          <ResponsiveContainer height="80%">
            <LineChart
              data={configureGraphData}
              margin={{ top: 5, right: 40, bottom: 5, left: -20 }}
            >
              <Line
                connectNulls
                type="monotone"
                dataKey="x"
                stroke={theme.colors.primary}
                strokeWidth={2}
                dot={false}
              />
              <YAxis dataKey={"x"} />
              <XAxis
                dataKey={"e"}
                height={15}
                stroke={theme.colors.black}
                tickLine={false}
              />

              <Brush
                stroke={"rgba(247, 147, 26, 0.9)"}
                fill={theme.colors.grey}
                dataKey={"index"}
                height={20}
                travellerWidth={12}
                startIndex={initialStartIndex}
                tickFormatter={formatTick}
                alwaysShowText
              />
            </LineChart>
          </ResponsiveContainer>
        </GraphWrapper>
      )}
      <SpeakersWrapper>
        <SpeakersTitle>Speakers</SpeakersTitle>
        <SpeakersContainer>
          {host_ids.map((host, index) => (
            <SpeakerWrapper key={host.username}>
              <UserImage width={25} src={host.profile_image_url} />
              <SpeakerName>{host.name}</SpeakerName>
              <HostTag>{`${index !== 0 ? "CO-" : ""}HOST`}</HostTag>
            </SpeakerWrapper>
          ))}
          {speaker_ids?.map((speaker) => (
            <SpeakerWrapper key={speaker.username}>
              <UserImage width={25} src={speaker.profile_image_url} />
              <SpeakerName>{speaker.name}</SpeakerName>
            </SpeakerWrapper>
          ))}
        </SpeakersContainer>
      </SpeakersWrapper>
    </SpaceDetailsWrapper>
  );
};

export default memo(SpaceDetails);