"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch',},
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag',},
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp',},
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer',},
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair',},
];

const HeroCarousel = () => {
    return (
        <div className='hero-carousel'>
            <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                autoFocus
                interval={2000}
                showArrows={false}
                showStatus={false}
            >
                {heroImages.map((image) => (
                    <Image
                        src={image.imgUrl}
                        alt={image.alt}
                        width={484}
                        height={484}
                        className="object-contain"
                        key={image.alt} 
                    />
                ))}
            </Carousel>

            <Image
                src="assets/icons/hand-drawn-arrow.svg"
                alt="arrow"
                width={175}
                height={175}
                className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
            />
        </div>
    );
};

export default HeroCarousel;