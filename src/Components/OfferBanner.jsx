"use client";

import Image from "next/image";

export default function OfferBanner() {
  return (
    <section className="w-full">
      <div className="bg-teal-50 px-6 py-8 md:px-20 md:py-18">
        <div className="offerbanner container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-10 px-6 md:px-20 rounded-xl">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Lorem ipsum dolor sit.
            </h1>
            <p className="text-white text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
              pellentesque feugiat gravida tincidunt lobortis mi.
            </p>
            <button className="mt-6 bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-teal-600">
              Buy Now
            </button>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute top-2 right-2 md:top-4 md:right-4 text-teal-500 font-bold py-2">
              <Image
                src="/Img/specialOffer-icon.png"
                alt="Special Offer Icon"
                width={140}
                height={140}
                className="rounded-full"
              />
            </div>
            <Image
              src="/Img/models.png"
              alt="Banner Image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
