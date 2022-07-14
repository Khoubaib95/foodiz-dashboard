export const setLocalAccessToken = (token: string) => {
  return localStorage.setItem("access_token", token);
};

export const getLocalAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const removeLocalAccessToken = () => {
  return localStorage.removeItem("access_token");
};

export const getSelectedRestaurant = () => {
  return typeof window !== "undefined"
    ? localStorage.getItem("selected_restaurant")
    : "null";
};

export const setSelectedRestaurant = (id: string) => {
  localStorage.setItem("selected_restaurant", id);
};
