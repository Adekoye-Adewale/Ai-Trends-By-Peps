import { CategoryPageComponent } from "@/components/resources"
import { allRes } from "@/contentCopy/resouces";

const resImg = {
        src: `/images/Sunny.png`,
        alt: `AI trend resource page image`,
        title: `AI trend resource page image`,
        width: 1400,
        height: 800
}

export default async function CategoryPage({ params }) {
        const categorySlug = (await params).category

        const filteredContent = allRes.filter(
                item => item.category.slug === `/${categorySlug}`
        );

        const categoryName = filteredContent.length > 0
                ? filteredContent[0].category.name
                : "Category Not Found";


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