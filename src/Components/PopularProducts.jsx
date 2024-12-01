"use client";

import { getProduct } from "@/redux/slices/productSlice";
import sortLongString from "@/utils/sortString";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductLoaderCard from "./Loader/ProductLoader";

const PopularProducts = () => {
  const dispatch = useDispatch();
  const { product, productLoading } = useSelector((state) => state.productData);

  //get Products data---------

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const addToCart = (product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <section className="container mx-auto px-10 md:px-20 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2
          className="text-2xl text-gray-800"
          style={{ fontFamily: "sans-serif", fontWeight: 400 }}
        >
          Feature Products
        </h2>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {productLoading
          ? Array(8)
              .fill(0)
              .map((_, index) => <ProductLoaderCard key={index} />)
          : product?.slice(4, 12)?.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={item?.image}
                    alt="Product Image"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-300"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4.318C10.4 2.718 7.514 2.718 5.914 4.318a5.418 5.418 0 000 7.664L11.294 17.36a.75.75 0 001.062 0l5.38-5.378a5.418 5.418 0 000-7.664C16.486 2.718 13.6 2.718 12 4.318z"
                      />
                    </svg>
                  </button>
                  <span className="absolute bottom-2 left-2 bg-white text-dark text-xs px-2 py-1 rounded">
                    {item?.rating?.rate}{" "}
                    <span className="text-yellow-500">★</span>
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item?.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {sortLongString(item?.description)}
                  </p>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-teal-500">
                      {`Rs.${item.price}`}
                    </span>

                    <span className="text-sm text-red-500">30% off</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
};

export default PopularProducts;
