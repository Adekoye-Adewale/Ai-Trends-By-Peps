import React from 'react'
import { ResourceBody, TopBanner } from '.'
import { PostBanner } from './banner'

export default function ResPage({ bgImg, pageTitle, category, content }) {
        return (
                <>
                        <PostBanner
                                img={bgImg}
                                title={pageTitle}
                                category={category}
                        />
                        <ResourceBody
                                content={content}
                        />
                </>
        )
}
