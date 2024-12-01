"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";

const Banner = dynamic(() => import("../Components/Banner"), { ssr: false });
const Statistics = dynamic(() => import("../Components/Statistics"), {
  ssr: false,
});
const Category = dynamic(() => import("../Components/Category"), {
  ssr: false,
});
const FeatureProducts = dynamic(() => import("../Components/FeatureProducts"), {
  ssr: false,
});
const OfferBanner = dynamic(() => import("../Components/OfferBanner"), {
  ssr: false,
});
const Support = dynamic(() => import("../Components/Support"), { ssr: false });
const PopularProducts = dynamic(() => import("../Components/PopularProducts"), {
  ssr: false,
});
const PopularBrands = dynamic(() => import("../Components/PopularBrands"), {
  ssr: false,
});
const FAQs = dynamic(() => import("../Components/FAQs"), { ssr: false });
const ReviewSlider = dynamic(() => import("../Components/ReviewSlider"), {
  ssr: false,
});

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <section>
          <Head>
            <title>Home - My Ecommerce Shop</title>
            <meta
              name="description"
              content="Welcome to our website with amazing categories and statistics."
            />
            <meta name="keywords" content="home, statistics, categories" />
          </Head>

          {/* Main Content */}
          <Banner />
          <Statistics />
          <Category />
          <FeatureProducts />
          <Support />
          <OfferBanner />
          <PopularProducts />
          <PopularBrands />
          <FAQs />
          <ReviewSlider />
        </section>
      )}
    </>
  );
}
