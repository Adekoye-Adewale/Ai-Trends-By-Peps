import OpenResBtn from './openResBtn'
import Link from 'next/link'
import { menuLinks } from '@/contentCopy/headerNavCopy'

export default function DesktopNav({ handleOpenRes }) {
        return (
                <div className='flex items-center gap-5 text-base max-[900px]:hidden'>
                        <Nav />
                        <OpenResBtn
                                handleOpenRes={handleOpenRes}
                        />
                </div>
        )
}

const Nav = () => {
        return (
                <nav>
                        <ul className='flex gap-5'>
                                {menuLinks.map((items) => (
                                        <li key={items.id}>
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
