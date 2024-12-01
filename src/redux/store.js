"use client";

import { configureStore } from "@reduxjs/toolkit";

import ProductSliceDetails from "./slices/productSlice";
import cartSliceDetails from "./slices/cartSlice";


const store = configureStore({
  reducer: {
    productData: ProductSliceDetails,
    cartData : cartSliceDetails
  },
});

export default store;
