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
  },
});

export const { setGrains, setGrain, setGrainHistories, setGrainHistory } =
  slice.actions;
export default slice.reducer;
