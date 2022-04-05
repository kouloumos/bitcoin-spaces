import { UserState } from "src/models/Users";
import { METHODS, request } from "../axiosInstances";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser: (id: string) => request(METHODS.GET, `/user/${id}`, {}),
  getUsers: (state: UserState) => request(METHODS.GET, `/user/${state}`, {}),
};