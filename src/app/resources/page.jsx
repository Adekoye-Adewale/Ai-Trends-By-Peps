import { Banner, TopBanner } from '@/components/resources'
import ListSection from '@/components/resources/listSection'
import React from 'react'
import { getEbooksAndGuides, getOnlineCourses, getTemplatesAndToolkits } from '../util/getResByCategory'
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category, publishedAt, image, body}`;

const options = { next: { revalidate: 30 } };

const resImg = {
        src: `/images/Sunny.png`,
        alt: `AI trend resource page image`,
        title: `AI trend resource page image`,
        width: 1400,
        height: 800
}

export default async function ResourcesPage() {
        const posts = await client.fetch(POSTS_QUERY, {}, options);

        console.log('list===++', posts)

        return (
                <main className="overflow-x-hidden">
                        <TopBanner 
                                img={resImg}
                                title={'This is just a test'}
                                label={'lorem text'}
                        />
                        <ListSection
                                content={getEbooksAndGuides}
                                secTitle={'E-Books and Guides'}
                                link={'/ebooks-and-guides'}
                        />
                        <div className='bg-DarkColor-100'>
                                <ListSection
                                        content={getTemplatesAndToolkits}
                                        secTitle={'Templates and Toolkits'}
                                        link={'/templates-and-toolkits'}
                                />
                        </div>
                        <ListSection
                                content={getOnlineCourses}
                                secTitle={'Online Courses'}
                                link={'/online-courses'}
                        />
                </main>
        )
}
