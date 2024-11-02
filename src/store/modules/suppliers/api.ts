import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuppliers: builder.query({
      query: () => ({
        url: "/suppliers/all",
      }),
    }),
  }),
});

export const { useGetSuppliersQuery } = authApi;
