"use client";

import Head from "next/head";

export default function Statistics() {
  return (
    <div>
      <Head>
        <title>Shop Statistics</title>
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
        {/* Statistics Section */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
          aria-label="Statistics"
        >
          <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p className="text-3xl font-bold text-gray-800">95%</p>
            <span className="mt-2 text-gray-600">Happy Customer</span>
          </article>
          <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p className="text-3xl font-bold text-gray-800">1 Million+</p>
            <span className="mt-2 text-gray-600">Yearly Sale</span>
          </article>
          <article className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <p className="text-3xl font-bold text-gray-800">20k+</p>
            <span className="mt-2 text-gray-600">Customer Rating</span>
          </article>
        </section>
      </main>
    </div>
  );
}
