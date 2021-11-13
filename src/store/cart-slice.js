import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart(state, action) {
      return action.payload;
    },
    addProduct(state, action) {
      const product = state.find(
        (x) => x.product.id === action.payload.product?.id
      );
      if (!product) state.push(action.payload);
      else {
        product.quantity += action.payload.quantity;
      }
    },
    changeQty(state, action) {
      const product = state.find((x) => x.product.id === action.payload.id);
      product.quantity = action.payload.quantity;
    },
    removeProduct(state, action) {
      return state.filter((x) => x.product.id !== action.payload);
    },
    updateId(state, action) {
      return state.map((x) =>
        x.product.id === action.payload.productId
          ? {
              ...x,
              id: action.payload.id,
            }
          : x
      );
    },
  },
});

export const cartActions = cartSlice.actions;
