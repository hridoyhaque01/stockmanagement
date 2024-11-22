import { createSlice } from "@reduxjs/toolkit";
import { SalesState } from "./types";

const initialState: SalesState = {
  sales: [],
  customer: undefined,
  details: {
    totalQuantity: null,
    totalPrice: null,
    totalPaid: null,
    totalDue: null,
    type: "Partial Payment",
  },
  orders: [],
  customerSales: [],
  isNewCustomer: false,
  selectedOrder: undefined,
};

const slice = createSlice({
  name: "salesSlice",
  initialState,
  reducers: {
    setSales: (state, action) => {
      state.sales = action.payload;
    },
    setCustomerSales: (state, action) => {
      state.customerSales = action.payload;
    },
    setSale: (state, action) => {
      state.sales = [...state.sales, action.payload];
    },
    setSaleCustomer: (state, action) => {
      state.customer = action.payload;
    },
    addOrderGrain: (state, action) => {
      const grainIndex = state.orders
        ?.map((grain) => grain.grainId)
        .indexOf(action.payload.grainId);

      if (grainIndex !== -1) {
        state.orders[grainIndex] = { ...action.payload };
      } else {
        state.orders = [...state.orders, action.payload];
      }

      state.details.totalQuantity = state.orders.reduce(
        (total, grain) => total + grain.quantity,
        0
      );

      state.details.totalPrice = state.orders.reduce(
        (total, grain) => total + grain.price * grain.quantity,
        0
      );
    },
    removeOrderGrain: (state, action) => {
      state.orders = state.orders.filter(
        (grain) => grain.grainId !== action.payload?.grainId
      );
    },
    updatePaidAmount: (state, action) => {
      const totalPrice = state.details.totalPrice
        ? state.details.totalPrice
        : 0;
      const totalPaid = action.payload ? Number(action.payload) : 0;
      state.details.totalPaid = totalPaid;
      state.details.totalDue = totalPrice - totalPaid || 0;
      state.details.type =
        totalPaid === totalPrice
          ? "Full Payment"
          : totalPaid > totalPrice
          ? "Extra Payment"
          : "Partial Payment";
    },
    resetOrderState: (state) => {
      state.customer = undefined;
      state.details = {
        totalQuantity: null,
        totalPrice: null,
        totalPaid: null,
        totalDue: null,
        type: "Partial Payment",
      };
      state.orders = [];
      state.isNewCustomer = false;
      state.selectedOrder = undefined;
    },
    setCustomerAddStatus: (state, action) => {
      state.isNewCustomer = action.payload;
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
    sortSales: (state, action) => {
      const sortType = action.payload;
      state.sales.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
    sortCustomerSales: (state, action) => {
      const sortType = action.payload;
      state.customerSales.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
  },
});

export const {
  setSales,
  setSale,
  addOrderGrain,
  removeOrderGrain,
  setSaleCustomer,
  setCustomerAddStatus,
  setSelectedOrder,
  updatePaidAmount,
  setCustomerSales,
  sortSales,
  sortCustomerSales,
  resetOrderState,
} = slice.actions;
export default slice.reducer;
