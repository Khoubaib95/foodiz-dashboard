import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInUserApi } from "../../../api/auth/auth.api";
import { getUserApi } from "../../../api/user/user.api";
import { getLocalAccessToken, setLocalAccessToken } from "../../../utils/utils";

export const setUser = createAsyncThunk(
  "user/setUser",
  async (_, { rejectWithValue }) => {
    if (!!getLocalAccessToken()) {
      try {
        const { data }: any = await getUserApi(
          "get_user_from_token?attributes=fname lname email emailVerification image restaurants"
        );
        return data.data;
      } catch (err: any) {
        if (err?.response?.status === 401) {
        }
        return rejectWithValue("Internal Error Server");
      }
    } else {
      return rejectWithValue("No token");
    }
  }
);

export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (arg, { rejectWithValue }) => {
    try {
      const { data }: any = await signInUserApi(
        arg,
        "?attributes=fname lname email isEmailVerified image restaurants"
      );
      setLocalAccessToken(data.data.access_token.token);
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
