"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

SwiperCore.use([Navigation]);

const CardSlider = () => {
    const slides = [
        { src: '/img/Group 26599.png', alt: 'Image 1' },
        { src: '/img/Group 26599.png', alt: 'Image 2' },
        { src: '/img/Group 26599.png', alt: 'Image 3' },
        { src: '/img/Group 26599.png', alt: 'Image 4' },
        { src: '/img/Group 26599.png', alt: 'Image 5' },
        { src: '/img/Group 26599.png', alt: 'Image 6' },
    ];

    return (
        <div className="card-slider-container relative p-4">
            <div className="text-3xl font-bold mb-4 text-center">What Our Clients Say About Us</div>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="card bg-white rounded-lg shadow-lg overflow-hidden">
                            <Image src={require('./img/Group 26599.png')} alt={slide.alt} width={350} height={350} className="card-image hover:scale-105 transition-transform duration-300" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    );
};

export default CardSlider;
