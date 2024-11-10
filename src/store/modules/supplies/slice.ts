import { createSlice } from "@reduxjs/toolkit";
import { SuppliesState } from "./types";

const initialState: SuppliesState = {
  supplies: [],
};

const slice = createSlice({
  name: "suppliesSlice",
  initialState,
  reducers: {
    setSupplies: (state, action) => {
      state.supplies = action.payload;
    },
    setSupply: (state, action) => {
      state.supplies = [...state.supplies, action.payload];
    },
    removeSupply: (state, action) => {
      state.supplies = state.supplies.filter(
        (supply) => supply.id !== action.payload
      );
    },
  },
});

export const { setSupplies, setSupply, removeSupply } = slice.actions;
export default slice.reducer;
