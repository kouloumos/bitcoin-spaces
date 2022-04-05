import React from "react";
import { Collapse } from "@mui/material";

import { UserImage } from "src/components/common.style";
import { UserState, UserV2 } from "src/models/Users";

import {
  UserWrapper,
  HighlightedNumber,
  UserName,
  TitleWrapper,
  UserNameWrapper,
  SpacesNumberWrapper,
} from "./User.style";

type Props = {
  state: UserState;
  index: number;
  showSpaces?: boolean;
  onChevronClick: (index: number, show: boolean) => void;
} & UserV2;

const User = ({
  state,
  hosted,
  speaked,
  profile_image_url,
  username,
  name,
  index,
  showSpaces = false,
  onChevronClick: setShowSpaces,
}: Props) => {
  return (
    <UserWrapper>
      <TitleWrapper>
        <UserNameWrapper>
          <UserImage width={40} src={profile_image_url} />
          <UserName
            href={`https://www.twitter.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </UserName>
        </UserNameWrapper>
        <SpacesNumberWrapper onClick={() => setShowSpaces(index, !showSpaces)}>
          <HighlightedNumber>
            {state === "host" ? hosted?.length : speaked?.length}
          </HighlightedNumber>
          <div style={{ fontSize: 10, textDecoration: "underline" }}>
            spaces
          </div>
        </SpacesNumberWrapper>
      </TitleWrapper>
      <Collapse in={showSpaces} timeout={1500}>
        <div>TEST</div>
      </Collapse>
    </UserWrapper>
  );
};

export default User;