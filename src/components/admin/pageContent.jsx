"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image'

export default function PageContent() {
        const pathname = usePathname();

        const routeTitles = {
                '/admin': 'Dashboard',
                '/admin/leads': 'Leads',
                '/admin/settings': 'Settings',
        };
        const title = routeTitles[pathname] || 'Admin Dashboard';

        return (
                <div className='w-full'>
                        <div className='flex justify-between items-center gap-10 w-full min-h-[90px] py-5 px-10 cursor-default bg-DarkColor-100 hover:bg-DarkColor-200 transition-all duration-300 border-b-2 border-b-DarkColor-800'>
                                <h1 
                                        className='font-bold text-lg sm:text-xl'
                                >
                                        {title ? title : `Admin Dashboard`} Page
                                </h1>
                                <div>
                                        <Image 
                                                src={'/images/female-john-doe.webp'} 
                                                alt='user avatar'
                                                width={40} 
                                                height={40}
                                                className='rounded-full border-solid border-2 border-DarkColor-800'
                                        />
                                </div>
                        </div>
                </div>
        )
}
