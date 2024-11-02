import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  products: [
    {
      id: "671d56f9f9a9dd4442f39f9a",
      productId: "T01",
      productName: "Product 1",
      quantity: 80,
      totalPrice: 200,
      avaragePrice: 2.5,
    },
    {
      id: "7b9c13e6a4b0ff4573e89d1b",
      productId: "T02",
      productName: "Product 2",
      quantity: 100,
      totalPrice: 300,
      avaragePrice: 3,
    },
    {
      id: "f2e5b2c48c5f9ddf4c83b3b3",
      productId: "T03",
      productName: "Product 3",
      quantity: 50,
      totalPrice: 125,
      avaragePrice: 2.5,
    },
    {
      id: "9c3e16a7d4f0a34c5b7c8e6d",
      productId: "T04",
      productName: "Product 4",
      quantity: 60,
      totalPrice: 180,
      avaragePrice: 3,
    },
    {
      id: "3a1d9b2f8c7d4e6a2b4c5d6a",
      productId: "T05",
      productName: "Product 5",
      quantity: 40,
      totalPrice: 100,
      avaragePrice: 2.5,
    },
    {
      id: "7e2b9d4f6a3c1b7d8f9a0e5c",
      productId: "T06",
      productName: "Product 6",
      quantity: 70,
      totalPrice: 210,
      avaragePrice: 3,
    },
    {
      id: "6c4a8f9e2d3b1d7e9c5a2b4f",
      productId: "T07",
      productName: "Product 7",
      quantity: 90,
      totalPrice: 225,
      avaragePrice: 2.5,
    },
    {
      id: "4a7c2b9d8f6e1c5d9e0b3a2f",
      productId: "T08",
      productName: "Product 8",
      quantity: 110,
      totalPrice: 330,
      avaragePrice: 3,
    },
    {
      id: "2e5f9b8d7c4a1d6a3f9b0c7e",
      productId: "T09",
      productName: "Product 9",
      quantity: 30,
      totalPrice: 75,
      avaragePrice: 2.5,
    },
    {
      id: "1d4b7e8f2c5a9b0d3f6a7c9e",
      productId: "T10",
      productName: "Product 10",
      quantity: 120,
      totalPrice: 360,
      avaragePrice: 3,
    },
    {
      id: "3b9e7d5a6f4c1a8d2e0f9b6c",
      productId: "T11",
      productName: "Product 11",
      quantity: 45,
      totalPrice: 112.5,
      avaragePrice: 2.5,
    },
    {
      id: "9e8c6d4b1a3f5a7d2c0f6b3e",
      productId: "T12",
      productName: "Product 12",
      quantity: 130,
      totalPrice: 390,
      avaragePrice: 3,
    },
  ],
};

const slice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
