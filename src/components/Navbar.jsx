import React from 'react'
import Carousel from './Carousel'
import Logo from '../assets/Logo.png'
import YearMonthForm from './YearMonthForm'
import Card from './Card'

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col min-h-screen">
                {/* Navbar */}
                <div className="navbar fixed top-0 left-0 right-0 z-50 w-full bg-[#050a30] shadow-lg px-4 md:px-16 py-3 flex items-center justify-between rounded-b-2xl border-b border-blue-900/60">
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
                            <li><a className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium">Home</a></li>
                            <li><a className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium">Magazines</a></li>
                            <li><a className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium">Events</a></li>
                            <li><a className="text-blue-100 hover:text-blue-400 transition-colors duration-200 font-medium">Contact</a></li>
                        </ul>
                    </div>
                </div>
                {/* Add padding to push content below fixed navbar */}
                <div className="pt-[84px] flex-1 px-4 md:px-8">
                    <Carousel />
                    <YearMonthForm />
                    <Card />
                </div>
                {/* Footer */}


                {/* <footer className="w-full bg-[#050a30] text-blue-200 text-center py-4 border-t border-blue-900/60 mt-8">
                    © 2025 College Magazine. All rights reserved.
                </footer> */}


            </div>
            <div className="drawer-side h-full z-[100]">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label>
                <ul className="menu menu-lg min-h-full w-80 p-4 bg-base-100/90 backdrop-blur-md rounded-r-2xl shadow-2xl ring-1 ring-primary/10 gap-2 overflow-y-auto">
                    {/* Sidebar content here */}
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={Logo} alt="" width="70px" />
                        <h3>St. Vincent Pallotti College of Engineering and Technology</h3>
                    </div>
                    <li>
                        <a className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Events
                        </a>
                    </li>
                    <li>
                        <a className="font-semibold text-blue-900 bg-blue-100/80 hover:bg-accent hover:text-white transition-colors duration-200 rounded-lg px-4 py-2">
                            Contacts
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar