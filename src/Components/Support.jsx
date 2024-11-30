"use client";

import Image from "next/image";
import React from "react";

const Support = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
        {/* Free Shipping */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/Img/supportIcons/truck.png"
              alt="Free Shipping"
              width={45}
              height={45}
            />
            <span className="text-xl font-semibold">Free Shipping</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Above all Orders over 200rs.
          </p>
        </div>

        {/* Money Guarantee */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/Img/supportIcons/indian-rupee.png"
              alt="Money Guarantee"
              width={45}
              height={45}
            />
            <span className="text-xl font-semibold">Money Guarantee</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">45 Days for Exchange</p>
        </div>

        {/* Online Support */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/Img/supportIcons/headphones.png"
              alt="Online Support"
              width={45}
              height={45}
            />
            <span className="text-xl font-semibold">Online Support</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">24/7 Customer Care</p>
        </div>

        {/* Flexible Payment */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/Img/supportIcons/credit-card.png"
              alt="Flexible Payment"
              width={45}
              height={45}
            />
            <span className="text-xl font-semibold">Flexible Payment</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            Pay with multiple Credit Cards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
