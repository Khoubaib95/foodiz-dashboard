import { protectedGet, protectedPost } from "../api.functions";
import { imagePostApi } from "../upload/upload.api";

const path = "restaurant";

export const getRestaurantApi = async (otherRoutes: string = "") => {
  return await protectedGet(`${path}/${otherRoutes}`);
};

export const createRestaurantApi = async (
  restaurantData: any,
  otherRoutes: string = ""
) => {
  if (restaurantData.image) {
    const { data } = await imagePostApi(restaurantData.image);
    console.log(data.data.url);
    if (data.message === "upload image") restaurantData.image = data.data.url;
  } else {
    restaurantData.image = "";
  }
  if (restaurantData.cover) {
    const { data } = await imagePostApi(restaurantData.cover);
    if (data.message === "upload image") restaurantData.cover = data.data.url;
    console.log(data.data.url);
  } else {
    restaurantData.cover = "";
  }
  return await protectedPost(`${path}/${otherRoutes}`, restaurantData);
};

export const updateRestaurantApi = async (
  data: any,
  otherRoutes: string = ""
) => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};

export const deleteRestaurantApi = async (
  data: any,
  otherRoutes: string = ""
) => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};
