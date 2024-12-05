import React from 'react'
import Link from 'next/link';

export default function ArticleNotFound() {
        return (
                <div className='min-h-[70vh] grid place-content-center py-[210px] px-5 bg-mainColor-200'>
                        <h2 className='text-3xl sm:text-6xl font-semibold text-center'>
                                Article not found
                        </h2>
                        <span className='text-center mt-5 text-xl'>
                                Click here to go back to <Link
                                        href={'/'} className='text-red-700'>
                                        home page
                                </Link>
                        </span>
                </div>
        )
}
