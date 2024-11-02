import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGrains: builder.query({
      query: () => ({
        url: "/grains/all",
      }),
    }),
  }),
});

export const { useGetGrainsQuery } = authApi;
