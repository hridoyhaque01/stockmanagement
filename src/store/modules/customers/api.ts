import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: "/customers/all",
      }),
    }),
  }),
});

export const { useGetCustomersQuery } = authApi;
