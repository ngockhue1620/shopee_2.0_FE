import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category-slice";
import { cartSlice } from "./cart-slice";

const store = configureStore({
  reducer: { category: categorySlice.reducer, cart: cartSlice.reducer },
});
store.subscribe(() => console.log(store.getState()));
export default store;
