import { QueryObserverResult, useQuery } from "react-query";
import spacesAPI from "src/providers/spacesAPI/spacesAPI";
import { Spaces, TSpaceV2State } from ".";

export const useGetSpaces = (
  state: TSpaceV2State
): QueryObserverResult<Spaces> => {
  return useQuery<Spaces>(state, async () => {
    const { request } = spacesAPI.getSpaces(state);
    const data = await request();

    return data;
  });
};