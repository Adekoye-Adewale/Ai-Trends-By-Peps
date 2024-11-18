import { CloseIcon } from '@/icons'
import React from 'react'

export default function PopUpBg({ children, clickClose }) {
        return (
                <div className='fixed inset-0 size-full bg-DarkColor-900/85 backdrop-blur p-10 z-10 overflow-hidden'>
                        <div className='relative max-w-4xl size-full py-10 px-5 m-auto bg-mainColor-100 rounded-xl overflow-y-auto'>
                                <div 
                                        onClick={clickClose}
                                        className='absolute top-5 right-5 p-2 bg-mainColor-700 text-DarkColor-500 border-solid border border-DarkColor-500 rounded-full cursor-pointer'
                                >
                                        <CloseIcon/>
                                </div>
                                {children}
                        </div>
                </div>
        )
}
