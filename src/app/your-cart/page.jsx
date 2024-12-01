"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartData);

  const calculateSubtotal = (product) =>
    product?.price * Number(product?.quantity);

  const calculateGrandTotal = () =>
    cartItems?.reduce(
      (total, product) => total + calculateSubtotal(product),
      0
    );

  const handleQuantityChange = (productId, type) => {
    dispatch(updateQuantity({ id: productId, type }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success("Product Removed From Cart", {
      style: {
        backgroundColor: "rgb(20, 184, 166)",
        color: "white",
      },
    });
  };

  return (
    <div className="p-4 md:p-8 lg:px:4">
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

          <tbody className="bg-white">
            {cartItems?.length > 0 ? (
              cartItems?.map((product) => (
                <tr key={product?.id} className="border-t">
                  <td className="px-4 py-4 flex items-center gap-4">
                    <Image
                      src={product?.image}
                      alt={product?.name}
                      width={64}
                      height={64}
                      className="rounded"
                    />
                  </td>
                  <td className="px-4 py-4">Rs.{product?.price}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() =>
                          handleQuantityChange(product?.id, "decrease")
                        }
                        disabled={product?.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="mx-2">{product?.quantity}</span>
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() =>
                          handleQuantityChange(product.id, "increase")
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4">Free</td>
                  <td className="px-4 py-4">Rs.{calculateSubtotal(product)}</td>
                  <td className="px-4 py-4">
                    <button onClick={() => handleRemoveItem(product?.id)}>
                      <Image
                        priority
                        src="/Img/deleteIcon.png"
                        alt={product?.name}
                        width={24}
                        height={24}
                        className="ms-2"
                      />
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

          <Link href="/">
            <button className="mt-4 text-teal-600 bg-white p-2 border rounded-lg border-teal-500">
              Continue Shopping
            </button>
          </Link>
        </div>
        <div className="flex-1 border p-4 rounded-md bg-teal-50">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>Rs.{calculateGrandTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Rs.0</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Grand Total</span>
            <span>Rs.{calculateGrandTotal().toFixed(2)}</span>
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
