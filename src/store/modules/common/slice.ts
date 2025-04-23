import { createSlice } from "@reduxjs/toolkit";
import { CommonType } from "./types";

const initialState: CommonType = {
  showSidebar: false,
  activePath: "dashboard",
  navTitle: "Dashboard",
  searchValue: "",
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setSidebarShow: (state, action) => {
      state.showSidebar = action.payload;
    },
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setActiveNavTitle: (state, action) => {
      state.navTitle = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setSidebarShow,
  setActivePath,
  setActiveNavTitle,
  setSearchValue,
} = slice.actions;
export default slice.reducer;
