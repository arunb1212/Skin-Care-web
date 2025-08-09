import React, { useState } from "react";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Are your products safe for sensitive skin?",
      answer:
        "Yes. Many of our products are formulated for sensitive skin. Please review each product's details and perform a patch test if you're unsure.",
    },
    {
      id: 2,
      question: "Are your products cruelty-free?",
      answer:
        "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
    },
    {
      id: 3,
      question: "What's your return policy?",
      answer:
        "You can return unopened items within 30 days for a full refund. Opened items may be eligible for store credit depending on condition.",
    },
    {
      id: 4,
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by destination and will be calculated at checkout.",
    },
    {
      id: 5,
      question: "How do I choose the right product?",
      answer:
        "Start with your skin type and concerns. Our product pages include guidance, and you can contact support for personalized recommendations.",
    },
  ];

  const [openId, setOpenId] = useState(2);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="px-[100px] mt-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
        {/* Left */}
        <div className="relative rounded-2xl overflow-hidden bg-[#FEFFF4]">
          <img
            src="./src/assets/mathilde-langevin-p3O5f4u95Lo-unsplash 1.png"
            alt="Product"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute bottom-6 left-[174px] justify-center flex items-center gap-4 bg-[#E7EED8]/70 backdrop-blur-md rounded-full px-6 py-3 shadow-sm">
            <div className="w-12 h-12 rounded-full border-2 border-[#2D3B36]/20 grid place-items-center">
              <img src="./src/assets/headphone-svgrepo-com 1.svg" alt="" />
            </div>
            <div className="leading-tight">
              <p className="text-sm text-[#2D3B36]/70">24/7 We\'re Here</p>
              <p className="text-sm text-[#2D3B36] font-medium">to Help You</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="inline-flex items-center gap-3 border rounded-full px-4 py-2 text-sm text-[#2D3B36] mb-6">
            <span className="w-3 h-3 rounded-full bg-[#2D3B36]"></span>
            Frequently Asked Question
          </div>

          <h2 className="text-[48px] leading-[1.1] font-semibold text-[#2D3B36] mb-8">
            Answers to Your Skincare Questions, All in One Place.
          </h2>

          {/* Accordion list */}
          <div className="flex flex-col gap-4 duration-300 linear ease-in">
            {faqs.map((item) => {
              const isOpen = item.id === openId;
              return (
                <div
                  key={item.id}
                  className={`rounded-xl border border-[#2D3B36]/20 overflow-hidden bg-white/60`}
                >
                  <button
                    type="button"
                    className="w-full  flex items-center justify-between text-left px-6 py-5"
                    onClick={() => toggle(item.id)}
                  >
                    <span className="text-[16px] text-[#2D3B36]">
                      {item.question}
                    </span>
                    <span
                      className="w-10 h-10 grid place-items-center rounded-md border border-[#2D3B36]/20 text-[#2D3B36]"
                    >
                      {isOpen ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Panel */}
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div
                      className={`overflow-hidden px-6 pb-5 text-[13px] text-[#2D3B36]/80 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
