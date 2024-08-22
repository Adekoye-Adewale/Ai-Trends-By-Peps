'use client'
import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Image from 'next/image';
import '@splidejs/react-splide/css/core';
import { tools } from '@/contentCopy/homePageCopy';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export default function ToolsSlide() {

        const options = {
                type: 'loop',
                gap: '2rem',
                perPage: 8,
                perMove: 1,
                drag: 'free',
                autoPlay: true,
                autoScroll: {
                        autoStart: true,
                        speed: 1,
                },
                rewind: false,
                arrows: false,
                pauseOnHover: true,
                resetProgress: false,
                easing: 'linear',
                breakpoints: {
                        1200: {
                                perPage: 6,
                        },
                        640: {
                                perPage: 4,
                        },
                },
                extensions: { AutoScroll },
        };

        return (
                <Splide 
                        options={options}
                        aria-label="Tools Images" 
                        hasTrack={false}
                >
                        <SplideTrack>
                                {tools.map((item) => (
                                        <SplideSlide
                                                key={item.id}
                                        >
                                                <Image 
                                                        {...item} 
                                                        className='w-full h-full max-w-32'
                                                />
                                        </SplideSlide>
                                ))}
                        </SplideTrack>
                </Splide>
        )
}
