import { apiSlice } from "../api/apiSlice";
import { setCustomer, setCustomers } from "./slice";

export const customersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: "/customers/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const customers = data?.data?.data || [];
          dispatch(setCustomers(customers));
        } catch (error) {
          console.error("Failed to fetch customers:", error);
        }
      },
    }),
    addCustomer: builder.mutation({
      query: (data) => ({
        url: "/customers/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const customer = data?.data?.data || null;
          dispatch(
            customersApi.util.updateQueryData("getCustomers", null, (draft) => {
              draft.data = [...draft.data, { ...customer }];
            })
          );
          dispatch(setCustomer(customer));
        } catch (error) {
          console.error("Faild to add customer:", error);
        }
      },
    }),
  }),
});

export const { useGetCustomersQuery, useAddCustomerMutation } = customersApi;
