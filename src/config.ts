import * as dotenv from "dotenv";

dotenv.config();
export const BASE_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000"
    : process.env.REACT_APP_BASE_URL;
