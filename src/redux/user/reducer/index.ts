import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../@types/users.interface";
import { setUser, signInUser } from "../action";

type UserStateType = {
  data: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string;
};

const initialState: UserStateType = {
  data: null,
  isLoggedIn: false,
  loading: false,
  error: "",
};

export const dateSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    // Add user from token
    builder.addCase(setUser.pending, (state, _) => {
      state.loading = true;
      return state;
    });
    builder.addCase(setUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.data = payload;
      return state;
    });
    builder.addCase(setUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = false;
      return state;
    });
    // Add user from login
    builder.addCase(signInUser.pending, (state, _) => {
      state.loading = true;
      return state;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      console.log("state.data : ", payload);
      state.data = payload;
      return state;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = false;
      //@ts-ignore
      state.error = payload;
      console.log("payload : ", payload);
      return state;
    });
  },
  reducers: {
    signOutUser: (_) => {
      return initialState;
    },
    addNewRestaurant: (state, { payload }) => {
      //@ts-ignore
      const { restaurants } = state.data;
      restaurants.total += 1;
      restaurants.list.push(payload);
      return state;
    },
  },
});

export const { signOutUser, addNewRestaurant } = dateSlice.actions;
export default dateSlice.reducer;
