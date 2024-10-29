import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  auth: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuthData: (state, action) => {
      state.auth = { ...state.auth, ...action?.payload };
      localStorage.setItem("auth_details", JSON.stringify(state.auth));
    },
    logout: (state) => {
      state.auth = {};
      localStorage.removeItem("auth_details");
    },
  },
});

export const { saveAuthData, logout } = slice.actions;
export default slice.reducer;
