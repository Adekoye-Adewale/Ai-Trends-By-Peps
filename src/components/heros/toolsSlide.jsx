'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { tools } from '@/contentCopy/homePageCopy';
import 'swiper/css';

export default function ToolsSlide() {

        return (
                <Swiper 
                        slidesPerView={7}
                        spaceBetween={20}
                        speed={5000}
                        loop={true}
                        autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                                10: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                },
                                520: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                },
                                800: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                },
                                1200: {
                                        slidesPerView: 8,
                                        spaceBetween: 40,
                                },
                        }}
                        className='swiper-transition'
                >
                        {tools.map((item) => (
                                <SwiperSlide
                                        key={item.id}
                                >
                                        <Image 
                                                {...item} 
                                                className='w-full h-full max-w-20 sm:max-w-28'
                                        />
                                </SwiperSlide>
                        ))}
                </Swiper>
        )
}
