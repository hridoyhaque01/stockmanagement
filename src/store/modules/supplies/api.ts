import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies/all",
      }),
    }),
  }),
});

export const { useGetSuppliesQuery } = authApi;
