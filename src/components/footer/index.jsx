import React from 'react'
import Link from 'next/link'
import ScrollingTag from './scrollingTag'
import Logo from '../headerNav/logo'
import { menuLinks } from '../../contentCopy/headerNavCopy'
import NewsletterSec from './newsletterSec'

export default function Footer() {
        return (
                <footer className='pt-20 pb-5 px-5 bg-DarkColor-900'>
                        <div className='max-w-[1440px] w-[96%] mx-auto flex flex-col justify-center gap-y-2'>
                                <div className='mx-auto mb-10'>
                                        <Logo />
                                </div>
                                <Nav />
                                {/* <ScrollingTag /> */}
                                <div className='flex flex-col items-center text-LightColor-500'>
                                        <NewsletterSec/>
                                </div>
                                <hr className='text-mainColor-800 mt-10 mb-2' />
                                <div className='flex justify-between items-center text-LightColor-600'>
                                        <span>
                                                &#169; 2024 Ai Trends
                                        </span>
                                        <Link
                                                href={'/'}
                                                title={'Privacy Policy'}
                                        >
                                                Privacy Policy
                                        </Link>
                                </div>
                        </div>
                </footer>
        )
}

const Nav = () => {
        return (
                <nav className='mb-10'>
                        <ul className='flex flex-col gap-5 md:gap-0 md:flex-row justify-center text-center text-xl md:text-3xl font-semibold divide-x-0 md:divide-x divide-solid divide-LightColor-400'>
                                {menuLinks.map((items) => (
                                        <li
                                                key={items.id}
                                                className='px-5 text-DarkColor-300 hover:text-mainColor-500'
                                        >
                                                <Link
                                                        href={items.url}
                                                        title={items.name}
                                                >
                                                        {items.name}
                                                </Link>
                                        </li>
                                ))}
                        </ul>
                </nav>
        )
}