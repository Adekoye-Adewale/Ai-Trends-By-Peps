import { homeHero } from "@/contentCopy/homePageCopy";
import { Headline, Paragraph } from "../text";
import Cta from "./cta";
import ToolsSlide from "./toolsSlide";


export default function LandingPageHero() {
        return (
                <section 
                        className="grid place-content-center py-10 sm:py-40 max-w-screen h-[95svh] sm:h-screen bg-mainColor-300 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-mainColor-300 via-transparent to-mainColor-300" 
                        style={{ backgroundImage: 'url(/images/bg-grid-lines-redial.svg)'}}
                >
                        <div className="flex flex-col gap-5 px-5 max-w-[1440px] w-[95%] mx-auto text-center">
                                <div className="max-w-7xl mx-auto">
                                        <Headline 
                                                label={homeHero.headline}
                                        />
                                </div>
                                
                                <div className="max-w-3xl mx-auto sm:mt-3">
                                        <Paragraph
                                                label={homeHero.desc}
                                        />
                                </div>   
                                <Cta 
                                        href={homeHero.ctaLink}
                                        label={homeHero.ctaLabel}
                                />                             
                        </div>
                        <div className="mt-10 sm:mt-20">
                                <ToolsSlide/>
                        </div>
                </section>
        )
}
