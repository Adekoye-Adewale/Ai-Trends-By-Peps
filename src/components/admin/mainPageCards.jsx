import React from 'react'

export default function MainPageCards({ title, number }) {
        return (
                <div className='px-6 py-4 text-left data-[active=true]:bg-muted/50 sm:px-8 sm:py-6 grid gap-1 '>
                        <div>
                                <span className='text-xs text-muted-foreground'>
                                        {title}
                                </span>
                        </div>
                        <div>
                                <p className='text-lg font-black leading-none sm:text-3xl'>
                                        {number}
                                </p>
                        </div>
                </div>
        )
}


export const TitleCard = ({ title, desc }) => {
        return (
                <div className="flex flex-1 flex-col justify-center bg-mainColor-200 gap-1 px-6 py-5 sm:py-6">
                        <h3 className="font-semibold leading-none tracking-tight">
                                {title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                                {desc}
                        </p>
                </div>
        )
}