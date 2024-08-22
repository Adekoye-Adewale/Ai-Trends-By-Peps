import { Courses } from "@/contentCopy/programs";
import { Title } from "../text";
import TertiaryBtn from "../button/tertiaryBtn";
import SubTitle from "../text/subTitle";

export default function Programs() {
        return (
                <section 
                        className="grid place-content-center py-20 sm:py-40 max-w-screen bg-mainColor-100 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-mainColor-100 via-transparent to-mainColor-100"
                        style={{ backgroundImage: 'url(/images/bg-grid-lines-plain.svg)' }}
                >
                        <div className="px-5 max-w-[1440px] w-[95%] mx-auto text-center">
                                <Title
                                label={Courses.title}
                                />
                                <div className="flex flex-wrap justify-center gap-5 mt-10">
                                        {Courses.program.map((item) => (
                                                <Card 
                                                        icon={item.icon}
                                                        title={item.title}
                                                        ctaLabel={item.cta.label}
                                                        ctaLink={item.cta.href}
                                                />
                                        ))}
                                </div>                
                        </div>                                
                </section>
        )
}


const Card = ({ icon, title, ctaLabel, ctaLink}) => {
        return (
                <div className="flex-[1_1_250px] sm:flex-[0_1_250px] p-5 text-LightColor-200 text-left border-2 border-solid border-mainColor-300 rounded-md bg-DarkColor-700 shadow-[6px_6px_0px_0px_#000204] transition-all duration-300 hover:shadow-[-6px_-6px_0px_0px_#000204] cursor-default [&>a]:mt-2 ">
                        <div 
                                dangerouslySetInnerHTML={{ __html: icon }}
                                className="[&>svg]:w-20 [&>svg]:h-20 mb-5"
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