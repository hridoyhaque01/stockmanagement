import { apiSlice } from "../api/apiSlice";
import {
  setSupplier,
  setSuppliers,
  updateSupplier,
  updateSupplierDue,
} from "./slice";
import { Supplier } from "./types";

export const suppliersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSuppliers: builder.query({
      query: () => ({
        url: "/suppliers/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const suppliers = data?.data?.data || [];
          dispatch(setSuppliers(suppliers));
        } catch (error) {
          console.error("Failed to fetch suppliers:", error);
        }
      },
    }),
    addSupplier: builder.mutation({
      query: (data) => ({
        url: "/suppliers/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supplier = data?.data?.data || null;
          dispatch(
            suppliersApi.util.updateQueryData("getSuppliers", null, (draft) => {
              draft.data = [...draft.data, { ...supplier }];
            })
          );
          dispatch(setSupplier(supplier));
        } catch (error) {
          console.error("Faild to add supplier:", error);
        }
      },
    }),
    updateSupplier: builder.mutation({
      query: ({ data, id = null }) => ({
        url: `/suppliers/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const supplier = data?.data?.data || null;
          dispatch(
            suppliersApi.util.updateQueryData("getSuppliers", null, (draft) => {
              const index = draft?.data?.findIndex(
                (item: Supplier) => item?.id === id
              );
              if (index > -1) {
                draft.data[index] = { ...supplier };
              }
            })
          );
          dispatch(updateSupplier(supplier));
        } catch (error) {
          console.error("Faild to add supplier:", error);
        }
      },
    }),
    addSupplierPayment: builder.mutation({
      query: ({ data, id = null }: { data: FormData; id: null | string }) => ({
        url: `supplies/supplierPayment/${id}`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const data = result?.data?.data || null;

          const updateData = {
            paidAmount: data?.paidAmount,
            supplierId: data?.supplier?.id,
          };
          dispatch(updateSupplierDue(updateData));
        } catch (error) {
          console.error("Faild to add supplier:", error);
        }
      },
    }),
  }),
});

export const {
  useGetSuppliersQuery,
  useAddSupplierMutation,
  useUpdateSupplierMutation,
  useAddSupplierPaymentMutation,
} = suppliersApi;
