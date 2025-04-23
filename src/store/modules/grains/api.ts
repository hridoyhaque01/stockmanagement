import { apiSlice } from "../api/apiSlice";
import { productApi } from "../products/api";
import {
  setGrain,
  setGrainHistories,
  setGrainHistory,
  setGrains,
} from "./slice";

export const grainsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGrains: builder.query({
      query: () => ({
        url: "/grains/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const grains = data?.data?.data || [];
          dispatch(setGrains(grains));
        } catch (error) {
          console.error("Failed to fetch grains:", error);
        }
      },
    }),
    addGrain: builder.mutation({
      query: (data) => ({
        url: "/grains/add",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const grain = data?.data?.data || null;
          dispatch(
            grainsApi.util.updateQueryData("getGrains", null, (draft) => {
              draft.data = [...draft.data, { ...grain }];
            })
          );
          dispatch(setGrain(grain));
        } catch (error) {
          console.error("Faild to add grain:", error);
        }
      },
    }),
    getGrainHistories: builder.query({
      query: () => ({
        url: "/grain-histories/all",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const grainHistories = data?.data?.data || [];
          dispatch(setGrainHistories(grainHistories));
        } catch (error) {
          console.error("Failed to fetch histories:", error);
        }
      },
    }),
    addGrainHistory: builder.mutation({
      query: (data) => ({
        url: "grain-histories/add-grain",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          const history = data?.data?.data || null;
          dispatch(
            grainsApi.util.updateQueryData(
              "getGrainHistories",
              null,
              (draft) => {
                draft.data = [...draft.data, { ...history }];
              }
            )
          );
          dispatch(setGrainHistory(history));
          dispatch(grainsApi.endpoints.getGrains.initiate(null)).refetch();
          dispatch(productApi.endpoints.getProducts.initiate(null)).refetch();
        } catch (error) {
          console.error("Faild to add grain history:", error);
        }
      },
    }),
  }),
});

export const {
  useGetGrainsQuery,
  useAddGrainMutation,
  useGetGrainHistoriesQuery,
  useAddGrainHistoryMutation,
} = grainsApi;
