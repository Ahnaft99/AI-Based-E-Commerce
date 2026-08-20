import { configureStore } from "@reduxjs/toolkit";

import ProductReducer from "../Slice/ProductSlice";
import cartReducer from "../Slice/CartSlice";

export const Store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: cartReducer,
  },
});