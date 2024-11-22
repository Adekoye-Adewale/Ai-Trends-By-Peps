import { allRes } from "@/contentCopy/resouces";


export const filterByCategory = (category) => {
        return allRes.filter(item => item.category === category);
};

export const getOnlineCourses = filterByCategory("Online courses");

export const getEbooksAndGuides = filterByCategory("E-Books and guides");

export const getTemplatesAndToolkits = filterByCategory("Templates and toolkits");
