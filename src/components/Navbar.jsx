import React from 'react'
import Carousel from './Carousel'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full bg-zinc-100 text-zinc-800">
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
                    <div className="mx-2 flex-1 px-2">
                        <img src={Logo} width={'50px'} alt="Clg_logo" />
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Events</a></li>
                            <li><a>Contacts</a></li>
                        </ul>
                    </div>
                </div>
                <Carousel />
            </div>
            <div className="drawer-side h-full">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay h-full"></label>
                <ul className="menu min-h-full w-80 p-4 bg-base-300 overflow-y-auto">
                    {/* Sidebar content here */}
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Events</a></li>
                    <li><a>Contacts</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar