'use client';

import Head from "next/head";
import Image from "next/image";

export default function Category() {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <title>Shop Categories - MyBusiness</title>
        <meta
          name="description"
          content="Explore categories like Men, Women, Kids, Cosmetics, Accessories, Home, Footwears, and Sports. Join 95% happy customers and shop now!"
        />
        <meta
          name="keywords"
          content="Categories, Men, Women, Kids, Cosmetics, Accessories, Home, Footwears, Sports, Shopping"
        />
        <meta name="author" content="MyBusiness" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-white px-4 md:px-10 lg:px-20 py-10">
        <section aria-label="Categories">
          <h2
            className="text-2xl  text-gray-800 text-left ms-2"
            style={{ fontFamily: "sans-serif", fontWeight: 400 }}
          >
            Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-20 gap-8 mt-12">
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-men"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/men-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-men" className="mt-2 text-sm text-gray">
                <strong>Men</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-women"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/female-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-women" className="mt-2 text-sm text-gray-700">
                <strong>Women</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-kids"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/kids-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-kids" className="mt-2 text-sm text-gray-700">
                <strong>Kids</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-cosmetics"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/cosmetics-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-cosmetics" className="mt-2 text-sm text-gray-700">
                <strong>Cosmetics</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-accessories"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/accessories-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-accessories" className="mt-2 text-sm text-gray-700">
                <strong>Accessories</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-home"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/home-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-home" className="mt-2 text-sm text-gray-700">
                <strong>Home</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-footwears"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/footwears-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-footwears" className="mt-2 text-sm text-gray-700">
                <strong>Footwears</strong>
              </p>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-sports"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Img/categoryIcons/sports-icon.png"
                  alt="Men Category"
                  width={300}
                  height={300}
                />
              </div>
              <p id="category-sports" className="mt-2 text-sm text-gray-700">
                <strong>Sports</strong>
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
