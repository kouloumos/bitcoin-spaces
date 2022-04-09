import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { TSpaceV2State } from "src/models/Spaces";
import { useGetSpaces } from "src/models/Spaces/hooks";

import { SkeletonSpaces, Space, SpacesStateTitle } from "./components";
import { NavBottom } from "./Spaces.style";

type Props = {
  state: TSpaceV2State;
};

const Spaces = ({ state }: Props) => {
  const location = useLocation();
  const { data: spaces, isLoading, isError } = useGetSpaces(state);
  const [showDetails, setShowDetails] = useState<boolean[]>([]);
  const empty = spaces && spaces.count === 0;
  const inLive = ["/", "/live"].includes(location.pathname);

  const handleShowDetails = useCallback((index: number, show: boolean) => {
    const newState = [];
    newState[index] = show;
    setShowDetails(newState);
  }, []);

  return (
    <>
      <SpacesStateTitle
        state={state}
        updateAt={spaces?.updateAt}
        loading={isLoading || isError}
      />
      <div>
        {isError && (
          <div>{`Cannot retrieve ${state} spaces at this moment`}</div>
        )}
        {isLoading ? (
          SkeletonSpaces()
        ) : !empty ? (
          spaces?.spaces.map((space, index) => (
            <Space
              key={space._id}
              {...space}
              state={state}
              showDetails={showDetails[index]}
              index={index}
              onChevronClick={handleShowDetails}
            />
          ))
        ) : (
          <div>{`There are no ${state} spaces at this moment`}</div>
        )}
        {inLive && (
          <NavBottom>
            <a href="/ended">see /ended spaces</a>
          </NavBottom>
        )}
      </div>
    </>
  );
};
export default Spaces;
