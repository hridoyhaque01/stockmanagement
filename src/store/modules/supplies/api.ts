import { apiSlice } from "../api/apiSlice";
import { productApi } from "../products/api";
import { suppliersApi } from "../suppliers/api";
import { setSupplies, setSupply } from "./slice";

export const suppliesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supplies = data?.data?.data || [];
          dispatch(setSupplies(supplies));
        } catch (error) {
          console.error("Failed to fetch supplies:", error);
        }
      },
    }),
    addSupply: builder.mutation({
      query: (data) => ({
        url: "/supplies/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supply = data?.data?.data || null;
          dispatch(
            suppliesApi.util.updateQueryData("getSupplies", null, (draft) => {
              draft.data = [...draft.data, { ...supply }];
            })
          );
          dispatch(setSupply(supply));
          dispatch(productApi.endpoints.getProducts.initiate(null)).refetch();
          dispatch(
            suppliersApi.endpoints.getSuppliers.initiate(null)
          ).refetch();
        } catch (error) {
          console.error("Faild to add supply:", error);
        }
      },
    }),
  }),
});

export const { useGetSuppliesQuery, useAddSupplyMutation } = suppliesApi;
