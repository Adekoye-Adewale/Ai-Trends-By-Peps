import React from 'react'
import { Paragraph, SubTitle, Title } from '../text'
import { homeBenefitSec } from '@/contentCopy/homePageCopy'
import Image from 'next/image'

export default function BenefitsSection() {
        return (
                <section
                        className="grid place-content-center py-20 sm:py-40 max-w-screen text-mainColor-100 bg-DarkColor-700 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-DarkColor-700 via-transparent to-DarkColor-700"
                        style={{ backgroundImage: 'url(/images/light-grid-circle-lines-low.svg)' }}
                >
                        <div className="flex flex-col gap-20 px-5 max-w-[1440px] w-[95%] mx-auto text-left ">
                                <Top/>
                                <Bottom/>
                        </div>
                </section>
        )
}

const Top = () => {
        return (
                <div className='grid grid-cols-1 md:grid-cols-2 content-between gap-12 sm:gap-10 '>
                        <div className='flex flex-col gap-5'>
                                <Title
                                        label={homeBenefitSec.title}
                                />
                                <Paragraph
                                        label={homeBenefitSec.desc}
                                />
                        </div>
                        <div className='flex flex-col gap-5 [&>p]:mt-3'>
                                <SubTitle label={homeBenefitSec.subTitle} />
                                <Image 
                                        {...homeBenefitSec.img} 
                                        className="size-full rounded-xl border-2 border-solid border-mainColor-500 shadow-[20px_20px_0px_0px_#000204]"
                                />
                                <Paragraph label={homeBenefitSec.subTitleDesc}/>
                        </div>
                </div>
        )
}

const Bottom = () => {
        return (
                <div className='grid md:grid-cols-1 lg:grid-cols-4 gap-5'>
                        <div className='border-2 border-solid border-mainColor-300 rounded-xl bg-DarkColor-500 '>
                                VIDEO
                        </div>
                        {homeBenefitSec.list.map((item) => (
                                <div 
                                        key={item.id}
                                        className="flex flex-col gap-5 p-5  text-left border-2 border-solid border-mainColor-300 rounded-xl bg-DarkColor-700 shadow-[6px_6px_0px_0px_#000204] transition-all duration-300 hover:bg-DarkColor-900 hover:shadow-[-6px_-6px_0px_0px_#000204] cursor-default [&>h3]:text-LightColor-200 [&>p]:text-DarkColor-200 "
                                >
                                        <div
                                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                                className="[&>svg]:w-20 [&>svg]:h-20 mb-5"
                                        >
                                        </div>
                                        <SubTitle label={item.title} />
                                        <Paragraph label={item.desc}/>
                                </div>
                        ))}                        
                </div>
        )
}