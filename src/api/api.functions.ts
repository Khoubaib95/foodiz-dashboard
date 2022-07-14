import axios from "axios";
import { getLocalAccessToken } from "../utils/utils";

const URL = "http://localhost:5000";

const timeoutConfig = {
  timeout: 5000,
};

const authorizationConfig = {
  headers: {
    Authorization: `Bearer ${
      typeof window !== "undefined" ? getLocalAccessToken() : "null"
    }`,
  },
  ...timeoutConfig,
};

// public routes
export const get = (endpoint: string = "") =>
  axios.get(`${URL}/${endpoint}`, timeoutConfig);

export const post = (endpoint: string, data: any) =>
  axios.post(`${URL}/${endpoint}`, data, timeoutConfig);

// protected routes
export const protectedGet = (endpoint: string) => {
  return axios.get(`${URL}/${endpoint}`, authorizationConfig);
};

export const protectedPost = (endpoint: string, data: any) => {
  return axios.post(`${URL}/${endpoint}`, data, authorizationConfig);
};

export const protectedPut = (endpoint: string, data: any) => {
  return axios.put(`${URL}/${endpoint}`, data, authorizationConfig);
};

export const protectedDelete = (endpoint: string, data: any) => {
  return axios.delete(`${URL}/${endpoint}`, authorizationConfig);
};

export const imagePost = (endpoint: string, data: any) => {
  return axios.post(`${URL}/${endpoint}`, data, {});
};
