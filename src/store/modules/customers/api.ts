import { apiSlice } from "../api/apiSlice";
import {
  setCustomer,
  setCustomers,
  updateCustomer,
  updateCustomerDue,
} from "./slice";
import { Customer } from "./types";

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
    updateCustomer: builder.mutation({
      query: ({ data, id }: { data: FormData; id: string | null }) => ({
        url: `customers/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const customer = data?.data?.data || null;
          dispatch(
            customersApi.util.updateQueryData("getCustomers", null, (draft) => {
              const index = draft?.data?.findIndex(
                (item: Customer) => item?.id === id
              );
              if (index > -1) {
                draft.data[index] = { ...customer };
              }
            })
          );
          dispatch(updateCustomer(customer));
        } catch (error) {
          console.error("Faild to add customer:", error);
        }
      },
    }),
    addCustomerPayment: builder.mutation({
      query: ({ data, id }: { data: FormData; id: string | null }) => ({
        url: `orders/customerPayment/${id}`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const customer = result?.data?.data || null;

          const updateData = {
            paidAmount: customer?.totalPaid,
            customerId: customer?.customer?.id,
          };
          dispatch(updateCustomerDue(updateData));
        } catch (error) {
          console.error("Faild to add customer:", error);
        }
      },
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useAddCustomerMutation,
  useAddCustomerPaymentMutation,
  useUpdateCustomerMutation,
} = customersApi;
