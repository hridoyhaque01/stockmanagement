import { createSlice } from "@reduxjs/toolkit";
import { SuppliersState } from "./types";

const initialState: SuppliersState = {
  suppliers: [],
};

const slice = createSlice({
  name: "supplierSlice",
  initialState,
  reducers: {
    setSuppliers: (state, action) => {
      state.suppliers = action.payload;
    },
    setSupplier: (state, action) => {
      state.suppliers = [...state.suppliers, action.payload];
    },
  },
});

export const { setSuppliers, setSupplier } = slice.actions;
export default slice.reducer;
