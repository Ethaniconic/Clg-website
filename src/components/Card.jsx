import React from "react";

const magazines = [
    {
        title: "Mindroid 2023-24",
        // description:
        //     "A deep dive into the latest technological advancements and the innovators behind them.",
        month: "Year",
        year: "2023-24",
        cover: "images/MINDROID 2023-24/MINDROID 2023-24_1.webp",
    },
    {
        title: "Old magazine",
        description:
            "",
        month: "May",
        year: "2024",
        cover: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // campus group
    },
    {
        title: "Old magazine",
        description:
            "",
        month: "month",
        year: "yrar",
        cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // research lab
    }
];

const Card = () => {
    return (
        <div className="w-full flex flex-col gap-8 items-center my-10 px-2 md:px-16">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 items-center w-full">
                {magazines.slice(0, 3).map((mag, idx) => (
                    <div
                        key={idx}
                        className="card w-80 bg-[#10194a] shadow-xl border border-primary/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300 rounded-3xl"
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
                                <span className="badge bg-blue-900 text-blue-100 border-blue-700 px-3 py-2">
                                    {mag.month} {mag.year}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
