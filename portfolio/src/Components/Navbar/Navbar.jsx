import React from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
             ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
            }`}
        >
            <div className="text-white py-5 flex justify-between items-center">
             
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-[#8245ec]">&lt;</span>
                    <span className="text-white">Tarun</span>
                    <span className="text-[#8245ec]">/</span>
                    <span className="text-white">Kaushik</span>
                    <span className="text-[#8245ec]">&gt;</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
