import { CategoryPageComponent } from "@/components/resources"
import { fetchPosts } from "../util/getPosts";

const resImg = {
        src: `/images/Sunny.png`,
        alt: `AI trend resource page image`,
        title: `AI trend resource page image`,
        width: 1400,
        height: 800
}

export default async function CategoryPage({ params }) {
        const categorySlug = (await params).category

        const { allPosts } = await fetchPosts();

        const filteredContent = allPosts.filter(
                item => item.category === categorySlug
        );

        let categoryName;
        switch (categorySlug) {
                case "online-courses":
                        categoryName = "Online Courses";
                        break;
                case "ebooks-guides":
                        categoryName = "E-Books and Guides";
                        break;
                case "templates-toolkits":
                        categoryName = "Templates and Toolkits";
                        break;
                default:
                        categoryName = "Category Not Found";
        }


        return (
                <main>
                        <CategoryPageComponent
                                bgImg={resImg}
                                pageTitle={categoryName}
                                desc={`Explore resources in the ${categoryName} category.`}
                                content={filteredContent}
                        />
                </main>
        )
}