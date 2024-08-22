import React from 'react'

export default function Headline({ label }) {
        return (
                <h1 className='text-5xl sm:text-8xl font-black capitalize text-DarkColor-700 '>
                        {label}
                </h1>
        )
}
