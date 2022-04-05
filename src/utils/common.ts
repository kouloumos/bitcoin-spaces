import { AxiosPromise, AxiosResponse, AxiosError } from "axios";

/**
 * takes an axios promise and returns the actual data from the request or the error
 *
 * axiosPromise {AxiosPromise} the axios promise
 * @returns {AxiosResponse | AxiosError} The API response
 */
export const axiosPromiseResult = (axiosPromise: AxiosPromise) =>
  axiosPromise
    .then(({ data }: AxiosResponse) => data)
    .catch((error: AxiosError) => {
      throw error.response ? error.response.data : error;
    });

export const localeOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  // second: "2-digit",
};
