"use client";

import { useState } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Banner = () => {
  const images = ["/Img/shoe1.png", "/Img/shoe2.png", "/Img/shoe3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  //Handlers---------------
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Left side------------ */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Nike Classics Spotlight.
          </h1>

          <p className="text-gray-600 mt-4 justify-normal">
            Designed for city conditions, this winterized version of the Vomero
            is made for wet weather. Durable materials and a rubber mudguard
            work together to help safeguard your shoes from dirt and puddles.
            Plus, a chunky midsole gives you a visible boost of comfort and
            style wherever you wander.
          </p>

          <div className="flex justify-center lg:justify-start mt-6 space-x-4">
            <button className="border border-teal-500 text-teal-500 px-12 py-3 rounded-md hover:bg-teal-100">
              Explore
            </button>

            <button className="bg-teal-500 text-white px-12 py-3 rounded-md hover:bg-teal-600">
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side--------- */}
        <div className="lg:w-2/3 relative flex justify-center items-center bg-gray-50">
          <img
            src={images[currentIndex]}
            alt="Shoe Banner"
            className=" object-cover h-auto lg:ms-20"
          />

          {/* Slide Buttons-------- */}
          <div className="absolute bottom-16 right-6 flex space-x-2">
            <button
              onClick={handlePrev}
              className="bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200"
            >
              <KeyboardBackspaceOutlinedIcon />
            </button>
            <button
              onClick={handleNext}
              className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600"
            >
              <EastOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
