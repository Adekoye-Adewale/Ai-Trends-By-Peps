import { allRes } from "@/contentCopy/resouces";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, category, publishedAt, image, body, featured, category, commentsEnable, relatedPosts}`;

const options = { next: { revalidate: 30 } };

export default async function getAllPosts() {
        const posts = await client.fetch(POSTS_QUERY, {}, options);
        return posts
}

export const filterByCategory = (category) => {
        return allRes.filter(item => item.category?.name === category);
};

export const getOnlineCourses = filterByCategory("Online courses");

export const getEbooksAndGuides = filterByCategory("E-Books and guides");

export const getTemplatesAndToolkits = filterByCategory("Templates and toolkits");
