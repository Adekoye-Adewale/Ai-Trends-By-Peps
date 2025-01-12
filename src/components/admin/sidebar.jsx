import React from 'react'
import Logo from '../headerNav/logo'
import Link from 'next/link'

const menuListItems = [
        {
                id: 123,
                label: `Main`,
                href: `/admin`,
                icon: `icon`,
        },
        {
                id: 223,
                label: `Leads`,
                href: `/admin/leads`,
                icon: `icon`,
        },
        {
                id: 323,
                label: `NewsLetter`,
                href: `/admin/newsletter`,
                icon: `icon`,
        },
]

export default function Sidebar() {
        return (
                <div className='h-screen w-64 flex-shrink-0 bg-mainColor-300 border-solid border-r-2 border-r-DarkColor-800'>
                        <div className='flex gap-2 items-center justify-between py-5 px-3 cursor-default bg-mainColor-600 hover:bg-mainColor-700 transition-all duration-300 border-b-2 border-b-DarkColor-800'>
                                <Logo/>
                                <span
                                        className='font-bold text-lg sm:text-xl'
                                >
                                        Admin Dashboard
                                </span>
                        </div>
                        <div className='flex flex-col justify-between gap-10 h-[90%]'>
                                <div className='py-10 px-3'>
                                        <div className='flex flex-col gap-4'>
                                                {menuListItems.map((item) => (
                                                        <MenuList
                                                                key={item.id}
                                                                href={item.href}
                                                                label={item.label}
                                                        />
                                                ))}
                                        </div>
                                </div>
                                <div className='flex gap-2 items-center justify-start py-5 px-3 cursor-pointer border-t-2 border-t-DarkColor-800'>
                                        <span>
                                                Close
                                        </span>
                                        <span>
                                                icon
                                        </span>
                                </div>
                        </div>
                </div>
        )
}

const MenuList = ({ href, label }) => {
        return (
                <Link
                        href={href ? href : '/admin'}
                        title={label}
                        className='flex gap-2 items-center justify-start py-2 px-5 hover:bg-mainColor-700 transition-all duration-300 '
                >
                        <span>
                                icon
                        </span>
                        <span>
                                { label }
                        </span>
                </Link>
        )
}
