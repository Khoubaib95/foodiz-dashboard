import { protectedGet, protectedPost } from "../api.functions";

const path = "user";

export const getUserApi = async (otherRoutes: string = "") => {
  return await protectedGet(`${path}/${otherRoutes}`);
};

export const createUserApi = async (data: any, otherRoutes: string = "") => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};

export const updateUserApi = async (data: any, otherRoutes: string = "") => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};

export const deleteUserApi = async (data: any, otherRoutes: string = "") => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};
