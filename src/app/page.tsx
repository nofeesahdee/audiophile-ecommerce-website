import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import bgspeaker from "../starter-code/assets/home/desktop/image-speaker-zx9.png"
import Shop from "../components/shop";
import Bridging from "../components/bridging";
import Footer from "../components/footer";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full text-white lg:bg-hero min-h-screen px-[165px]">
                <Navbar />
                <div className="max-w-[398px] py-[225px]">
                    <span className="text-sm uppercase tracking-[10px]">New product</span>
                    <h1 className="py-[29px] text-[56px] font-bold leading-[58px]">XX99 Mark II Headphones</h1>
                    <p className="pb-[29px] font-medium text-[15px] leading-[25px]">
                        Experience natural, lifelike audio and exceptional
                        build quality made for the passionate music enthusiast.
                    </p>
                    <Link href={"/"} className="bg-[#D87D4A] px-[30px] py-[15px] uppercase font-bold"> See product</Link>
                </div>
            </div>
            <Shop />
            <div className="flex flex-col mb-[165px]">
                <div className="bg-[#D87D4A] bg-pattern-circle w-[1110px] h-[560px] flex text-white justify-around items-center mb-10 rounded-lg">
                    <Image src={bgspeaker} alt={""} className="w-[410.23px] h-[493px]" />
                    <div className="w-[340px]">
                        <h2 className="font-bold text-[56px] uppercase leading-[56px]"> ZX9 speaker</h2>
                        <p className="font-medium leading-6 text-[15px] py-8"> Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Link href={"/"} className="bg-black px-[30px] py-[15px] uppercase font-bold"> See product</Link>
                    </div>
                </div>
                <div className="bg-speaker-desktop w-[1110px] h-[320px] mb-10 rounded-lg flex justify-left items-center pl-20">
                    <div className="w-[204px]">
                        <h2 className="font-bold text-[28px] uppercase tracking-[2px] mb-8"> ZX7 speaker</h2>
                        <Link href={"/"} className="px-[30px] py-[15px] uppercase font-bold border-2 border-black"> See product</Link>
                    </div>
                </div>
                <div className="flex gap-[30px]">
                    <div className="bg-earphone-desktop w-[540px] h-[320px] rounded-lg" ></div>
                    <div className="bg-[#979797] w-[540px] h-[320px] rounded-lg flex flex-col justify-center pl-10">
                        <h2 className="font-bold text-[28px] uppercase tracking-[2px] mb-8"> YX1 EARPHONES</h2>
                        <Link href={"/"} className="py-[15px] uppercase font-bold border-2 border-black w-[160px] flex justify-center"> See product</Link>
                    </div>
                </div>
            </div>
            <Bridging />
            <Footer />
        </div >
    )
}