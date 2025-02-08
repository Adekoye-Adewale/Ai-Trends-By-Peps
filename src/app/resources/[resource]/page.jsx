import React from 'react'
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ResPage } from '@/components/resources'
import { ArticleNotFound } from '@/components/errorPage';

const POST_QUERY = `*[_type == "post" && slug.current == $resource][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source) =>
        projectId && dataset
                ? imageUrlBuilder({ projectId, dataset }).image(source)
                : null;

const options = { next: { revalidate: 30 } };

export default async function ResourcePage({ params }) {
        const res = await client.fetch(POST_QUERY, params, options);

        if (!res) {
                return (
                        <ArticleNotFound/>
                );
        }

        const postImageUrl = res.image
                ? urlFor(res.image)?.width(550).height(310).url()
                : null;

        const formatCategory = (category) => {
                return category
                        .split('-') 
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' '); 
        };

        const article = {
                title: res?.title,
                publishedAt: res?.publishedAt,
                featured: res?.featured,
                category: res?.category ? formatCategory(res.category) : '',
                img: {
                        src: postImageUrl,
                        alt: res?.title,
                        title: res?.title,
                        width: 1000,
                        height: 400,
                },
                body: res?.body,
                commentsEnable: res?.commentsEnable,
                relatedPosts: res?.relatedPosts,
        }

        return (
                <main>
                        <ResPage
                                bgImg={article.img}
                                pageTitle={article.title}
                                category={article.category}
                                content={article.body}
                        />
                </main>
        )
}
