import React from 'react'
import Carousel from './Carousel'
import Logo from '../assets/Logo.png'
import YearMonthForm from './YearMonthForm'

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar sticky top-0 z-50 w-full bg-primary/90 backdrop-blur-md text-base-100 text-[20px] shadow-xl px-4 md:px-10 rounded-b-2xl">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 flex items-center gap-3">
                        <img src={Logo} width={'64px'} className='bg-blue-500/90 p-1 rounded-full shadow-[0_15px_25px_-20px_rgb(255,255,255,1)] ring-2 ring-accent/50' alt="Clg_logo" />
                        <span className='hidden sm:block text-xl md:text-2xl font-semibold tracking-tight'>St. Vincent Pallotti College</span>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal gap-2">
                            {/* Navbar menu content here */}
                            <li><a className="hover:text-accent focus-visible:text-accent">Home</a></li>
                            <li><a className="hover:text-accent focus-visible:text-accent">About Us</a></li>
                            <li><a className="hover:text-accent focus-visible:text-accent">Events</a></li>
                            <li><a className="hover:text-accent focus-visible:text-accent">Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 md:px-8">
                    <Carousel />
                    <YearMonthForm />
                </div>
            </div>
            <div className="drawer-side h-full">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label>
                <ul className="menu menu-lg min-h-full w-80 p-4 bg-base-100/95 backdrop-blur-md text-primary rounded-r-2xl shadow-2xl ring-1 ring-primary/10 gap-1 overflow-y-auto">
                    {/* Sidebar content here */}
                    <li><a className="hover:text-accent">Home</a></li>
                    <li><a className="hover:text-accent">About Us</a></li>
                    <li><a className="hover:text-accent">Events</a></li>
                    <li><a className="hover:text-accent">Contacts</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar