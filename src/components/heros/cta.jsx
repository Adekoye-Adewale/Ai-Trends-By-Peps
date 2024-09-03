import { RightArrow } from "@/icons/arrows";

export default function Cta({ handleContactPopup, label }) {
        return (
                <button
                                className="group flex gap-4 items-center justify-between px-6 py-2 mx-auto text-xl font-semibold rounded-md bg-transparent text-DarkColor-700 border border-solid border-DarkColor-800 shadow-[0px_2px_0px_2px_#001321] transition-all duration-300 hover:bg-DarkColor-800 hover:text-mainColor-200 hover:border-mainColor-500 hover:shadow-[0px_2px_0px_4px_#000204]"
                                title={label}
                                onClick={handleContactPopup}
                        >
                                {label}
                                <RightArrow
                                        className={'group-hover:translate-x-2 transition-all duration-300'}
                                />
                </button>
        )
}