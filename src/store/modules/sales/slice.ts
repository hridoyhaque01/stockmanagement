import { createSlice } from "@reduxjs/toolkit";
import { SalesState } from "./types";

const initialState: SalesState = {
  sales: [
    {
      id: "671d57ae0ab61068d47542e0",
      totalQuantity: 1,
      totalPrice: 130,
      totalDue: 30,
      totalPaid: 100,
      type: "Partial Payment",
      orders: [
        {
          grainId: "671d57905058554b5ea9cc59",
          quantity: 10,
          price: 120,
          sellingPrice: 130,
          category: "kg",
          grains: [
            {
              grainHistoryId: "671d5790333bebe6b4931c80",
              quantityLeft: 270,
            },
          ],
        },
      ],
      customer: {
        id: "671d57ae91f60e3d4acdf6aa",
        customerName: "Hridoy",
        customerEmail: "",
        customerPhone: "01821821",
        customerAddress: "",
        totalDue: 30,
        totalPaid: 360,
        totalBalance: 390,
      },
    },
    {
      id: "e19d57610ac621d9d47953b1",
      totalQuantity: 5,
      totalPrice: 250,
      totalDue: 50,
      totalPaid: 200,
      type: "Partial Payment",
      orders: [
        {
          grainId: "f15d579a3b926b8b5da9cc77",
          quantity: 20,
          price: 200,
          sellingPrice: 250,
          category: "lb",
          grains: [
            {
              grainHistoryId: "b11d5790cb9cebe6a4932c90",
              quantityLeft: 180,
            },
          ],
        },
      ],
      customer: {
        id: "f17d57ae87e50d4d6acaf6b0",
        customerName: "Rafik",
        customerEmail: "",
        customerPhone: "01832123",
        customerAddress: "Address 1",
        totalDue: 50,
        totalPaid: 250,
        totalBalance: 300,
      },
    },
    {
      id: "f12d57b21bb53279d47542e2",
      totalQuantity: 10,
      totalPrice: 400,
      totalDue: 100,
      totalPaid: 300,
      type: "Partial Payment",
      orders: [
        {
          grainId: "e13d57a052894b8c5da9cc78",
          quantity: 50,
          price: 300,
          sellingPrice: 400,
          category: "kg",
          grains: [
            {
              grainHistoryId: "d14d5780cbacec06b4932c01",
              quantityLeft: 150,
            },
          ],
        },
      ],
      customer: {
        id: "g15d57be91f50e3d6bcef6ac",
        customerName: "Karim",
        customerEmail: "",
        customerPhone: "01722222",
        customerAddress: "Address 2",
        totalDue: 100,
        totalPaid: 400,
        totalBalance: 500,
      },
    },
    {
      id: "h17d572c3ad61059d47324e1",
      totalQuantity: 2,
      totalPrice: 160,
      totalDue: 40,
      totalPaid: 120,
      type: "Partial Payment",
      orders: [
        {
          grainId: "i18d57905386544c5da9cc71",
          quantity: 15,
          price: 120,
          sellingPrice: 160,
          category: "kg",
          grains: [
            {
              grainHistoryId: "j19d579033bcee66b4931d89",
              quantityLeft: 200,
            },
          ],
        },
      ],
      customer: {
        id: "k20d57ae91d70d5d4acf6aa",
        customerName: "Hasan",
        customerEmail: "",
        customerPhone: "01922234",
        customerAddress: "Address 3",
        totalDue: 40,
        totalPaid: 280,
        totalBalance: 320,
      },
    },
    {
      id: "l21d57af1bc61469d47751d1",
      totalQuantity: 3,
      totalPrice: 220,
      totalDue: 20,
      totalPaid: 200,
      type: "Partial Payment",
      orders: [
        {
          grainId: "m22d57905128574c6ea9cc88",
          quantity: 30,
          price: 150,
          sellingPrice: 220,
          category: "kg",
          grains: [
            {
              grainHistoryId: "n23d5790cb9ee76b5932d70",
              quantityLeft: 130,
            },
          ],
        },
      ],
      customer: {
        id: "o24d57ae97f70e4d5dcaf6cc",
        customerName: "Mamun",
        customerEmail: "",
        customerPhone: "01622678",
        customerAddress: "Address 4",
        totalDue: 20,
        totalPaid: 220,
        totalBalance: 240,
      },
    },
    {
      id: "p25d57ad2bd63219d47142d0",
      totalQuantity: 4,
      totalPrice: 300,
      totalDue: 60,
      totalPaid: 240,
      type: "Partial Payment",
      orders: [
        {
          grainId: "q26d57905298575b5da9cc93",
          quantity: 40,
          price: 240,
          sellingPrice: 300,
          category: "lb",
          grains: [
            {
              grainHistoryId: "r27d578033dbe96a5932c10",
              quantityLeft: 100,
            },
          ],
        },
      ],
      customer: {
        id: "s28d57be94f60e5d7acf6acb",
        customerName: "Jahid",
        customerEmail: "",
        customerPhone: "01789990",
        customerAddress: "Address 5",
        totalDue: 60,
        totalPaid: 300,
        totalBalance: 360,
      },
    },
    {
      id: "t29d571e3cd62329d47952c9",
      totalQuantity: 6,
      totalPrice: 180,
      totalDue: 0,
      totalPaid: 180,
      type: "Full Payment",
      orders: [
        {
          grainId: "u30d57803198568b5da9cc92",
          quantity: 20,
          price: 180,
          sellingPrice: 180,
          category: "kg",
          grains: [
            {
              grainHistoryId: "v31d579043bbe76a492c10f",
              quantityLeft: 90,
            },
          ],
        },
      ],
      customer: {
        id: "w32d57ae87f80f3d4baf6acb",
        customerName: "Ratul",
        customerEmail: "",
        customerPhone: "01544456",
        customerAddress: "Address 6",
        totalDue: 0,
        totalPaid: 180,
        totalBalance: 180,
      },
    },
  ],
};

const slice = createSlice({
  name: "salesSlice",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
