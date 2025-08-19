import React from "react";

const magazines = [
	{
		title: "Tech Innovators",
		description:
			"A deep dive into the latest technological advancements and the innovators behind them.",
		month: "June",
		year: "2024",
		cover: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
	},
	{
		title: "Campus Life",
		description:
			"Explore the vibrant campus life, student stories, and upcoming events at our college.",
		month: "May",
		year: "2024",
		cover: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
	},
	{
		title: "Research Review",
		description:
			"Highlights of groundbreaking research and academic achievements from our faculty and students.",
		month: "April",
		year: "2024",
		cover: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
	},
];

const Card = () => {
	return (
		<div className="w-full flex flex-col md:flex-row md:justify-between gap-8 items-center my-10 px-2 md:px-16">
			{magazines.map((mag, idx) => (
				<div
					key={idx}
					className="card w-80 bg-[#10194a] shadow-xl border border-primary/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
				>
					<figure className="h-48 overflow-hidden">
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
	);
};

export default Card;