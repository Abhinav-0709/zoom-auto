// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollOffset = -80;

    return (
        <>
            <div
                className="fixed top-0 left-0 right-0 z-50 bg-black/80 
                   backdrop-blur-sm text-white"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center">
                    <nav className="flex justify-between items-center w-full">
                        <h1 className="text-2xl font-bold">Zoom Auto</h1>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-2xl"
                        >
                            <AiOutlineMenu />
                        </button>
                    </nav>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black z-50
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col p-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-2xl font-bold text-white">Menu</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-2xl text-white"
                        >
                            <AiOutlineClose />
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={scrollOffset}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-300 hover:text-white text-2xl cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={scrollOffset}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-300 hover:text-white text-2xl cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            offset={scrollOffset}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-300 hover:text-white text-2xl cursor-pointer"
                        >
                            Services
                        </Link>
                        <Link
                            to="testimonials"
                            smooth={true}
                            duration={500}
                            offset={scrollOffset}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-300 hover:text-white text-2xl cursor-pointer"
                        >
                            Testimonails
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={scrollOffset}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-zinc-300 hover:text-white text-2xl cursor-pointer"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>

            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                ></div>
            )}
        </>
    );
};

export default Navbar;