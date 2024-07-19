import React from 'react';

const Services = () => {
    return (
        <div className="bg-white p-8 md:flex md:justify-between">
            <div className="md:w-1/2">
                <h2 className="text-xl font-bold text-pink-600">SERVICES</h2>
                <h3 className="text-3xl font-bold mb-4">Our Services That Can Help Your Business</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p className="text-gray-700 mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-pink-600 font-bold">01.</span>
                        <span className="flex-grow ml-2">Sustainability</span>
                        <span>&rarr;</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-pink-600 font-bold">02.</span>
                        <span className="flex-grow ml-2">Small Business</span>
                        <span>&rarr;</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-pink-600 font-bold">03.</span>
                        <span className="flex-grow ml-2">Forensic Services</span>
                        <span>&rarr;</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-pink-600 font-bold">04.</span>
                        <span className="flex-grow ml-2">Risk Management</span>
                        <span>&rarr;</span>
                    </li>
                    <li className="flex justify-between items-center border-b py-2">
                        <span className="text-pink-600 font-bold">05.</span>
                        <span className="flex-grow ml-2">CFO Advisory</span>
                        <span>&rarr;</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Services;