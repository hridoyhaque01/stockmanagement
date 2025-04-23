import { createSlice } from "@reduxjs/toolkit";
import { SuppliesState } from "./types";

const initialState: SuppliesState = {
  supplies: [],
  supplierSupplies: [],
  productSupplies: [],
};

const slice = createSlice({
  name: "suppliesSlice",
  initialState,
  reducers: {
    setSupplies: (state, action) => {
      state.supplies = action.payload;
    },
    setSupplierSupplies: (state, action) => {
      state.supplierSupplies = action.payload;
    },
    setProductSupplies: (state, action) => {
      state.productSupplies = action.payload;
    },
    setSupply: (state, action) => {
      state.supplies = [...state.supplies, action.payload];
    },
    removeSupply: (state, action) => {
      state.supplies = state.supplies.filter(
        (supply) => supply.id !== action.payload
      );
    },
    sortProductSupplies: (state, action) => {
      const sortType = action.payload;
      state.productSupplies.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
    sortSupplierSupplies: (state, action) => {
      const sortType = action.payload;
      state.supplierSupplies.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
    sortSupplies: (state, action) => {
      const sortType = action.payload;
      state.supplies.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
  },
});

export const {
  setSupplies,
  setSupply,
  removeSupply,
  setSupplierSupplies,
  setProductSupplies,
  sortProductSupplies,
  sortSupplierSupplies,
  sortSupplies,
} = slice.actions;
export default slice.reducer;
