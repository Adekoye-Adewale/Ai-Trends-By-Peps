import React from 'react'
import { fetchPosts } from '../util/getPosts';
import { TopBanner } from '@/components/resources'
import ListSection from '@/components/resources/listSection'

const resImg = {
        src: `/images/Sunny.png`,
        alt: `AI trend resource page image`,
        title: `AI trend resource page image`,
        width: 1400,
        height: 800
}

export default async function ResourcesPage() {
        const { allPosts } = await fetchPosts();

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
                                link={'/ebooks-guides'}
                        />
                        <div className='bg-DarkColor-100'>
                                <ListSection
                                        content={fetchTemplates}
                                        secTitle={'Templates and Toolkits'}
                                        link={'/templates-toolkits'}
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