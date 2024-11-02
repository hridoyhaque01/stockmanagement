import { createSlice } from "@reduxjs/toolkit";
import { GrainsState } from "./types";

const initialState: GrainsState = {
  grains: [
    {
      id: "671d57905058554b5ea9cc59",
      quantity: 250,
      price: 120,
      product: {
        id: "671d56f9f9a9dd4442f39f9a",
        productId: "T01",
        productName: "Product 1",
        quantity: 80,
        totalPrice: 200,
        avaragePrice: 2.5,
      },
    },
    {
      id: "987654321098765432109876",
      quantity: 150,
      price: 75,
      product: {
        id: "543210987654321098765432",
        productId: "T02",
        productName: "Product 2",
        quantity: 50,
        totalPrice: 100,
        avaragePrice: 2.0,
      },
    },
    {
      id: "876543210987654321098765",
      quantity: 300,
      price: 240,
      product: {
        id: "432109876543210987654321",
        productId: "T03",
        productName: "Product 3",
        quantity: 120,
        totalPrice: 240,
        avaragePrice: 2.0,
      },
    },
    {
      id: "765432109876543210987654",
      quantity: 500,
      price: 450,
      product: {
        id: "321098765432109876543210",
        productId: "T04",
        productName: "Product 4",
        quantity: 200,
        totalPrice: 500,
        avaragePrice: 2.5,
      },
    },
    {
      id: "654321098765432109876543",
      quantity: 100,
      price: 200,
      product: {
        id: "210987654321098765432109",
        productId: "T05",
        productName: "Product 5",
        quantity: 40,
        totalPrice: 100,
        avaragePrice: 2.5,
      },
    },
    {
      id: "543210987654321098765432",
      quantity: 600,
      price: 550,
      product: {
        id: "109876543210987654321098",
        productId: "T06",
        productName: "Product 6",
        quantity: 250,
        totalPrice: 600,
        avaragePrice: 2.4,
      },
    },
    {
      id: "432109876543210987654321",
      quantity: 400,
      price: 380,
      product: {
        id: "098765432109876543210987",
        productId: "T07",
        productName: "Product 7",
        quantity: 150,
        totalPrice: 400,
        avaragePrice: 2.67,
      },
    },
    {
      id: "321098765432109876543210",
      quantity: 800,
      price: 700,
      product: {
        id: "987654321098765432109876",
        productId: "T08",
        productName: "Product 8",
        quantity: 350,
        totalPrice: 800,
        avaragePrice: 2.29,
      },
    },
    {
      id: "210987654321098765432109",
      quantity: 50,
      price: 25,
      product: {
        id: "876543210987654321098765",
        productId: "T09",
        productName: "Product 9",
        quantity: 20,
        totalPrice: 50,
        avaragePrice: 2.5,
      },
    },
    {
      id: "109876543210987654321098",
      quantity: 250,
      price: 220,
      product: {
        id: "765432109876543210987654",
        productId: "T10",
        productName: "Product 10",
        quantity: 100,
        totalPrice: 250,
        avaragePrice: 2.5,
      },
    },
    {
      id: "098765432109876543210987",
      quantity: 700,
      price: 650,
      product: {
        id: "654321098765432109876543",
        productId: "T11",
        productName: "Product 11",
        quantity: 300,
        totalPrice: 700,
        avaragePrice: 2.33,
      },
    },
    {
      id: "987654321098765432109876",
      quantity: 550,
      price: 500,
      product: {
        id: "543210987654321098765432",
        productId: "T12",
        productName: "Product 12",
        quantity: 220,
        totalPrice: 550,
        avaragePrice: 2.5,
      },
    },
  ],
};

const slice = createSlice({
  name: "grainsSlice",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
