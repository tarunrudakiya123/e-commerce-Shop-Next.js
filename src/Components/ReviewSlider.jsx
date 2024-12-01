import Image from "next/image";
import Slider from "react-slick";

const reviews = [
  {
    name: "Floyd Miles",
    image: "/Img/reviewProfiles/review1.png",
    rating: 4,
    review:
      "Great product! The quality is amazing and the customer service was top-notch. Highly recommend.",
  },
  {
    name: "Ronald Richards",
    image: "/Img/reviewProfiles/review2.png",
    rating: 5,
    review:
      "Excellent experience. Quick delivery and the product exceeded expectations!",
  },
  {
    name: "Savannah Nguyen",
    image: "/Img/reviewProfiles/review3.png",
    rating: 3,
    review: "Good product but took a while to arrive. Overall satisfied.",
  },
];

const ReviewSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    dotClass: "slick-dot",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-20 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl text-left mb-8">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews?.map((review, index) => (
          <div
            key={index}
            className="p-4  flex flex-col items-center text-center border border-gray-300 rounded-md mx-2 mb-6  hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between overflow-hidden mb-4">
              <Image
                src={review.image}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full"
              />

              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L6.18 12 2 7.91l6.282-.544L10 0l2.718 7.366 6.282.544-4.18 4.09L15.878 18z" />
                  </svg>
                ))}
              </div>
            </div>

            <h3 className="text-xl text-left font-semibold mb-2">
              {review.name}
            </h3>

            <p className="text-gray-600 text-sm text-justify">
              {review.review}
            </p>
          </div>
        ))}
      </Slider>

      {/* Css----------------------------- */}

      <style jsx>{`
        .slick-dot {
          background-color: #bbb; /* Default dot color */
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin: 0 4px;
        }

        .slick-dot.slick-active {
          background-color: rgba(153, 246, 228, 1) !important;
        }

        .slick-prev,
        .slick-next {
          color: #fbbf24;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 24px;
        }

        .slick-prev {
          left: -30px;
        }

        .slick-next {
          right: -30px;
        }
      `}</style>
    </div>
  );
};

export default ReviewSlider;
