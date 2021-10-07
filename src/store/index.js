import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category-slice";

const store = configureStore({
  reducer: { category: categorySlice.reducer },
});
store.subscribe(() => console.log(store.getState()));
export default store;
