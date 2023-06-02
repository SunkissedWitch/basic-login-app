import axios from "axios";
import { EXTERNAL_URL, LOCAL_URL } from "./constants";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? EXTERNAL_URL : LOCAL_URL,
});

export { instance as axios };
