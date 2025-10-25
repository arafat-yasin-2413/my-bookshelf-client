import React from "react";
import logo from "/assets/logo.png";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-secondary rounded">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <Link to="/" className="flex justify-center text-primary items-center gap-2">
                    
                    <img className="w-16" src={logo} alt="logo" />
                    <h2 className="font-bold text-4xl">Bookshelf</h2>

                </Link>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-800">
                    Discover, organize, and track your favorite books. Bookshelf helps you read smarter and stay inspired every single day.
                </p>

                <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <Link 
                            to="/about"
                            className=""
                            
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/contact"
                            className=""
                            
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <ul className="mt-12 flex justify-center gap-6 md:gap-8">
                    {/* facebook */}
                    <li>
                        <Link
                            to="https://www.facebook.com/yasin.arafat.482092/"
                            className=""
                        >
                            <FaFacebook className="hover:fill-blue-500" size={20}></FaFacebook>
                        </Link>
                    </li>

                    {/* X */}
                    <li>
                        <Link
                            to="https://x.com/YasinArafa43087"
                            className=""
                        >
                            <FaTwitter className="hover:fill-blue-500" size={20}></FaTwitter>
                        </Link>
                    </li>
                    
                    {/* Github */}
                    <li>
                        <Link
                            to="https://github.com/arafat-yasin-2413?tab=repositories" 
                            className=""
                        >
                            <FaGithub className="hover:fill-blue-500" size={20}></FaGithub>
                        </Link>
                    </li>

                    
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
