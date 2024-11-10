import { apiSlice } from "../api/apiSlice";
import { setSupplier, setSuppliers } from "./slice";

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
  }),
});

export const { useGetSuppliersQuery, useAddSupplierMutation } = suppliersApi;
