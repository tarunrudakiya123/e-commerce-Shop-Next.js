"use client";

import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const Banner = () => {
  return (
    <section className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
        {/* Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Lorem ipsum <br /> dolor sit.
          </h1>

          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis
            ipsam ad dolor adipisci? Excepturi, pariatur eum ad unde facilis
            error est sed hic possimus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Iste nobis ipsam ad dolor adipisci?
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

        {/* Image Section */}
        <div className="lg:w-2/3 relative flex justify-center items-center bg-gray-50">
          <img
            src="/Img/shoe.jpeg"
            alt="Shoe Banner"
            className="max-w-full object-cover h-auto lg:ms-20"
          />

          {/* Slide Buttons */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="bg-white text-gray-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200">
              <KeyboardBackspaceOutlinedIcon />
            </button>
            <button className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-teal-600">
              <EastOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
