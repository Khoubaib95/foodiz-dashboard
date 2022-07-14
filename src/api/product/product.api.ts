import { protectedGet, protectedPost } from "../api.functions";
import { imagePostApi } from "../upload/upload.api";

const path = "product";

export const getProductApi = async (otherRoutes: string = "") => {
  return await protectedGet(`${path}/${otherRoutes}`);
};

export const getCategoryByRestaurantIdApi = async (
  resId: string,
  otherRoutes: string = ""
) => {
  return await protectedGet(`${path}/restaurant/${resId}${otherRoutes}`);
};

export const createProductApi = async (
  productData: any,
  otherRoutes: string = ""
) => {
  if (productData.image) {
    const { data } = (await imagePostApi(productData.image)) as { data: any };
    console.log(data.data.url);
    if (data.message === "upload image") {
      productData.image = data.data.url;
    } else {
      productData.image = "";
    }
  } else {
    productData.image = "";
  }
  return await protectedPost(`${path}/${otherRoutes}`, productData);
};

export const updateProductApi = async (data: any, otherRoutes: string = "") => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};

export const deleteProductApi = async (data: any, otherRoutes: string = "") => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};
