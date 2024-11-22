import { apiSlice } from "../api/apiSlice";
import { productApi } from "../products/api";
import { suppliersApi } from "../suppliers/api";
import {
  removeSupply,
  setProductSupplies,
  setSupplierSupplies,
  setSupplies,
  setSupply,
} from "./slice";

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
    getSupplierSupplies: builder.query({
      query: (supplierId: string | undefined) => ({
        url: `/supplies/supplier/${supplierId}`,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supplies = data?.data?.data || [];
          dispatch(setSupplierSupplies(supplies));
        } catch (error) {
          console.error("Failed to fetch supplies:", error);
        }
      },
    }),
    getProductSupplies: builder.query({
      query: (productId: string | undefined) => ({
        url: `/supplies/product/${productId}`,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supplies = data?.data?.data || [];
          dispatch(setProductSupplies(supplies));
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
    removeSupply: builder.mutation({
      query: (suppliesId) => ({
        url: `/supplies/delete/${suppliesId}`,
        method: "DELETE",
      }),
      async onQueryStarted(suppliesId, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            suppliesApi.util.updateQueryData("getSupplies", null, (draft) => {
              draft.data = [...draft.data]?.filter(
                (item) => item?.id !== suppliesId
              );
            })
          );
          dispatch(productApi.endpoints.getProducts.initiate(null)).refetch();
          dispatch(removeSupply(suppliesId));
        } catch (error) {
          console.error("Faild to add supply:", error);
        }
      },
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useAddSupplyMutation,
  useGetSupplierSuppliesQuery,
  useGetProductSuppliesQuery,
  useRemoveSupplyMutation,
} = suppliesApi;
