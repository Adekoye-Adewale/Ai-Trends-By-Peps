import Image from 'next/image'
import React from 'react'
import { Headline, Paragraph, Title } from '../text'

export function TopBanner({ img, title, label }) {
        return (
                <div className='relative pt-40 pb-20 min-h-[500px] bg-DarkColor-700'>
                        <Image 
                                {...img}
                                className='absolute top-0 left-0 size-full object-cover z-[0] brightness-[.25]'
                        />
                        <div className='relative max-w-[1440px] w-[95%] mx-auto grid gap-2 z-[1] [&>h1]:text-LightColor-200 [&>p]:text-DarkColor-200'>
                                <Headline label={title}/>                                
                                {title !== 'Category Not Found' && (<Paragraph label={label} />)}
                        </div>
                </div>
        )
}

export function Banner({ img, title, label }) {
        return (
                <div className='relative pt-20 pb-20 min-h-[500px] bg-DarkColor-700'>
                        <Image
                                {...img}
                                className='absolute top-0 left-0 size-full object-cover z-[1] brightness-[.25]'
                        />
                        <div className='relative max-w-[1440px] w-[95%] mx-auto grid gap-2 z-[2] [&>h1]:text-LightColor-200 [&>p]:text-DarkColor-200'>
                                <Title label={title}/>
                                <Paragraph label={label} />
                        </div>
                </div>
        )
}
