import React, { useCallback, useState } from "react";

import { UserState } from "src/models/Users";
import { useGetUsers } from "src/models/Users/hooks";

import { HallofFameTitle, User } from "./components";

type Props = {
  state?: UserState;
};
const HallofFame = ({ state = "host" }: Props) => {
  // const [userId, setUserId] = useState("");
  const [showSpaces, setShowSpaces] = useState<boolean[]>([]);

  const { data: users } = useGetUsers(state);
  // const { data: user } = useGetUser(userId);

  const handleShowDetails = useCallback((index: number, show: boolean) => {
    const newState = [];
    newState[index] = show;
    setShowSpaces(newState);
  }, []);

  return (
    <>
      <HallofFameTitle state={state} />
      {users?.map((user, index) => (
        <User
          key={user._id}
          index={index}
          state={state}
          showSpaces={showSpaces[index]}
          onChevronClick={handleShowDetails}
          {...user}
        />
      ))}
    </>
  );
};

export default HallofFame;
