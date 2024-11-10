import { apiSlice } from "../api/apiSlice";
import { setProduct, setProducts, updateProduct } from "./slice";
import { Product } from "./types";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const products = data?.data?.data || [];
          dispatch(setProducts(products));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const product = data?.data?.data || null;
          dispatch(
            productApi.util.updateQueryData("getProducts", null, (draft) => {
              draft.data = [...draft.data, { ...product }];
            })
          );
          dispatch(setProduct(product));
        } catch (error) {
          console.error("Faild to add product:", error);
        }
      },
    }),
    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const product = data?.data?.data || null;
          dispatch(
            productApi.util.updateQueryData("getProducts", null, (draft) => {
              const index = draft?.data?.findIndex(
                (item: Product) => item?.id === id
              );
              if (index > -1) {
                draft.data[index] = { ...product };
              }
            })
          );
          dispatch(updateProduct(product));
        } catch (error) {
          console.error("Faild to add product:", error);
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
} = productApi;
