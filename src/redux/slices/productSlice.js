'use client';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
  "getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

export const ProductSliceDetails = createSlice({
  name: "ProductSliceDetails",
  initialState: {
    product: [],
    productLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.productLoading = false;
        state.product = action.payload;
        state.error = null;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.productLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default ProductSliceDetails.reducer;
