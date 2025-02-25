import React from 'react'

export default function Paragraph({ label, className }) {
        return (
                <p className={`text-base sm:text-lg font-normal text-pretty ${className}`}>
                        {label}
                </p>
        )
}
