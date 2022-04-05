import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TSpaceV2State } from "src/models/Spaces";

import { StateSwitch } from "./components";
import {
  DescriptionContent,
  DescriptionWrapper,
  FeedbackLink,
  Title,
  TitleWrapper,
} from "./Description.style";


type Props = {
  state: TSpaceV2State;
};
const Description = ({ state }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMore, setShowMore] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = !event.target.checked ? "live" : "scheduled";
    navigate(`/${newState}`, { replace: true });
  };

  const hideSwitch = ["/hosts", "/speakers", "/ended"].includes(
    location.pathname
  );

  return (
    <DescriptionWrapper>
      <DescriptionContent>
        <TitleWrapper>
          <Title>Bitcoin Spaces</Title>

          {!hideSwitch && (
            <StateSwitch
              checked={state === "scheduled"}
              onChange={handleChange}
            />
          )}
        </TitleWrapper>
        <span>
          This website automatically detects twitter spaces related to Bitcoin
          with the super sophisticated algorithm of searching the title for the
          keyword "Bitcoin".{" "}
        </span>
        {!showMore && (
          <span
            style={{ fontSize: 12, cursor: "pointer" }}
            onClick={() => setShowMore((prev) => !prev)}
          >
            (more)
          </span>
        )}
        {showMore && (
          <>
            <span>
              It is also using a whitelist for relevant hosts and a blacklist
              for shitcoiners.{" "}
            </span>
            <span
              style={{ fontSize: 12, cursor: "pointer" }}
              onClick={() => setShowMore((prev) => !prev)}
            >
              (less)
            </span>
          </>
        )}
        <FeedbackLink
          style={{ marginTop: 5 }}
          href={`https://twitter.com/kouloumos`}
          target="_blank"
          rel="noreferrer"
        >
          Contact for feedback & ideas.
        </FeedbackLink>
      </DescriptionContent>
    </DescriptionWrapper>
  );
};

export default Description;