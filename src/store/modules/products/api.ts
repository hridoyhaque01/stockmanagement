import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products/all",
      }),
    }),
    // product: builder.mutation({
    //   query: (data) => ({
    //     url: "/users/login",
    //     method: "POST",
    //     body: data,
    //   }),
    //   async onQueryStarted(_, { dispatch, queryFulfilled }) {
    //     try {

    //     } catch (error) {
    //       console.error("Error resending OTP:", error);
    //     }
    //   },
    // }),
  }),
});

export const { useGetProductsQuery } = authApi;
