import React from 'react'
import Link from 'next/link'
import { allRes } from '@/contentCopy/resouces'
import { CloseIcon } from '@/icons'

export default function ResourcesPopUp({ closeResPopUp }) {
        return (
                <div className='fixed inset-0 bg-DarkColor-900/85 backdrop-blur z-[2] animate-fade-in-250'>
                        <div 
                                onClick={closeResPopUp}
                                className='block  text-mainColor-100 bg-[#cc0000] absolute top-[115px] right-[10px] p-1 rounded-full cursor-pointer'
                        >
                                <CloseIcon/>
                        </div>
                        <div className='max-w-[1440px] w-[96%] mx-auto mt-32 overflow-y-auto'>
                                <Cards/>
                        </div>
                </div>
        )
}

const Cards = () => {
        return (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded-xl bg-mainColor-300 max-w-96 ml-auto'>
                        {allRes.map(item => (
                                <Link 
                                        {...item.slug} 
                                        key={item.id}
                                        className='flex flex-col min-h-32 rounded-lg p-4 bg-LightColor-300 border-solid border-2 border-mainColor-700 transition-all duration-300 hover:bg-mainColor-500'
                                >
                                        <div className='flex justify-between text-xs'>
                                                <span className='text-xs'>
                                                        {item.category}
                                                </span>
                                                svg
                                        </div>
                                        <span className='block text-sm font-semibold text-wrap mt-auto max-w-40'>
                                                {item.title}
                                        </span>
                                </Link>
                        ))}
                </div>
        )
}