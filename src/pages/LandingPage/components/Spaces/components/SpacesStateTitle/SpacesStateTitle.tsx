import React, { memo } from "react";

import { TitleWrapper, Title, UpdateStatus } from "src/components/common.style";
import { TSpaceV2State } from "src/models/Spaces";
import { localeOptions } from "src/utils/common";
import { fromNow } from "src/utils/fromNow";

import {
  UpdateDetails,
  LiveTitleWrapper,
  LiveCircle,
} from "./SpacesStateTitle.style";

type Props = {
  updateAt?: number;
  state: TSpaceV2State;
  loading: boolean;
};

const SpacesStateTitle = ({ state, updateAt, loading }: Props) => {
  return (
    <TitleWrapper>
      <LiveTitleWrapper>
        {(state === "live" || state === "ended") && (
          <LiveCircle state={loading ? "ended" : state} />
        )}
        <Title>{`${state} spaces`} </Title>
      </LiveTitleWrapper>
      {updateAt && (
        <span>
          <UpdateStatus>{`Last checked: ${fromNow(
            new Date(updateAt)
          )} `}</UpdateStatus>

          <UpdateDetails>{` (${new Date(updateAt).toLocaleString(
            undefined,
            localeOptions
          )})`}</UpdateDetails>
        </span>
      )}
    </TitleWrapper>
  );
};

export default memo(SpacesStateTitle);