import React from 'react'
import { ResPage } from '@/components/resources'
import { allRes } from '@/contentCopy/resouces';

export default async function ResourcePage({ params }) {
        const articleSlug = (await params).resource

        const filteredContent = allRes.filter(
                item => item.slug.href === `/${articleSlug}`
        );

        const article = filteredContent[0];

        return (
                <div>
                        <ResPage
                                bgImg={article.img}
                                pageTitle={article.title}
                                desc={article.title}
                                content={article.body}
                        />
                </div>
        )
}
