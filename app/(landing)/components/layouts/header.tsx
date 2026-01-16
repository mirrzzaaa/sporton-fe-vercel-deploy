"use client"

import { FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useState } from "react";
import Button from "../ui/button";

const Header = () => {
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);

    return (
        <header className="shadow-md sticky top-0 bg-white z-50">
            <div className="container mx-auto px-4 py-5 flex items-center justify-between">

                {/* Logo */}
                <img
                    src="/images/logo.svg"
                    alt="Sporton Logo"
                    className="w-[110px] md:w-[127px]"
                />

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-20 font-medium">
                    <a
                        href="#"
                        className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
                    >
                        Home
                    </a>
                    <a href="#">Category</a>
                    <a href="#">Explore Project</a>
                </nav>

                {/* Right Icons */}
                <div className="relative items-center flex gap-10">
                    <FiSearch size={24} />

                    <Button variant="ghost" className="relative w-9 h-9 p-0! self-center rounded-full" onClick={() => setIsCartPopupOpen(!isCartPopupOpen)}>
                        <FiShoppingBag size={24} />
                        <div className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                            3
                        </div>
                    </Button>
                    {isCartPopupOpen && <CartPopup />}
                    {/* Hamburger (Mobile) */}
                    <button className="md:hidden">
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
