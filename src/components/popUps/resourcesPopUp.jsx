import React from 'react'
import Link from 'next/link'
import { usePosts } from '@/app/hooks/usePosts'
import { CloseIcon } from '@/icons'
import TertiaryBtn from '../button/tertiaryBtn'

export default function ResourcesPopUp({ closeResPopUp }) {
        const { posts, isLoading } = usePosts();
        return (
                <div className='fixed inset-0 bg-DarkColor-900/85 backdrop-blur z-[2] animate-fade-in-250'>
                        <div 
                                onClick={closeResPopUp}
                                className='block  text-mainColor-100 bg-[#cc0000] absolute top-[115px] right-[10px] p-1 rounded-full cursor-pointer'
                        >
                                <CloseIcon/>
                        </div>
                        <div className='max-w-[1440px] w-[96%] mx-auto mt-32'>
                                {isLoading ? (
                                        <Skeleton/>
                                ) : (
                                        <Cards
                                                closeResPopUp={closeResPopUp}
                                                posts={posts}
                                        />
                                )}
                        </div>
                </div>
        )
}

const Cards = ({ closeResPopUp, posts }) => {
        const getCategoryName = (category) => {
                switch (category) {
                        case 'online-courses':
                                return 'Online Courses';
                        case 'templates-toolkits':
                                return 'Templates and Toolkits';
                        case 'ebooks-guides':
                                return 'E-Books and Guides';
                        default:
                                return category;
                }
        };
        return (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 rounded-xl bg-mainColor-300 max-w sm:max-w-96 max-h-[60vh] ml-auto  overflow-y-auto'>
                        {posts.slice(0, 6).map(item => (
                                <Link 
                                        key={item.id}
                                        href={`/resources/${item.slug.href}`} 
                                        title={item.slug.title}
                                        className='flex flex-col gap-5 sm:min-h-32 rounded-lg p-4 bg-LightColor-300 border-solid border-2 border-mainColor-700 transition-all duration-300 hover:bg-mainColor-500'
                                        onClick={closeResPopUp}
                                >
                                        <div 
                                                className='flex justify-between text-xs'
                                        >
                                                <span className='text-xs'>
                                                        {getCategoryName(item.category)}
                                                </span>
                                                <LinkOutIcon/>
                                        </div>
                                        <span className='block text-sm font-bold text-wrap mt-auto max-w-52 sm:max-w-40'>
                                                {item.title}
                                        </span>
                                </Link>
                        ))}
                        <div 
                                className='col-span-1 sm:col-span-2 text-center flex justify-center'
                                onClick={closeResPopUp}
                        >
                                <TertiaryBtn
                                        href={'/resources'}
                                        label={'Goto resources library'}
                                />
                        </div>
                </div>
        )
}

const LinkOutIcon = () => {
        return (
                <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width={24} 
                        height={24} 
                        viewBox="0 0 24 24" 
                        className='w-3 h-3'
                >
                        <path 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M13.5 10.5L21 3m-5 0h5v5m0 6v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"
                        >                        
                        </path>
                </svg>
        );
}

const Skeleton = () => {
        return (
                <div class="border border-blue-300 shadow rounded-xl p-2 max-w-96 w-full ml-auto bg-mainColor-300">
                        <div class="animate-pulse grid grid-cols-1 sm:grid-cols-2 gap-2">
                                <SkeletonCard/>
                                <SkeletonCard/>
                                <SkeletonCard/>
                                <SkeletonCard/>
                                <SkeletonCard/>
                                <SkeletonCard/>                                
                                <div className='col-span-1 sm:col-span-2 h-4 w-44 mx-auto bg-mainColor-700 rounded-lg'></div>
                        </div>
                </div>
        )
}

const SkeletonCard = () => {
        return (
                <div class="flex gap-2 flex-col justify-between h-32 w-full sm:w-[180px] bg-LightColor-300 border-solid border-2 p-4 border-mainColor-700 rounded-lg animate-pulse">
                        <div className='flex justify-between items-center'>
                                <div className='max-w-52 w-[80%] h-3 bg-DarkColor-400 rounded-md'></div>
                                <div className='w-3 h-3 bg-DarkColor-400 rounded-md'></div>
                        </div>
                        <div>
                                <div className='max-w-52 w-[50%] sm:w-[80%] h-3 bg-DarkColor-400 rounded-md'></div>
                                <div className='max-w-52 w-[100%] h-3 bg-DarkColor-400 rounded-md my-2'></div>
                                <div className='hidden sm:block max-w-52 w-[70%] h-3 bg-DarkColor-400 rounded-md'></div>
                        </div>
                </div>
        )
}