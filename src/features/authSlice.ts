import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/store/store";
import { UserModel } from "@/utils/types/api";
import { AuthState } from "@/utils/types/component";

const accessToken = localStorage.getItem("accessToken") || null;
const storedUser = sessionStorage.getItem("user");

let parsedUser: UserModel | null = null;
if (storedUser) {
  parsedUser = JSON.parse(storedUser);
}

const initialState: AuthState = {
  isAuthenticated: accessToken ? true : false,
  user: parsedUser,
  accessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload: { user, accessToken } }) => {
      state.isAuthenticated = !!user;
      state.user = user;
      state.accessToken = accessToken;

      if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
      } else {
        localStorage.removeItem("accessToken");
      }

      if (user) {
        sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.removeItem("user");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export default authSlice.reducer;
