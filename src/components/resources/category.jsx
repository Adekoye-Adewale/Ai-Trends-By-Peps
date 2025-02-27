import React from 'react'
import { CategoryListSection, TopBanner } from '.'

export default function CategoryPageComponent({ bgImg, pageTitle, desc, content}) {
        return (
                <>
                        <TopBanner
                                img={bgImg}
                                title={pageTitle}
                                label={desc}
                        />
                        <CategoryListSection
                                content={content}                                
                        />
                </>
        )
}
