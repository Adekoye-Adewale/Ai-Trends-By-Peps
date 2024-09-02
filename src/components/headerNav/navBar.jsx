'use client'
import React, { useState } from 'react'
import Logo from './logo'
import MobileNav from './mobileNav'
import ResourcesPopUp from '../popUps/resourcesPopUp'
import DesktopNav from './desktopNav'

export default function NavBar() {

        const [openNav, setOpenNav] = useState(false);
        const [openRes, setOpenRes] = useState(false);

        const handleMobileMenu = () => {
                setOpenNav(!openNav);
        }

        const handleOpenRes = () => {
                setOpenRes(!openRes);
        }

        return (
                <>
                        <header className='fixed top-5 left-2/4 translate-x-[-50%] flex justify-between items-center gap-5 p-5 max-w-[1440px] w-[96%] mx-auto bg-LightColor-100 rounded-lg border border-solid border-LightColor-300 z-10'>
                                <Logo />
                                <DesktopNav 
                                        handleOpenRes={handleOpenRes}
                                />
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
                                openRes={openRes}
                                setOpenNav={setOpenNav}
                                setOpenRes={setOpenRes}
                        />
                        {openRes ? (<ResourcesPopUp closeResPopUp={handleOpenRes} />) : ''}                        
                </>
        )
}