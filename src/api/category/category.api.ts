import { protectedGet, protectedPost } from "../api.functions";
import { imagePostApi } from "../upload/upload.api";

const path = "category";

export const getCategoryApi = async (otherRoutes: string = "") => {
  return await protectedGet(`${path}/${otherRoutes}`);
};

export const createCategoryApi = async (
  categoryData: any,
  otherRoutes: string = ""
) => {
  if (categoryData.image) {
    const { data } = (await imagePostApi(categoryData.image)) as { data: any };
    if (data.message === "upload image") {
      categoryData.image = data.data.url;
    } else {
      categoryData.image = "";
    }
  } else {
    categoryData.image = "";
  }
  return await protectedPost(`${path}/${otherRoutes}`, categoryData);
};

export const updateCategoryApi = async (
  data: any,
  otherRoutes: string = ""
) => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};

export const deleteCategoryApi = async (
  data: any,
  otherRoutes: string = ""
) => {
  return await protectedPost(`${path}/${otherRoutes}`, data);
};
