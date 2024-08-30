import React from 'react'
import Link from 'next/link'
import ScrollingTag from './scrollingTag'
import Logo from '../headerNav/logo'
import { menuLinks } from '../../contentCopy/headerNavCopy'

export default function Footer() {
        return (
                <footer className='pt-20 pb-5 px-5 bg-DarkColor-900'>
                        <div className='max-w-[1440px] w-[96%] mx-auto grid justify-center gap-y-10'>
                                <div className='mx-auto'>
                                        <Logo />
                                </div>
                                <Nav />
                                <ScrollingTag />
                                <hr />
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
                <nav>
                        <ul className='flex text-3xl font-semibold divide-x divide-solid divide-LightColor-400'>
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