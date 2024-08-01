import Image from 'next/image'
import Link from 'next/link'
import arrow from "../starter-code/assets/shared/desktop/icon-arrow-right.svg"
import earphones from "../starter-code/assets/shared/desktop/image-category-thumbnail-earphones.png"
import headphones from "../starter-code/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speaker from "../starter-code/assets/shared/desktop/image-category-thumbnail-speakers.png"

export default function Shop() {
    return (
        <div className="flex px-[165px] justify-between w-full py-[165px] gap-8">
            <div className="bg-[#F1F1F1] h-[204px] w-[350px] flex flex-col items-center justify-center rounded-lg">
                <Image src={headphones} alt={"headphones"} className="mt-[-75px] w-[122.95px] h-[160px]" />
                <h2 className="uppercase font-bold text-lg tracking-[1.29px] pb-4">Headphones</h2>
                <Link href={""} className="flex uppercase text-[13px] font-bold tracking-[1px]">
                    Shop
                    <Image src={arrow} alt={"arrow"} width={10} height={10} className="ml-[13px]" />
                </Link>
            </div>
            <div className="bg-[#F1F1F1] h-[204px] w-[350px] flex flex-col items-center justify-center rounded-lg">
                <Image src={speaker} alt={"speaker"} className="mt-[-60px] w-[121.49px] h-[146px]" />
                <h2 className="uppercase font-bold text-lg tracking-[1.29px] pb-4">Speakers</h2>
                <Link href={""} className="flex uppercase text-[13px] font-bold tracking-[1px]">
                    Shop
                    <Image src={arrow} alt={"arrow"} width={10} height={10} className="ml-[13px]" />
                </Link>
            </div>
            <div className="bg-[#F1F1F1] h-[204px] w-[350px] flex flex-col items-center justify-center rounded-lg">
                <Image src={earphones} alt={"earphones"} className="mt-[-60px] w-[125px] h-[126px]" />
                <h2 className="uppercase font-bold text-lg tracking-[1.29px] pb-4">Earphones</h2>
                <Link href={""} className="flex uppercase text-[13px] font-bold tracking-[1px]">
                    Shop
                    <Image src={arrow} alt={"arrow"} width={10} height={10} className="ml-[13px]" />
                </Link>
            </div>
        </div>
    )
}
