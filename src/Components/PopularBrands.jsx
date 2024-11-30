"use client";

import Head from "next/head";
import Image from "next/image";

export default function PopularBrands() {
  return (
    <div>
      {/* SEO Metadata */}
      <Head>
        <title>Popular Brands - Puma, addidas, Fila, Forever 21</title>
        <meta
          name="description"
          content="We are selling Top Brand's Products Puma, Fila, Forever21 , Adidas- Join 95% happy customers and shop now!"
        />

        <meta name="author" content="MyBusiness" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-white px-4 md:px-10 lg:px-10 py-10">
        <section aria-label="Categories">
          <h2
            className="text-2xl  text-gray-800 text-left lg:ms-8"
            style={{ fontFamily: "sans-serif", fontWeight: 400 }}
          >
            Popular Brands
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 lg:gap-20 gap-8 mt-12">
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-men"
            >
              <div className="w-20 h-20  flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo2.png"
                  alt="brandIcons"
                  title="Metaverse"
                  width={340}
                  height={400}
                />
              </div>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-kids"
            >
              <div className="w-24 h-24  flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo3.png"
                  alt="brandIcons"
                  title="Adidas Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-women"
            >
              <div className="w-20 h-20  flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo1.png"
                  alt="brandIcons"
                  title="Puma Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-cosmetics"
            >
              <div className="w-24 h-24  flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo4.png"
                  alt="brandIcons"
                  title="Channel Brand Product"
                  width={340}
                  height={340}
                />
              </div>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-accessories"
            >
              <div className="w-24 h-24  flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo5.png"
                  alt="brandIcons"
                  title="Channel Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>
            <article
              className="flex flex-col items-center"
              aria-labelledby="category-home"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo6.png"
                  alt="brandIcons"
                  title="Forever21 Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-sports"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo7.png"
                  alt="brandIcons"
                  title="Fila Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>

            <article
              className="flex flex-col items-center"
              aria-labelledby="category-sports"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src="/Img/brandIcons/brandLogo8.png"
                  alt="brandIcons"
                  title="Loco Brand Product"
                  width={300}
                  height={300}
                />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
