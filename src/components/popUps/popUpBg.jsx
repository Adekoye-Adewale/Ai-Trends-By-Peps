import React from 'react'

export default function PopUpBg({ children }) {
        return (
                <div className='fixed inset-0 size-full grid place-content-center bg-DarkColor-900/85 backdrop-blur p-10 z-10'>
                        <div className='max-w-4xl bg-mainColor-100 rounded-xl'>
                                {children}
                        </div>
                </div>
        )
}
