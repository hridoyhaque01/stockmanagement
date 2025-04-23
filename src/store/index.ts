import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./modules/api/apiSlice";
import authReducer from "./modules/auth/slice";
import commonReducer from "./modules/common/slice";
import customerReducer from "./modules/customers/slice";
import grainReducer from "./modules/grains/slice";
import ProductReducer from "./modules/products/slice";
import salesReducer from "./modules/sales/slice";
import supplierReducer from "./modules/suppliers/slice";
import suppliesReducer from "./modules/supplies/slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    common: commonReducer,
    products: ProductReducer,
    customers: customerReducer,
    grains: grainReducer,
    sales: salesReducer,
    suppliers: supplierReducer,
    supplies: suppliesReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
