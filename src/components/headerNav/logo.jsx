import Image from 'next/image'
import React from 'react'
import AiTrendsLogo from '../../../public/AiTrendsLogo.svg'


export default function Logo() {
        return (
                <Image
                        src={AiTrendsLogo}
                        alt={'Ai Trends Logo'}
                        title={'Ai Trends Logo'}
                        width={200}
                        height={200}
                        className='w-12 h-12 rounded-md'
                />
        )
}
