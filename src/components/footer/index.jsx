import React from 'react'
import Link from 'next/link'
import ScrollingTag from './scrollingTag'
import Logo from '../headerNav/logo'
import { menuLinks } from '../headerNavCopy'

export default function Footer() {
        return (
                <footer className='py-20 px-5 bg-DarkColor-700'>                        
                        <div className='max-w-[1440px] w-[96%] mx-auto'>
                                <div className='mx-auto'>
                                        <Logo/>
                                </div>
                                <Nav/>
                                <ScrollingTag/>
                                <hr/>
                                <div className='flex justify-between items-center'>
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
                        <ul className='grid text-base divide-y divide-solid divide-LightColor-500'>
                                {menuLinks.map((items) => (
                                        <li
                                                key={items.id}
                                                className='py-5'
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