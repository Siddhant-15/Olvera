// components/Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div>
                        <h2 className="text-xl font-bold mb-4">Career</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Job Openings</a></li>
                            <li><a href="#" className="hover:text-gray-400">Internships</a></li>
                            <li><a href="#" className="hover:text-gray-400">Freelance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4">Website</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-400">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                LinkedIn
                            </a>

                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                    <p className="text-sm mt-2">&copy; {new Date().getFullYear()} MyFooterProject. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
