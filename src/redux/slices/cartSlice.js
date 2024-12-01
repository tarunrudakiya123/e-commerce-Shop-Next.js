import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSliceDetails = createSlice({
  name: "cartSliceDetails",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        state.cartItems.push({
          ...newProduct,
          quantity: newProduct.quantity || 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      if (product) {
        if (type === "increase") {
          product.quantity += 1;
        } else if (type === "decrease" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSliceDetails.actions;

export default cartSliceDetails.reducer;
