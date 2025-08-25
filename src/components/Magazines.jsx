import React from 'react'

const magazines = [
    {
        title: "Tech Innovators",
        description:
            "A deep dive into the latest technological advancements and the innovators behind them.",
        month: "June",
        year: "2024",
        cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    },
    {
        title: "Campus Life",
        description:
            "Explore the vibrant campus life, student stories, and upcoming events at our college.",
        month: "May",
        year: "2024",
        cover: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // campus group
    },
    {
        title: "Research Review",
        description:
            "Highlights of groundbreaking research and academic achievements from our faculty and students.",
        month: "April",
        year: "2024",
        cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // research lab
    },
    {
        title: "Alumni Success",
        description:
            "Stories of our alumni making a mark in their respective fields.",
        month: "March",
        year: "2024",
        cover: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // alumni
    },
    // {
    //     title: "Sports Highlights",
    //     description:
    //         "Recap of the most exciting sports events and achievements this season.",
    //     month: "February",
    //     year: "2024",
    //     cover: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80", // sports
    // },
    // {
    //     title: "Freshers Edition",
    //     description:
    //         "Welcoming the new batch and sharing tips for a successful college journey.",
    //     month: "January",
    //     year: "2024",
    //     cover: "https://images.unsplash.com/photo-1465101178521-c1a6bca7a0c1?auto=format&fit=crop&w=400&q=80", // freshers
    // },
    // {
    //     title: "Tech Innovators",
    //     description:
    //         "A deep dive into the latest technological advancements and the innovators behind them.",
    //     month: "June",
    //     year: "2024",
    //     cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    // },
    // {
    //     title: "Campus Life",
    //     description:
    //         "Explore the vibrant campus life, student stories, and upcoming events at our college.",
    //     month: "May",
    //     year: "2024",
    //     cover: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80", // campus group
    // },
    // {
    //     title: "Research Review",
    //     description:
    //         "Highlights of groundbreaking research and academic achievements from our faculty and students.",
    //     month: "April",
    //     year: "2024",
    //     cover: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // research lab
    // },
];

const Magazines = () => {
    return (
        <div className="w-[95vw] flex flex-col gap-8 items-center my-10 px-2 md:px-32">
            <div className="flex flex-col md:flex-row md:justify-between md:gap-4 gap-6 items-center w-full">
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
            <div className="flex flex-col md:flex-row md:justify-between md:gap-4 gap-6 items-center w-full">
                {magazines.slice(3, 6).map((mag, idx) => (
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
            <div className="flex flex-col md:flex-row md:justify-between md:gap-4 gap-6 items-center w-full">
                {magazines.slice(6, 9).map((mag, idx) => (
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

export default Magazines