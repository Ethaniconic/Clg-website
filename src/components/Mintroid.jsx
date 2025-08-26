    "use client"

    import { useEffect, useRef, useState } from "react"

    const imageBase = "images/MINDROID 2023-24/"
    const totalPages = 98
    const tabData = [
    { label: "Cover", page: 1 },
    { label: "About Us", page: 3 },
    { label: "Achievements", page: 10 },
    { label: "Clubs", page: 43 },
    { label: "Co/Extracurriculars", page: 46 },
    { label: "Testimonals", page: 64 },
    { label: "Alumini", page: 67 },
    { label: "Faculties", page: 74 },
    { label: "Memories", page: 81 },
    { label: "Students Corner", page: 86 },
    ]

    const Mintroid = () => {
    const flipbookRef = useRef(null)
    const [currentSpread, setCurrentSpread] = useState(0) // 0 = pages 1-2, 1 = pages 3-4, etc.
    const [isAnimating, setIsAnimating] = useState(false)
    const [animationDirection, setAnimationDirection] = useState("")

    const leftPage = currentSpread === 0 ? 1 : currentSpread * 2
    const rightPage = currentSpread === 0 ? 2 : currentSpread * 2 + 1

    useEffect(() => {
        // If using turn.js, initialize here
        // Example: $(flipbookRef.current).turn({ width: 800, height: 600 });
        // For navigation, you can use the state
    }, [])

    const goToPage = (page) => {
        if (isAnimating) return // Prevent navigation during animation

        const targetSpread = page === 1 ? 0 : Math.floor((page - 1) / 2)

        setIsAnimating(true)
        setAnimationDirection(targetSpread > currentSpread ? "next" : "prev")

        setTimeout(() => {
        setCurrentSpread(targetSpread)
        setTimeout(() => {
            setIsAnimating(false)
            setAnimationDirection("")
        }, 300)
        }, 150)
    }

    const nextPage = () => {
        const maxSpread = Math.floor((totalPages - 1) / 2)
        if (isAnimating || currentSpread >= maxSpread) return

        setIsAnimating(true)
        setAnimationDirection("next")

        setTimeout(() => {
        setCurrentSpread((prev) => Math.min(prev + 1, maxSpread))
        setTimeout(() => {
            setIsAnimating(false)
            setAnimationDirection("")
        }, 300)
        }, 150)
    }

    const prevPage = () => {
        if (isAnimating || currentSpread <= 0) return

        setIsAnimating(true)
        setAnimationDirection("prev")

        setTimeout(() => {
        setCurrentSpread((prev) => Math.max(prev - 1, 0))
        setTimeout(() => {
            setIsAnimating(false)
            setAnimationDirection("")
        }, 300)
        }, 150)
    }

    return (
        <div className="magazine-wrapper">
        <div className="tab-container">
            <div className="tabs tabs-boxed md:tabs-md sm:tabs-sm">
            {tabData.map((tab) => (
                <button
                key={tab.page}
                className="tab"
                onClick={() => goToPage(tab.page)}
                style={{ fontWeight: tab.page >= leftPage && tab.page <= rightPage ? "bold" : "normal" }}
                >
                {tab.label}
                </button>
            ))}
            </div>
        </div>
        <div className="flipbook-container">
            <div className={`flipbook-wrapper ${isAnimating ? "animating" : ""} ${animationDirection}`} ref={flipbookRef}>
            <div className="notebook-spread">
                {/* Left page */}
                <div className="page-content left-page">
                <img
                    src={`${imageBase}MINDROID 2023-24_${leftPage}.webp`}
                    alt={`Page ${leftPage}`}
                    className="page-image"
                />
                </div>

                {/* Center binding */}
                <div className="notebook-binding"></div>

                {/* Right page */}
                {rightPage <= totalPages && (
                <div className="page-content right-page">
                    <img
                    src={`${imageBase}MINDROID 2023-24_${rightPage}.webp`}
                    alt={`Page ${rightPage}`}
                    className="page-image"
                    />
                </div>
                )}
            </div>
            </div>
            <div className="flipbook-nav flex justify-between items-center p-4">
            <button
                id="prev-page-btn"
                className="btn btn-primary btn-circle"
                aria-label="Previous Page"
                onClick={prevPage}
                disabled={currentSpread === 0 || isAnimating}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <span className="font-bold text-lg">
                Pages {leftPage}
                {rightPage <= totalPages ? `-${rightPage}` : ""} / {totalPages}
            </span>
            <button
                id="next-page-btn"
                className="btn btn-primary btn-circle"
                aria-label="Next Page"
                onClick={nextPage}
                disabled={rightPage >= totalPages || isAnimating}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            </div>
        </div>

        <style jsx>{`
            /* Added notebook spread layout styles */
            .notebook-spread {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            perspective: 1000px;
            transform-style: preserve-3d;
            }

            .page-content {
            transition: all 0.3s ease-in-out;
            transform-origin: center;
            flex-shrink: 0;
            }

            .left-page {
            transform-origin: right center;
            }

            .right-page {
            transform-origin: left center;
            }

            .notebook-binding {
            width: 8px;
            height: 33rem;
            background: linear-gradient(to right, #333, #666, #333);
            border-radius: 2px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
            position: relative;
            }

            .notebook-binding::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background: #222;
            border-radius: 1px;
            }

            .page-image {
            width: 27rem;
            height: 33rem;
            transition: all 0.3s ease-in-out;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }

            .flipbook-wrapper.animating.next .left-page {
            transform: rotateY(-25deg) scale(0.95);
            opacity: 0.7;
            }

            .flipbook-wrapper.animating.next .right-page {
            transform: rotateY(-15deg) scale(0.95);
            opacity: 0.7;
            }

            .flipbook-wrapper.animating.prev .left-page {
            transform: rotateY(15deg) scale(0.95);
            opacity: 0.7;
            }

            .flipbook-wrapper.animating.prev .right-page {
            transform: rotateY(25deg) scale(0.95);
            opacity: 0.7;
            }

            .flipbook-wrapper.animating .page-image {
            transform: scale(0.9);
            filter: brightness(0.8);
            }

            /* Smooth entrance animation */
            .flipbook-wrapper:not(.animating) .page-content {
            animation: pageEnter 0.3s ease-out;
            }

            @keyframes pageEnter {
            from {
                transform: scale(0.95);
                opacity: 0.8;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
            }

            /* Button hover effects */
            .btn:not(:disabled):hover {
            transform: scale(1.05);
            transition: transform 0.2s ease;
            }

            .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
            .notebook-spread {
                flex-direction: column;
                gap: 1rem;
            }
            
            .notebook-binding {
                width: 27rem;
                height: 8px;
            }
            
            .notebook-binding::before {
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 100%;
                height: 2px;
            }
            }
        `}</style>
        </div>
    )
    }

    export default Mintroid
