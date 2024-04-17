import axios, { AxiosError } from "axios";
import { StatusCodes } from "http-status-codes";
import type { AuthResponse } from "../client/core/auth/models.ts";

const http = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5001/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const response = error.response;

    if (
      response &&
      response.status === StatusCodes.UNAUTHORIZED &&
      error.config
    ) {
      try {
        const res = await axios.get<AuthResponse>(
          "http://localhost:5001/api/auth/refresh",
          {
            withCredentials: true,
          },
        );

        localStorage.setItem("token", res.data.accessToken);

        return http.request(error.config);
      } catch (error) {
        console.log("User is not authorize");
      }
    }
    throw error;
  },
);

export default http;
