import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BrandName from "@ui/brandName";
import { CiLogin } from "react-icons/ci";
import { MdConnectWithoutContact } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
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
        <section className="landing-page  md:flex flex-row-reverse ">
          <div className="hero-div mb-6 md:mb-0">
            <Image
              src="/images/hero-desktop.jpg"
              alt="hero image"
              width={800}
              height={300}
              className="md:w-[1000px]"
            />
          </div>
          <div className="desc flex flex-col items-center md:items-start md:justify-end md:grow px-4 h-auto">
            <p className="font-inter text-2xl md:text-4xl md:max-w-[200px] text-center md:text-left text-secondary font-bold grow md:grow-0">
              {"Let us connect with your friends in real time."}
            </p>
            <p className="px-2 py-4 text-[.85rem] font-medium text-center md:text-left font-lato">
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
        <section>
          <div>
            <Image
              src="/images/connect.jpg"
              alt="connect with friends"
              width={800}
              height={200}
            />
          </div>

          <div className="flex items-center justify-between py-4 px-6 gap-4 ">
            <div className="flex flex-col items-center gap-1">
              <IoMdChatbubbles size={40} className="text-secondary" />
              <p className="text-[10px]">send messages</p>
            </div>
            <div className="flex flex-col  items-center gap-1">
              <MdCall size={40} className="text-secondary" />
              <p className="text-[10px]">Make calls</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <IoIosVideocam size={40} className="text-secondary" />
              <p className="text-[10px]">Make videos</p>
            </div>
          </div>
        </section>
        <footer className="flex justify-center pt-8">
          <BrandName text="Paddy" />
        </footer>
      </main>
    </>
  );
}
