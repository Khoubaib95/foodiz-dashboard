import { imagePost } from "../api.functions";

const path = "upload-image";

export const imagePostApi = async (image: any, otherRoutes: string = "") => {
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    return await imagePost(`${path}/${otherRoutes}`, formData);
  }
};
