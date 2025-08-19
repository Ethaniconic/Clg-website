import React from 'react'

const Carousel = () => {
    return (
        <div className="flex justify-center items-center mt-8">
            <div className="carousel w-full max-w-2xl h-[38vh] md:h-[48vh] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full h-full object-cover" />
                    <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                        <a href="#slide4" className="btn btn-circle btn-accent">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full h-full object-cover" />
                    <div className="absolute left-4 right-4 bottom-4 flex justify-between"> 
                        <a href="#slide1" className="btn btn-circle btn-accent">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full h-full object-cover" />
                    <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                        <a href="#slide2" className="btn btn-circle btn-accent">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full h-full object-cover" />
                    <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                        <a href="#slide3" className="btn btn-circle btn-accent">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-accent">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel