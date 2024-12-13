import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[ 
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category, publishedAt, image, body, featured, category, commentsEnable, relatedPosts}`;

const { projectId, dataset } = client.config();

const options = { next: { revalidate: 60 } };

export const urlForImg = (source) =>
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

export const fetchPosts = async () => {
        try {
                const fetchedPosts = await client.fetch(POSTS_QUERY, {}, options);
                const allPosts = processPostsWithImageUrls(fetchedPosts);
                return { allPosts };
        } catch (error) {
                console.error('Error fetching posts:', error);
                throw new Error('Failed to fetch posts');
        }
}