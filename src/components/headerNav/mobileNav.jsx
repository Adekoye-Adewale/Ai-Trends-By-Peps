import Link from 'next/link'
import { menuLinks } from '../../contentCopy/headerNavCopy'
import OpenResBtn from './openResBtn'

export default function MobileNav({ onClick, openNav, setOpenNav, openRes, setOpenRes }) {

        const mobileHandleOpenRes = () => {
                setOpenNav(!openNav);
                setOpenRes(!openRes);
        }

        return (
                <div className={`min-[900px]:hidden fixed top-0 left-full right-0 flex flex-col gap-5 p-10 max-w-[800px] w-[95%] h-dvh bg-LightColor-100 rounded-l-2xl border border-solid border-LightColor-300 transition-all duration-300 ${openNav ? 'translate-x-[-99%]' : 'translate-x-[10%]'} z-20`} >
                        <span
                                className='self-end text-xs font-semibold uppercase cursor-pointer'
                                onClick={onClick}
                        >
                                close
                        </span>
                        <Nav />
                        <div className='mt-auto'>
                                <OpenResBtn
                                        handleOpenRes={mobileHandleOpenRes}
                                />
                        </div>
                </div>
        )
}

const Nav = () => {
        return (
                <nav>
                        <ul className='grid text-base divide-y divide-solid divide-LightColor-500'>
                                {menuLinks.map((items) => (
                                        <li
                                                key={items.id}
                                                className='py-5'
                                        >
                                                <Link
                                                        href={items.url}
                                                        title={items.name}
                                                >
                                                        {items.name}
                                                </Link>
                                        </li>
                                ))}
                        </ul>
                </nav>
        )
}
