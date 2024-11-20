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

    sortProducts: (state, action) => {
      const sortType = action.payload;
      state.products.sort((a, b) => {
        if (sortType === "asc") {
          return a.timestamp - b.timestamp;
        }
        return b.timestamp - a.timestamp;
      });
    },
  },
});

export const { setProducts, setProduct, updateProduct, sortProducts } =
  slice.actions;
export default slice.reducer;
