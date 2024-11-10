import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  products: [],
};

const slice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, ...action.payload };
        }
        return product;
      });
    },
  },
});

export const { setProducts, setProduct, updateProduct } = slice.actions;
export default slice.reducer;
