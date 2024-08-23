import Image from "next/image";
import { Paragraph, Title } from "../text";
import { homeAbtSec } from "@/contentCopy/homePageCopy";

export default function AboutSection() {
        return (
                <section
                        className="grid place-content-center py-20 sm:py-40 max-w-screen bg-mainColor-100 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-mainColor-100 via-transparent to-mainColor-100"
                        style={{ backgroundImage: 'url(/images/bg-grid-lines-plain.svg)' }}
                >
                        <div className="grid grid-cols-1 sm:grid-cols-2 content-between items-center gap-12 sm:gap-10 px-5 max-w-[1440px] w-[95%] mx-auto text-center">
                                <div>
                                        <Image 
                                                {...homeAbtSec.img}
                                                className="size-full rounded-xl border-2 border-solid border-mainColor-500 shadow-[-20px_20px_0px_0px_#000204]"
                                        />
                                </div>
                                <div className="text-left flex flex-col gap-5">
                                        <Title
                                                label={homeAbtSec.title}
                                        />
                                        <Paragraph
                                                label={homeAbtSec.desc}
                                        />
                                </div>
                        </div>
                </section>
        )
}
