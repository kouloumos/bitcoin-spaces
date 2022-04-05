import { TSpaceV2State } from "src/models/Spaces";
import { METHODS, request } from "../axiosInstances";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSpaces: (state: TSpaceV2State) =>
    request(METHODS.GET, `/spaces/${state}`, {}),
};