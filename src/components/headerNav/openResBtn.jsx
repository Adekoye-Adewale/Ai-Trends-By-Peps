import React from 'react'
import { RightArrow } from "@/icons/arrows";


export default function OpenResBtn({ handleOpenRes }) {
        return (
                <button
                        onClick={handleOpenRes}
                        className="group flex gap-4 items-center justify-between px-6 py-2 text-base font-medium rounded-md bg-mainColor-300 text-DarkColor-700 border border-solid border-DarkColor-800 shadow-[4px_4px_0px_0px_#001321] transition-all duration-300 hover:bg-DarkColor-800 hover:text-mainColor-200 hover:border-mainColor-500 hover:shadow-[6px_6px_0px_0px_#000204]"
                >
                        Register Now
                        <RightArrow
                                className={'group-hover:translate-x-2 transition-all duration-300'}
                        />
                </button>
        )
}
