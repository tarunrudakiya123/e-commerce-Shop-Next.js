"use client";

import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Manage Cart---------
  const updateQuantity = (productId, operation) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity:
                operation === "increase"
                  ? product.quantity + 1
                  : product.quantity - 1,
            }
          : product
      )
    );
  };

  // Remove product from cart----------
  const removeItem = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // Calculate the subtotal-------------
  const calculateSubtotal = (product) => product?.price * product?.quantity;

  // Calculate the grand total-----------
  const calculateGrandTotal = () =>
    cart.reduce((total, product) => total + calculateSubtotal(product), 0);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-xl font-bold mb-6">Your Cart</h1>
      <div className="overflow-x-auto">
        {/* Table Header--------------- */}
        <table className="table-auto w-full border-collapse border">
          <thead className="bg-teal-50 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Product Details</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Shipping</th>
              <th className="px-4 py-2 text-left">Subtotal</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-4 flex items-center gap-4">
                    <img
                      src={product.image || "/default-image.jpg"}
                      alt={product.name}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <h2 className="font-medium">{product.name}</h2>
                      <p className="text-sm text-gray-500">
                        Color: {product.color}
                      </p>
                      <p className="text-sm text-gray-500">
                        Size: {product.size}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-4">Rs.{product.price}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => updateQuantity(product.id, "decrease")}
                        disabled={product.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => updateQuantity(product.id, "increase")}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">Free</td>
                  <td className="px-4 py-4">Rs.{calculateSubtotal(product)}</td>
                  <td className="px-4 py-4">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(product.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Your cart is empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Discount and Summary Section---------- */}
      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-4">Discount Codes</h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter your coupon code"
              className="flex-1 p-2 border rounded"
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Apply Coupon
            </button>
          </div>
          <button className="mt-4 text-teal-600 bg-white p-2 border rounded-lg border-teal-500">
            Continue Shopping
          </button>
        </div>
        <div className="flex-1 border p-4 rounded-md bg-teal-50">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>Rs.{calculateGrandTotal()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs.0</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Grand Total</span>
            <span>Rs.{calculateGrandTotal()}</span>
          </div>
          <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
