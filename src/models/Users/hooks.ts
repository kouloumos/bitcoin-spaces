import { QueryObserverResult, useQuery } from "react-query";

import usersAPI from "src/providers/usersAPI/usersAPI";
import { UserState, UserV2 } from "./types";

export const useGetUsers = (
  state: UserState
): QueryObserverResult<UserV2[]> => {
  return useQuery<UserV2[]>(state, async () => {
    const { request } = usersAPI.getUsers(state);
    const data = await request();

    return data;
  });
};

export const useGetUser = (id: string): QueryObserverResult<UserV2> => {
  return useQuery<UserV2>("user", async () => {
    if (id === "") {
      return undefined;
    }
    const { request } = usersAPI.getUser(id);
    const data = await request();

    return data;
  });
};
