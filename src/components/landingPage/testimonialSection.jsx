import React from 'react'
import { Paragraph, Title } from '../text'
import { homeTestimonySec } from '@/contentCopy/homePageCopy'
import Image from 'next/image'
import { TestimonialCopy } from '@/contentCopy/testimonials'

export default function TestimonialSection() {
        return (
                <section
                        className="grid place-content-center py-20 sm:py-40 max-w-screen bg-mainColor-100 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-mainColor-100 via-transparent to-mainColor-100"
                        style={{ backgroundImage: 'url(/images/bg-grid-lines-plain.svg)' }}
                        id={`testimonials`}
                >
                        <div className="flex flex-col content-center gap-10 px-5 max-w-[1440px] w-[95%] mx-auto [&>h2]:text-center">
                                <Title label={homeTestimonySec.title}/>
                                <Card/>
                        </div>
                </section>
        )
}

const Card = () => {
        return (
                <div className='flex justify-center flex-wrap gap-10'>
                        {TestimonialCopy.map((item) => (
                                <div 
                                        key={item.id}
                                        className='flex flex-col gap-5  flex-[0_1_350px] p-5 rounded-xl border-2 border-solid border-DarkColor-300 bg-mainColor-100 shadow-[6px_6px_0px_0px_#000204] transition-all duration-300 hover:bg-LightColor-100 hover:shadow-[-6px_-6px_0px_0px_#000204] cursor-default'
                                >
                                        <div className='flex gap-5 items-center'>
                                                <Image 
                                                        {...item.img}
                                                        className='rounded-full border border-solid border-DarkColor-300'
                                                />
                                                <div className='grid'>
                                                        <span className='text-base font-semibold'>
                                                                {item.name}
                                                        </span>
                                                        <span className='text-xs opacity-70'>
                                                                {item.role}
                                                        </span>
                                                </div>
                                        </div>
                                        <div>
                                                <Paragraph 
                                                        label={item.testimony}
                                                />
                                        </div>
                                </div>
                        ))}
                </div>
        )
}
