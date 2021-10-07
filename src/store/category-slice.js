import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: [],
  reducers: {
    setCategory(state, action) {
      return action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
