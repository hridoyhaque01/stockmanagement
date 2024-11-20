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
    updateSupplier: (state, action) => {
      state.suppliers = state.suppliers.map((supplier) => {
        if (supplier.id === action.payload.id) {
          return { ...supplier, ...action.payload };
        }
        return supplier;
      });
    },
    updateSupplierDue: (state, action) => {
      const { paidAmount, supplierId } = action.payload;
      const newSuppliers = state.suppliers.map((supplier) => {
        if (supplier.id === supplierId) {
          return {
            ...supplier,
            totalDue: supplier.totalDue - paidAmount,
            totalPaid: supplier.totalPaid + paidAmount,
          };
        }
        return supplier;
      });
      state.suppliers = newSuppliers;
    },
    sortSuppliers: (state, action) => {
      const sortType = action.payload;
      state.suppliers.sort((a, b) => {
        if (sortType === "asc") {
          return a.timestamp - b.timestamp;
        }
        return b.timestamp - a.timestamp;
      });
    },
  },
});

export const {
  setSuppliers,
  setSupplier,
  updateSupplierDue,
  updateSupplier,
  sortSuppliers,
} = slice.actions;
export default slice.reducer;
