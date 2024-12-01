"use client";

import { useState, useEffect } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Link from "next/link";

const Banner = () => {
  const images = [
    { src: "/Img/shoe1.png", alt: "Classic Nike Shoe 1" },
    { src: "/Img/shoe2.png", alt: "Classic Nike Shoe 2" },
    { src: "/Img/shoe3.png", alt: "Classic Nike Shoe 3" },

    { src: "/Img/shoe1.png", alt: "Classic Nike Shoe 1" },
    { src: "/Img/shoe2.png", alt: "Classic Nike Shoe 2" },
    { src: "/Img/shoe3.png", alt: "Classic Nike Shoe 3" },

    { src: "/Img/shoe1.png", alt: "Classic Nike Shoe 1" },
    { src: "/Img/shoe2.png", alt: "Classic Nike Shoe 2" },
    { src: "/Img/shoe3.png", alt: "Classic Nike Shoe 3" },

    { src: "/Img/shoe1.png", alt: "Classic Nike Shoe 1" },
    { src: "/Img/shoe2.png", alt: "Classic Nike Shoe 2" },
    { src: "/Img/shoe3.png", alt: "Classic Nike Shoe 3" },

    { src: "/Img/shoe1.png", alt: "Classic Nike Shoe 1" },
    { src: "/Img/shoe2.png", alt: "Classic Nike Shoe 2" },
    { src: "/Img/shoe3.png", alt: "Classic Nike Shoe 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      style={{ backgroundColor: "#f5f5f5" }}
      className="min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Left Side */}
      <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Nike Classics Spotlight.
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Designed for city conditions, this winterized version of the Vomero is
          made for wet weather. Durable materials and a rubber mudguard work
          together to help safeguard your shoes from dirt and puddles. Plus, a
          chunky midsole gives you a visible boost of comfort and style wherever
          you wander.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#"
            className="border border-teal-500 text-teal-500 px-8 sm:px-12 py-2 sm:py-3 rounded-md hover:bg-teal-100 no-underline"
          >
            Explore
          </Link>

          <Link
            href="#"
            className="bg-teal-500 text-white px-8 sm:px-12 py-2 sm:py-3 rounded-md hover:bg-teal-600 no-underline"
          >
            Buy Now
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex justify-center items-center bg-gray-50 relative lg:right-10 md:right-10">
        <div className="w-full h-64 sm:h-96 md:h-full overflow-hidden relative">
          <div className="w-full h-full relative">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform-gpu"
              style={{
                transform: `perspective(1000px) rotateY(${
                  currentIndex * 180
                }deg)`,
              }}
            />
          </div>
        </div>

        {/* Slide Buttons */}
        <div className="absolute bottom-0  lg:bottom-20 lg:right-10 right-30 flex space-x-2">
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            aria-label="Previous Slide"
          >
            <KeyboardBackspaceOutlinedIcon />
          </button>

          <button
            onClick={handleNext}
            className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-teal-600 cursor-pointer"
            aria-label="Next Slide"
          >
            <EastOutlinedIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
