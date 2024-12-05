import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();

const urlForImg = (source) =>
        projectId && dataset
                ? imageUrlBuilder({ projectId, dataset }).image(source)
                : null;

export function processPostsWithImageUrls(posts) {
        return posts.map((post) => {
                const postImageUrl = post.image
                        ? urlForImg(post.image)?.width(550).height(310).url()
                        : null;
                const id = post._id
                const title = post.title
                const category = post.category
                const href = post?.slug?.current
                const body = post?.body
                const commentsEnable = post?.commentsEnable
                const featured = post?.featured
                const publishedAt = post?.publishedAt
                const relatedPosts = post?.relatedPosts

                return {
                        id,
                        category,
                        title,
                        slug: {
                                href,
                                title
                        },
                        featured,
                        publishedAt,
                        // ...post,
                        img: {
                                src: postImageUrl,
                                title,
                                alt: title,
                                width: 1000,
                                height: 400,
                        },
                        body,
                        commentsEnable,
                        relatedPosts,
                };
        });
}