import { configureStore } from "@reduxjs/toolkit";
//@ts-ignore
import logger from "redux-logger";
import userReducer from "./user/reducer";
import { setUser } from "./user/action";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.dispatch(setUser());
export default store;
