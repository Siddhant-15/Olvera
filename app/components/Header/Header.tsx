
"use client";

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed w-full z-50">
            <div className="bg-primaryPink text-white py-1 text-center">
                TURNING UNCERTAINTY INTO YOUR ADVANTAGE
            </div>
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center space-x-4">
                        <Image src={require('./img/Olvera-Logo-Black 1.png')} alt="Company Logo" width={100} height={100} />
                        <ul className="hidden md:flex space-x-6">
                            <li>
                                <Link href="#home" className="hover:text-primaryPink hover:underline">HOME</Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-primaryPink hover:underline">ABOUT US</Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-primaryPink hover:underline">OUR SERVICES</Link>
                            </li>
                            <li>
                                <Link href="#experience" className="hover:text-primaryPink hover:underline">OUR EXPERIENCE</Link>
                            </li>
                            <li>
                                <Link href="#resources" className="hover:text-primaryPink hover:underline">RESOURCES</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-primaryPink text-white px-4 py-2 rounded-full">CONTACT US</button>
                        <Image src={require('./img/facebook.png')} alt="Facebook" width={20} height={20} />
                        <Image src={require('./img/linkedin.png')} alt="LinkedIn" width={20} height={20} />
                        <Image src={require('./img/instagram.png')} alt="Instagram" width={20} height={20} />
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <ul className="md:hidden">
                        <li>
                            <Link href="#home" className="block px-4 py-2 hover:text-primaryPink">HOME</Link>
                        </li>
                        <li>
                            <Link href="#about" className="block px-4 py-2 hover:text-primaryPink">ABOUT US</Link>
                        </li>
                        <li>
                            <Link href="#services" className="block px-4 py-2 hover:text-primaryPink">OUR SERVICES</Link>
                        </li>
                        <li>
                            <Link href="#experience" className="block px-4 py-2 hover:text-primaryPink">OUR EXPERIENCE</Link>
                        </li>
                        <li>
                            <Link href="#resources" className="block px-4 py-2 hover:text-primaryPink">RESOURCES</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="block px-4 py-2 hover:text-primaryPink">CONTACT US</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Header
