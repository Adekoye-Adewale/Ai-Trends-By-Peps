import React from 'react'

export default function Headline({ label }) {
        return (
                <h1 className='text-4xl md:text-5xl lg:text-8xl font-black capitalize text-DarkColor-700 '>
                        {label}
                </h1>
        )
}
