import Link from "next/link";
import Bridging from "../../components/bridging";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Shop from "../../components/shop";

export default function Headphones() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full text-white bg-black px-[165px]">
                <Navbar />
                <div className="">

                </div>
            </div>
            <Shop />
            <Bridging />
            <Footer />
        </div >
    )
}
