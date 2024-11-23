import { Banner, TopBanner } from '@/components/resources'
import ListSection from '@/components/resources/listSection'
import React from 'react'
import { getEbooksAndGuides, getOnlineCourses, getTemplatesAndToolkits } from '../util/getResByCategory'

const resImg = {
        src: `/images/Sunny.png`,
        alt: `AI trend resource page image`,
        title: `AI trend resource page image`,
        width: 1400,
        height: 800
}

export default function ResourcesPage() {
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
