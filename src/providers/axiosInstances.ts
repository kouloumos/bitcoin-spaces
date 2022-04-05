import axios, { Method } from "axios";
import { BASE_URL } from "src/config";
import { axiosPromiseResult } from "src/utils/common";

const GET = "get";
const POST = "post";
const PUT = "put";
const PATCH = "patch";
const DELETE = "delete";

export const METHODS = { GET, POST, PUT, DELETE, PATCH };

export const spacesAxios = axios.create({
  baseURL: BASE_URL + "/v1",
});

export const request = (
  method: string,
  url: string,
  { params }: any,
  withoutBase = false,
  headers = {}
) => {
  const cancelTokenSource = axios.CancelToken.source();
  const config = {
    method: method as Method,
    url,
    cancelToken: cancelTokenSource.token,
    data: params,
    params: method === METHODS.GET ? params : undefined,
    headers,
  };

  const request = () =>
    withoutBase
      ? axiosPromiseResult(axios(config))
      : axiosPromiseResult(spacesAxios(config));
  return { request, cancelTokenSource };
};
export const setAxiosToken = (token: string) => {
  spacesAxios.defaults.headers.common.Authorization =
    token !== "" ? `Token ${token}` : "";
};
