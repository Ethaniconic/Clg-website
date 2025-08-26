import React, { useState } from "react";
import Mintroid from './Mintroid';
import Navbar from './Navbar';
import Footer from './Footer';

const magazines = [
  {
    title: "Mindroid 2025 July-August",
    month: "July-August",
    year: "2025",
    cover: "images/MINDROID_2025/MINDROID-2025-JULY.webp",
    goto: "../../mindroid_25-july.html",
  },
  {
    title: "Mindroid 2023-24",
    description: "",
    month: "Year",
    year: "2023-24",
    cover: "images/MINDROID%202023-24/MINDROID%202023-24_1.webp",
    goto: "/Mintroid",
  },
];

const Card = () => {
  const [showMintroid, setShowMintroid] = useState(false);

  if (showMintroid) {
    return (
      <>
        <Navbar />
        <Mintroid />
        <Footer />
      </>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 items-center my-10 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center w-full">
        {magazines.map((mag, idx) => {
          const CardContent = (
            <div
              className="card w-full sm:w-80 bg-[#10194a] shadow-xl border border-primary/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl cursor-pointer"
              onClick={() => {
                if (idx === 1) setShowMintroid(true);
              }}
            >
              <figure className="h-48 overflow-hidden rounded-t-3xl">
                <img
                  src={mag.cover}
                  alt={mag.title}
                  className="w-full h-full object-cover object-center"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-200">{mag.title}</h2>
                <p className="text-blue-100">{mag.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="badge bg-blue-900 text-blue-100 border-blue-700 dark:border-gray-600 px-3 py-2">
                    {mag.month} {mag.year}
                  </span>
                </div>
              </div>
            </div>
          );

          // If goto is defined, wrap in <a> for first card only
          return idx === 0 ? (
            <a key={idx} href={mag.goto}>
              {CardContent}
            </a>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
