import { RightArrow } from '@/icons/arrows'
import Link from 'next/link'


export default function TertiaryBtn({ href, label }) {
        return (
                <Link 
                        href={href}
                        title={label}
                        className='flex gap-5 items-center'
                >
                        {label}
                        <RightArrow/>
                </Link>
        )
}
