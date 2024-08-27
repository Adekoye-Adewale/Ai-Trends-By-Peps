import { Courses } from "@/contentCopy/programs";
import { Title } from "../text";
import TertiaryBtn from "../button/tertiaryBtn";
import SubTitle from "../text/subTitle";
import { Fragment } from "react";

export default function Programs() {
        return (
                <section 
                        className="grid place-content-center py-20 sm:py-40 max-w-screen bg-LightColor-200 overflow-x-hidden"
                >
                        <div className="px-5 max-w-[1440px] w-[95%] mx-auto text-center">
                                <Title
                                label={Courses.title}
                                />
                                <div className="flex flex-wrap justify-center gap-5 mt-10">
                                        {Courses.program.map(( item, i ) => (
                                                <Fragment key={i}>
                                                        <Card 
                                                                icon={item.icon}
                                                                title={item.title}
                                                                ctaLabel={item.cta.label}
                                                                ctaLink={item.cta.href}
                                                        />
                                                </Fragment>
                                        ))}
                                </div>                
                        </div>                                
                </section>
        )
}


const Card = ({ icon, title, ctaLabel, ctaLink}) => {
        return (
                <div className="flex-[1_1_250px] sm:flex-[0_1_250px] p-5 text-left border-2 border-solid border-mainColor-300 rounded-xl bg-DarkColor-700 shadow-[6px_6px_0px_0px_#000204] transition-all duration-300 hover:bg-DarkColor-900 hover:shadow-[-6px_-6px_0px_0px_#000204] cursor-default text-DarkColor-200 [&>h3]:text-LightColor-200 [&>a]:mt-2 ">
                        <div 
                                dangerouslySetInnerHTML={{ __html: icon }}
                                className="[&>svg]:w-20 [&>svg]:h-20 mb-5 [&>svg]:text-LightColor-200"
                        >
                        </div>
                        <SubTitle 
                                label={title}
                        />
                        <TertiaryBtn 
                                href={ctaLink}
                                label={ctaLabel}
                        />
                </div>
        )
}