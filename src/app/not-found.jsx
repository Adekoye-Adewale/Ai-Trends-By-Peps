import { Paragraph } from '@/components/text'
import Image from 'next/image'
import React from 'react'

export default function NotFound({params}) {
        return (
                <main className='flex justify-center items-center h-screen p-5 bg-mainColor-300'>
                       <div className='text-center'>
                                <Image  
                                        src="/images/404_page.png" 
                                        width={500} 
                                        height={500} 
                                />
                                <Paragraph 
                                        label={`Unable to find ${params} page, head back to home page`}
                                />
                        </div> 
                </main>
        )
}
