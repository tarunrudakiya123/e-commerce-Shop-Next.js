"use client";

import Head from "next/head";
import Image from "next/image";

export default function PopularBrands() {
  return (
    <div>
      <Head>
        <title>Popular Brands - Puma, Adidas, Fila, Forever 21</title>
        <meta
          name="description"
          content="We are selling top brand's products from Puma, Fila, Forever 21, Adidas, and more. Join 95% happy customers and shop now!"
        />
        <meta name="author" content="MyBusiness" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Popular Brands - Puma, Adidas, Fila, Forever 21"
        />
        <meta
          property="og:description"
          content="Shop products from top brands including Puma, Fila, Forever 21, and Adidas."
        />
        <meta property="og:image" content="/Img/brandIcons/brandLogo1.png" />
        <meta property="og:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Popular Brands - Puma, Adidas, Fila, Forever 21"
        />
        <meta
          name="twitter:description"
          content="Shop products from top brands including Puma, Fila, Forever 21, and Adidas."
        />
        <meta name="twitter:image" content="/Img/brandIcons/brandLogo1.png" />
      </Head>

      <main className="bg-white px-4 md:px-10 lg:px-10 py-10">
        <section aria-label="Popular Brands">
          <h2
            className="text-2xl text-gray-800 text-left lg:ms-8"
            style={{ fontFamily: "sans-serif", fontWeight: 400 }}
          >
            Popular Brands
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-20 gap-8 mt-12">
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-puma"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo2.png"
                  alt="Puma Brand Logo"
                  title="Puma Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-adidas"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo3.png"
                  alt="Adidas Brand Logo"
                  title="Adidas Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-puma"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo1.png"
                  alt="Puma Brand Logo"
                  title="Puma Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-channel"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo4.png"
                  alt="Chanel Brand Logo"
                  title="Chanel Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-forever21"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo5.png"
                  alt="Forever 21 Brand Logo"
                  title="Forever 21 Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-fila"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo6.png"
                  alt="Fila Brand Logo"
                  title="Fila Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-loco"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo7.png"
                  alt="Loco Brand Logo"
                  title="Loco Brand Product"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-other-brands"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo8.png"
                  alt="Other Brands"
                  title="Other Brands"
                  width={300}
                  height={300}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
