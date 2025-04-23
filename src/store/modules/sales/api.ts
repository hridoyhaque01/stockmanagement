import { apiSlice } from "../api/apiSlice";
import { grainsApi } from "../grains/api";
import { setCustomerSales, setSale, setSales } from "./slice";

export const salesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSales: builder.query({
      query: () => ({
        url: "/orders/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const orders = data?.data?.data || [];
          dispatch(setSales(orders));
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        }
      },
    }),
    getCustomerSales: builder.query({
      query: (customerId: string | undefined) => ({
        url: `/orders/customer/${customerId}`,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const orders = data?.data?.data || [];
          dispatch(setCustomerSales(orders));
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        }
      },
    }),
    addSale: builder.mutation({
      query: (data) => ({
        url: "/orders/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const order = data?.data?.data || null;
          dispatch(
            salesApi.util.updateQueryData("getSales", null, (draft) => {
              draft.data = [...draft.data, { ...order }];
            })
          );
          dispatch(setSale(order));
          dispatch(grainsApi.endpoints.getGrains.initiate(null)).refetch();
        } catch (error) {
          console.error("Faild to add order:", error);
        }
      },
    }),
  }),
});

export const {
  useGetSalesQuery,
  useAddSaleMutation,
  useGetCustomerSalesQuery,
} = salesApi;
