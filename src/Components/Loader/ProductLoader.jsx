"use client";

import React from "react";

const ProductLoaderCard = () => {
  return (
    <div className="w-52 h-80 bg-white rounded-lg shadow-lg p-4 space-y-4">
      <div className="w-full h-40 bg-gray-300 animate-pulse rounded-lg"></div>

      <div className="w-4/5 h-6 bg-gray-300 animate-pulse rounded"></div>

      <div className="w-3/5 h-6 bg-gray-300 animate-pulse rounded"></div>

      <div className="w-full h-10 bg-gray-300 animate-pulse rounded-lg"></div>
    </div>
  );
};

export default ProductLoaderCard;
