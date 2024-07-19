import React from 'react';

const Stats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-pink-100 p-8 text-center">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-pink-600">150+</h2>
                <p className="text-gray-700">Projects</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-pink-600">80+</h2>
                <p className="text-gray-700">Clients</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-pink-600">200+</h2>
                <p className="text-gray-700">Professionals</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold text-pink-600">97%</h2>
                <p className="text-gray-700">Clients</p>
            </div>
        </div>
    );
};

export default Stats;