import React from 'react'
import DOMPurify from "dompurify";

export default function ResourceBody({ content }) {

        // const sanitizedContent = DOMPurify.sanitize(content);

        return (
                <div className='grid gap-5 py-20 overflow-clip'>
                        <div className='max-w-[1440px] w-[95%] mx-auto'>
                                <article 
                                        dangerouslySetInnerHTML={{ __html: content }}
                                        className='[&>h1]:text-3xl [&>h1]:font-extrabold sm:[&>h1]:text-5xl [&>h1]:my-3 [&>h2]:text-3xl sm:[&>h2]:text-5xl [&>h2]:my-3 [&>h3]:text-2xl sm:[&>h3]:text-4xl [&>h3]:my-2 [&>h4]:text-2xl sm:[&>h4]:text-3xl [&>h4]:my-2 [&>h5]:text-xl sm:[&>h5]:text-2xl [&>h5]:my-2 [&>ol]:my-2 [&>ol]:ml-2 [&>ul]:my-2 [&>ul]:ml-2 [&>p]:my-2 [&>img]:size-full [&>a]:text-mainColor-800 [&>*>a]:text-mainColor-800'
                                >
                                </article>
                        </div>
                </div>
        )
}
