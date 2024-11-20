import { createSlice } from "@reduxjs/toolkit";
import { GrainsState } from "./types";

const initialState: GrainsState = {
  grains: [],
  grainHistories: [],
};

const slice = createSlice({
  name: "grainsSlice",
  initialState,
  reducers: {
    setGrains: (state, action) => {
      state.grains = action.payload;
    },
    setGrain: (state, action) => {
      state.grains = [...state.grains, action.payload];
    },
    setGrainHistories: (state, action) => {
      state.grainHistories = action.payload;
    },
    setGrainHistory: (state, action) => {
      state.grainHistories = [...state.grainHistories, action.payload];
    },
    sortGrains: (state, action) => {
      const sortType = action.payload;
      state.grains.sort((a, b) => {
        if (sortType === "asc") {
          return a.timestamp - b.timestamp;
        }
        return b.timestamp - a.timestamp;
      });
    },
    sortGrainHistories: (state, action) => {
      const sortType = action.payload;
      state.grainHistories.sort((a, b) => {
        if (sortType === "asc") {
          return a.proccessTime - b.proccessTime;
        }
        return b.proccessTime - a.proccessTime;
      });
    },
  },
});

export const {
  setGrains,
  setGrain,
  setGrainHistories,
  setGrainHistory,
  sortGrains,
  sortGrainHistories,
} = slice.actions;
export default slice.reducer;
