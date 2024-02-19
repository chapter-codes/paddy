import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BrandName from "@ui/brandName";
import { CiLogin } from "react-icons/ci";
import { MdConnectWithoutContact } from "react-icons/md";
// import Typewriter from "typewriter-effect";

const metadata: Metadata = {
  openGraph: {
    images: [{ url: "images/hero-mobile.jpg" }],
  },
};
//
export default function Home() {
  return (
    <>
      <header className="pr-4 py-2 flex justify-between items-center">
        <BrandName classes={``} />
        <Link
          href="/register"
          className="text-secondary hover:text-primary  transition-all hover:scale-[1.1] flex items-center justify-between gap-1 text-sm"
        >
          <CiLogin size={18} className="pr" />
          Join now
        </Link>
      </header>
      <main className="bg-blue-500 pb-4">
        <section className="landing-page">
          <div className="hero-div mb-6">
            <Image
              src="/images/hero-desktop.jpg"
              alt="hero image"
              width={500}
              height={300}
            />
          </div>
          <div className="desc flex flex-col items-center px-4 h-full">
            <p className="font-inter text-2xl text-center text-secondary font-bold grow">
              {"Let us connect with your friends in real time"}
            </p>
            <p className="py-4 text-base text-center  font-lato">
              chat, call and make videos to share your favourite moments
              together.
            </p>
            <Link
              href="/login"
              className="rounded-r-lg bg-primary text-white border-[1px] p-2 font-medium text-sm font-andika overflow-hidden  transition-all hover:scale-x-105 flex items-center justify-between gap-1"
            >
              <MdConnectWithoutContact size={20} />
              Connect Now
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
