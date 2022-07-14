import { post } from "../api.functions";
import { imagePostApi } from "../upload/upload.api";
import { setLocalAccessToken } from "../../utils/utils";
const path = "";

export const signInUserApi = async (data: any, otherRoutes: string = "") => {
  return await post(`${path}signin/${otherRoutes}`, data);
};

export const signUpUserApi = async (
  userDdata: any,
  otherRoutes: string = ""
) => {
  if (userDdata.image) {
    const { data } = (await imagePostApi(userDdata.image)) as {
      data: { message: string; data: { url: string } };
    };
    if (data.message === "upload image") {
      userDdata.image = data.data.url;
    }
  } else {
    userDdata.image = "";
  }
  return await post(`${path}signup/${otherRoutes}`, userDdata);
};

export const resetPasswordApi = async (data: any, otherRoutes: string = "") => {
  return await post(`${path}reset-password/${otherRoutes}`, data);
};

export const forgotPasswordApi = async (
  data: any,
  otherRoutes: string = ""
) => {
  return await post(`${path}forgot-password/${otherRoutes}`, data);
};
