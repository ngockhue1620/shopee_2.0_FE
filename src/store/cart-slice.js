import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      const product = state.find(
        (x) => x.product.id === action.payload.product.id
      );
      if (!product) state.push(action.payload);
      else {
        product.quantity += action.payload.quantity;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
