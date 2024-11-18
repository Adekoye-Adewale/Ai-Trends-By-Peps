'use client'
import React, { useState, useEffect } from "react";
import { homeHero } from "@/contentCopy/homePageCopy";
import { Headline, Paragraph } from "../text";
import Cta from "./cta";
import ToolsSlide from "./toolsSlide";
import ContactPopUp from "../popUps/contactPopUp";


export default function LandingPageHero() {

        const [openPop, setOpenPop] = useState(false);

        const handleContactPopup = () => {
                setOpenPop(!openPop);
        }

        useEffect(() => {
                const handleKeyDown = (event) => {
                        if (event.key === 'Escape' && openPop) {
                                handleContactPopup();
                        }
                };
                
                window.addEventListener('keydown', handleKeyDown);
                
                return () => {
                        window.removeEventListener('keydown', handleKeyDown);
                };
        }, [openPop]);

        return (
                <>
                        <section 
                                className="grid place-content-center sm:pb-10 sm:pt-32 py-10 max-w-screen min-h-[95svh] sm:h-screen bg-mainColor-300 overflow-x-hidden bg-no-repeat bg-center bg-cover bg-gradient-to-r from-mainColor-300 via-transparent to-mainColor-300" 
                                style={{ backgroundImage: 'url(/images/bg-grid-lines-redial.svg)'}}
                        >
                                <div className="flex flex-col gap-5 px-5 max-w-[1440px] w-[95%] mx-auto text-center">
                                        <div className="max-w-4xl mx-auto">
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
                                                handleContactPopup={handleContactPopup}
                                                label={homeHero.ctaLabel}
                                        />                             
                                </div>
                                <div className="mt-10 sm:mt-20">
                                        <ToolsSlide/>
                                </div>
                        </section>
                        {openPop ? (
                                        <ContactPopUp 
                                                setOpenPop={setOpenPop} 
                                                openPop={openPop}
                                        />
                                ) : ''
                        }
                </>
        )
}
