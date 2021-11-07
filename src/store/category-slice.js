import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategory(state, action) {
      return action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;


