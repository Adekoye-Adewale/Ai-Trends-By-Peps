import React from 'react'
import { ResourceBody, TopBanner } from '.'

export default function ResPage({ bgImg, pageTitle, desc, content }) {
        return (
                <div>
                        <TopBanner
                                img={bgImg}
                                title={pageTitle}
                                label={desc}
                        />
                        <ResourceBody
                                content={content}
                        />
                </div>
        )
}
