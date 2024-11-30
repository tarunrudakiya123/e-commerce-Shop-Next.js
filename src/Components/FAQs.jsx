"use client";

import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  console.log(openIndex);

  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order by logging into your account, navigating to 'My Orders,' and selecting the order you wish to track. A tracking link will be provided.",
    },
    {
      question: "What is the return policy?",
      answer:
        "Our return policy allows you to return items within 30 days of delivery. The item must be in its original condition and packaging. Visit the 'Returns' section for detailed instructions.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping charges and delivery times vary depending on your location and will be calculated at checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods, including credit/debit cards, PayPal, and net banking. For more options, visit our 'Payment Methods' page during checkout.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via the 'Contact Us' page, available 24/7. Alternatively, reach us through email or our toll-free number listed there.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" px-8 py-8 md:px-20 md:py-18">
      <h2
        className="text-2xl  text-left text-gray-800 mb-6"
        style={{ fontFamily: "sans-serif", fontWeight: 500 }}
      >
        FAQ
      </h2>
      <div className="space-y-4 ">
        {faqs?.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span>{faq?.question}</span>

              <svg
                className={`h-6 w-6 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-600 transition-all duration-300">
                <p>{faq?.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
