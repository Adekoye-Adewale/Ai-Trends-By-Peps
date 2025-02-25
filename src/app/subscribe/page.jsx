import React from 'react'
import Newsletter from '@/components/forms/newsletter'
import Image from 'next/image'
import { Paragraph, Title } from '@/components/text'

const subscribeImg = {
        alt: `Newsletter Image`,
        title: `Newsletter Image`,
        src: `/images/ai-trends-newsletter-image.webp`,
        width: 1000,
        height: 500,
}

export default function page() {
        return (
                <main className="max-w-[1440px] w-[96%] mx-auto overflow-x-hidden md:h-dvh p-0 block md:flex justify-between subscribe-page">
                        <div className='grid content-center flex-1 px-5 py-[132px]'>
                                <Title label={'Subscribe Now'}/>
                                <Paragraph 
                                        label={'Stay up to date on all the AI Trends news!'}
                                        className={'mt-2 mb-8'}
                                />
                                <Newsletter/>
                        </div>
                        <div className='hidden md:flex bg-mainColor-800 flex-1 overflow-clip'>
                                <Image 
                                        {...subscribeImg} className='w-full h-full object-cover'
                                />
                        </div>
                </main>
        )
}
