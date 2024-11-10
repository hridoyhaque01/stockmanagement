import { createSlice } from "@reduxjs/toolkit";
import { CustomerState } from "./types";

const initialState: CustomerState = {
  customers: [],
};

const slice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    setCustomer: (state, action) => {
      state.customers = [...state.customers, action.payload];
    },
  },
});

export const { setCustomers, setCustomer } = slice.actions;
export default slice.reducer;
