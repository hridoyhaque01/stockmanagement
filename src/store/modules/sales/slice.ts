import { createSlice } from "@reduxjs/toolkit";
import { SalesState } from "./types";

const initialState: SalesState = {
  sales: [],
};

const slice = createSlice({
  name: "salesSlice",
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
    },
    setSale: (state, action) => {
      state.sales = [...state.sales, action.payload];
    },
  },
});

export const { setSales, setSale } = slice.actions;
export default slice.reducer;
