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
    updateCustomer: (state, action) => {
      state.customers = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return { ...customer, ...action.payload };
        }
        return customer;
      });
    },
    updateCustomerDue: (state, action) => {
      const { paidAmount, customerId } = action.payload;
      const newCustomers = state.customers.map((customer) => {
        if (customer.id === customerId) {
          return {
            ...customer,
            totalDue: customer.totalDue - paidAmount,
            totalPaid: customer.totalPaid + paidAmount,
          };
        }
        return customer;
      });
      state.customers = newCustomers;
    },
    sortCustomers: (state, action) => {
      const sortType = action.payload;
      state.customers.sort((a, b) => {
        if (sortType === "asc") {
          return a.timestamp - b.timestamp;
        }
        return b.timestamp - a.timestamp;
      });
    },
  },
});

export const {
  setCustomers,
  setCustomer,
  updateCustomerDue,
  updateCustomer,
  sortCustomers,
} = slice.actions;
export default slice.reducer;
