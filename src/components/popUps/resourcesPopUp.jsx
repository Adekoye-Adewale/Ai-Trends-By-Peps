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
                                                        {item.category.name}
                                                </span>
                                                svg
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
                <div class="h-32 w-[180px] bg-LightColor-300 border-solid border-2 border-mainColor-700 rounded-lg animate-pulse"></div>
        )
}