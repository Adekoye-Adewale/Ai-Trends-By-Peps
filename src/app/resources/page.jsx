import React from 'react'
import { Banner, TopBanner } from '@/components/resources'
import ListSection from '@/components/resources/listSection'
import { processPostsWithImageUrls } from '../util/getPosts';
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category, publishedAt, image, body, featured, category, commentsEnable, relatedPosts}`;

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

        const allPosts = processPostsWithImageUrls(posts)

        const fetchEbooks = allPosts.filter(item => item?.category === 'ebooks-guides');
        const fetchTemplates = allPosts.filter(item => item?.category === 'templates-toolkits');
        const fetchCourses = allPosts.filter(item => item?.category === 'online-courses');

        return (
                <main className="overflow-x-hidden">
                        <TopBanner 
                                img={resImg}
                                title={'This is just a test'}
                                label={'lorem text'}
                        />
                        <ListSection
                                content={fetchEbooks}
                                secTitle={'E-Books and Guides'}
                                link={'/ebooks-and-guides'}
                        />
                        <div className='bg-DarkColor-100'>
                                <ListSection
                                        content={fetchTemplates}
                                        secTitle={'Templates and Toolkits'}
                                        link={'/templates-and-toolkits'}
                                />
                        </div>
                        <ListSection
                                content={fetchCourses}
                                secTitle={'Online Courses'}
                                link={'/online-courses'}
                        />
                </main>
        )
}
