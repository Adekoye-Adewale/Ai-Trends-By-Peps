import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/client';

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
        return builder.image(source);
};

export default function ImageRenderer({ value }) {
        const imageAsset = value?.asset; 
        const imageUrl = imageAsset ? urlFor(imageAsset).url() : null;
        const altText = value?.alt || 'AI Trend Blog Image'; 

        if (!imageUrl) {
                return (
                        <div className='flex'>
                                <p className='text-red-800 font-semibold text-lg bg-red-200 py-2 px-4 rounded-md'>
                                        Image Failed To Load
                                </p>
                        </div>
                );
        }

        return (
                <>
                        <Image
                                src={imageUrl}
                                alt={altText}
                                width={value?.asset?.metadata?.dimensions?.width || 600} 
                                height={value?.asset?.metadata?.dimensions?.height || 400}
                        />
                </>
        );
}
