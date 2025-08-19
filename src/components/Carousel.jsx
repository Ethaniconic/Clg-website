import React, { useEffect, useRef, useState } from 'react'

const slides = [
    {
        id: "slide1",
        img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
        prev: "slide4",
        next: "slide2"
    },
    {
        id: "slide2",
        img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
        prev: "slide1",
        next: "slide3"
    },
    {
        id: "slide3",
        img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
        prev: "slide2",
        next: "slide4"
    },
    {
        id: "slide4",
        img: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
        prev: "slide3",
        next: "slide1"
    }
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500); // Change slide every 3.5 seconds
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    const goTo = (idx) => setCurrent(idx);

    return (
        <div className="w-full flex justify-center items-center mt-8">
            <div className="carousel w-full max-w-full aspect-[16/6] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10 relative">
                {slides.map((slide, idx) => (
                    <div
                        key={slide.id}
                        id={slide.id}
                        className={`carousel-item absolute w-full h-full transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <img
                            src={slide.img}
                            className="w-full h-full object-center object-cover"
                            alt={`Slide ${idx + 1}`}
                        />
                        <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                            <button
                                className="btn btn-circle btn-accent"
                                onClick={() => goTo((current - 1 + slides.length) % slides.length)}
                                type="button"
                            >❮</button>
                            <button
                                className="btn btn-circle btn-accent"
                                onClick={() => goTo((current + 1) % slides.length)}
                                type="button"
                            >❯</button>
                        </div>
                    </div>
                ))}
                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-accent' : 'bg-base-200'} border border-primary`}
                            onClick={() => goTo(idx)}
                            type="button"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel