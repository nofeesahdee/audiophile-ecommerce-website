import Image from 'next/image'
import Link from 'next/link'
import Logo from "../starter-code/assets/shared/desktop/logo.svg"
import Cart from "../starter-code/assets/shared/desktop/icon-cart.svg"


export default function Navbar() {
    return (
        <nav className='flex justify-between uppercase border-b-[1px] border-[#979797] py-8'>
            <Image src={Logo} alt={'logo'} />
            <div className='w-[429px] flex justify-between text-[13px]'>
                <Link href={'/'}>Home</Link>
                <Link href={'/headphones'}>Headphones</Link>
                <Link href={'/speakers'}>Speakers</Link>
                <Link href={'/earphones'}>Earphones</Link>
            </div>
            <Image src={Cart} alt={'cart icon'} />
        </nav >
    )
}

