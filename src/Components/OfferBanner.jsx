"use client";

import Image from "next/image";

export default function OfferBanner() {
  return (
    <section className="w-full">
      <div className="bg-teal-50 px-6 py-8 md:px-20 md:py-18">
        <div className="offerbanner container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-10 px-6 md:px-20 rounded-xl">
          {/* Offer Text Content */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Exclusive 50% Off on Your First Purchase!
            </h1>
            <p className="text-white text-sm md:text-base">
              Don’t miss out on our limited-time offer! Get 50% off your first
              purchase of selected items in our store. Whether you’re upgrading
              your wardrobe or finding the perfect gift, now’s the time to shop
              and save.
            </p>
            <p className="text-white text-sm md:text-base font-semibold">
              Use code <span className="text-yellow-400">FIRST50</span> at
              checkout.
            </p>
            <button className="mt-6 bg-white text-teal-500 px-6 py-3 rounded-md hover:bg-teal-600 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Offer Image */}
          <div className="flex justify-center relative">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-teal-500 font-bold py-2">
              <Image
                src="/Img/specialOffer-icon.png"
                alt="Special Offer Icon"
                width={140}
                height={140}
                className="rounded-full"
                priority
              />
            </div>
            <Image
              src="/Img/models.png"
              alt="Banner Image"
              width={400}
              height={400}
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
