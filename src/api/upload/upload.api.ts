import { imagePost } from "../api.functions";

const path = "upload-image";

export const imagePostApi = async (image: any, otherRoutes: string = "") => {
  console.log("dddddddddddd =>", image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    console.log("image", formData.getAll("image"));
    return await imagePost(`${path}/${otherRoutes}`, formData);
  }
};
