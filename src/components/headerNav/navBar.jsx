'use client'
import React, { useState } from 'react'
import Logo from './logo'
import { menuLinks } from '../headerNavCopy'
import Link from 'next/link'
import PriBtn from '../button/priBtn'
import MobileNav from './mobileNav'

export default function NavBar() {

        const [openNav, setOpenNav] = useState(false);

        const handleMobileMenu = () => {
                setOpenNav(!openNav);
        }

        return (
                <>
                        <header className='fixed top-5 left-2/4 translate-x-[-50%] flex justify-between items-center gap-5 p-5 max-w-[1440px] w-[96%] mx-auto bg-LightColor-100 rounded-lg border border-solid border-LightColor-300 '>
                                <Logo/>
                                <DesktopNav/>
                                <span
                                        className='min-[901px]:hidden text-xs font-semibold uppercase cursor-pointer'
                                        onClick={handleMobileMenu}
                                >
                                        menu
                                </span>
                        </header>
                        <MobileNav
                                onClick={handleMobileMenu}
                                openNav={openNav}
                        />
                </>
        )
}

const DesktopNav = () => {
        return (
                <div className='flex items-center gap-5 text-base max-[900px]:hidden'>
                        <Nav />
                        <PriBtn
                                label={'Register Now'}
                                href={'/'}
                        />
                </div>
        )
}

const Nav = () => {
        return (
                <nav>
                        <ul className='flex gap-5'>
                                {menuLinks.map(( items ) => (
                                        <li key={items.id}>
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