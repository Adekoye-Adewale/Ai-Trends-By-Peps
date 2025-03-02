'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '../headerNav/logo'
import Link from 'next/link'
import SideBarArrowIcon from '@/icons/sideBarArrow'
import HomeIcon from '@/icons/home'
import Listicon from '@/icons/list'
import EmailIcon from '@/icons/email'

const menuListItems = [
        {
                id: 123,
                label: `Main`,
                href: `/admin`,
                icon: <HomeIcon />, 
        },
        {
                id: 223,
                label: `Leads`,
                href: `/admin/leads`,
                icon: <Listicon />,
        },
        {
                id: 323,
                label: `NewsLetter`,
                href: `/admin/newsletter`,
                icon: <EmailIcon />,
        },
]

export default function Sidebar() {
        const [open, setOpen] = useState(true)
        useEffect(() => {
                const handleResize = () => {
                        if (window.innerWidth < 900) {
                                setOpen(false);
                        } else {
                                setOpen(true);
                        }
                };

                handleResize();
                window.addEventListener('resize', handleResize); 

                return () => window.removeEventListener('resize', handleResize);
        }, []);

        return (
                <div className={`h-screen ${open ? 'w-64' : 'w-20'} flex-shrink-0 bg-mainColor-300 border-solid border-r-2 border-r-DarkColor-800 transition-all duration-300`}>
                        <div className='flex gap-2 items-center justify-between py-5 px-3 cursor-default bg-mainColor-600 hover:bg-mainColor-700 transition-all duration-300 border-b-2 border-b-DarkColor-800'>
                                <Logo/>
                                {open ? <span
                                        className='font-bold text-lg sm:text-xl text-nowrap'
                                        >
                                                Admin Dashboard
                                        </span> : ''
                                }
                                
                        </div>
                        <div className='flex flex-col justify-between gap-10 h-[90%]'>
                                <div className='py-10'>
                                        <div className='flex flex-col gap-4'>
                                                {menuListItems.map((item) => (
                                                        <MenuList
                                                                key={item.id}
                                                                open={open}
                                                                href={item.href}
                                                                label={item.label}
                                                                icon={item.icon}
                                                        />
                                                ))}
                                        </div>
                                </div>
                                <div 
                                        className='flex gap-1 items-center justify-end py-5 px-3 cursor-pointer border-t-2 border-t-DarkColor-800'
                                        onClick={() => setOpen(!open)}
                                >
                                        <span className='text-xs font-semibold'>
                                                { open ? 'Close' : 'Open'}
                                        </span>
                                        <span
                                                className={`${open ? 'rotate-0' : 'rotate-180'}`}
                                        >
                                                <SideBarArrowIcon/>
                                        </span>
                                </div>
                        </div>
                </div>
        )
}

const MenuList = ({ open, href, label, icon }) => {
        const pathname = usePathname();
        return (
                <Link
                        href={href || '/admin'}
                        title={label}
                        className={`flex gap-2 items-center justify-start py-2 px-5 hover:bg-mainColor-700 transition-all duration-300 ${pathname === href ? 'bg-DarkColor-700 text-white admin-menu-active' : ''} `}
                >
                        <span>
                                {icon}
                        </span>
                        {open && <span className='text-nowrap'>{label}</span>}
                </Link>
        )
}
