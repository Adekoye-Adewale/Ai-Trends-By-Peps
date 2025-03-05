import Image from 'next/image'
import React, { Fragment } from 'react'
import { SubTitle, Title } from '../text'
import Link from 'next/link'

export default function ListSection({ content, secTitle, link }) {
        return (
                <section className='grid gap-5 py-20 overflow-clip'>
                        <div className='max-w-[1440px] w-[95%] mx-auto grid gap-5'>
                                <div className='flex justify-between items-center'>
                                        <div className='[&>h2]:text-2xl sm:text-4xl'>
                                                <Title label={secTitle}/>
                                        </div>
                                        <div className='text-sm text-nowrap underline underline-offset-1'>
                                                <Link 
                                                        href={link} 
                                                        title='open all'
                                                        target='__blank'
                                                >
                                                        Load more
                                                </Link>
                                        </div>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                                        {content.slice(0, 4).map(( item ) => (
                                                <Fragment key={item.id}>
                                                        <Card 
                                                                img={item.img} 
                                                                label={item.title} 
                                                                slug={`/resources/${item.slug.href}`}
                                                                linkTitle={item.slug.title}
                                                        />
                                                </Fragment>
                                        ))}
                                </div>
                        </div>
                </section>
        )
}

export function CategoryListSection({ content }) {
        return (
                <section className='grid gap-5 py-20 overflow-clip'>
                        <div className='max-w-[1440px] w-[95%] mx-auto'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                                        {content.map((item) => (
                                                <Fragment key={item.id}>
                                                        <Card
                                                                img={item.img}
                                                                label={item.title}
                                                                slug={`/resources/${item.slug.href}`}
                                                                linkTitle={item.slug.title}
                                                        />
                                                </Fragment>
                                        ))}
                                </div>
                        </div>
                </section>
        )
}

const Card = ({ img, label, slug, linkTitle })=> {
        return(
                <div className='rounded-xl border-2 border-solid border-DarkColor-300 bg-mainColor-100 shadow-[6px_6px_0px_0px_#000204] transition-all duration-300 hover:shadow-[-6px_-6px_0px_0px_#000204] cursor-default overflow-clip hover:bg-mainColor-200'>
                        <Image 
                                {...img}
                        />
                        <div className='p-3 [&>h3]:mb-2 [&>h3]:text-lg sm:[&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-DarkColor-700 [&>a]:text-sm '>
                                <SubTitle 
                                        label={label}
                                />
                                <Link 
                                        href={slug} 
                                        title={linkTitle} 
                                        target='_blank'
                                >
                                        Read more
                                </Link>
                        </div>
                </div>
        )
}