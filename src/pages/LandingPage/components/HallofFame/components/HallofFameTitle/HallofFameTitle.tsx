import React from "react";

import { TitleWrapper, Title, UpdateStatus } from "src/components/common.style";
import { UserState } from "src/models/Users";
import { fromNow } from "src/utils/fromNow";

type Props = {
  state: UserState;
};

const HallofFameTitle = ({ state }: Props) => {
  return (
    <TitleWrapper>
      <Title>{`most active ${state}s`}</Title>
      <UpdateStatus>
        last {fromNow(new Date("2022-02-26T15:21:08.000Z"), true)}
      </UpdateStatus>
    </TitleWrapper>
  );
};

export default HallofFameTitle;