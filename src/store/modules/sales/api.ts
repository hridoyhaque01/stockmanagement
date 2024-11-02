import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/orders/all",
      }),
    }),
  }),
});

export const { useGetSalesQuery } = authApi;
