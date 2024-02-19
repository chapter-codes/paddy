import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import BrandName from "@ui/brandName";
import { IoCreateOutline } from "react-icons/io5";

const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <>
      <header className="pr-4 py-2 flex justify-between items-center">
        <BrandName classes={``} />
        <Link
          href="/register"
          className="text-secondary hover:text-primary  transition-all hover:scale-[1.1] flex items-center justify-between gap-1 text-sm"
        >
          <IoCreateOutline size={18} className="" />
          Register
        </Link>
      </header>
      <main></main>
    </>
  );
}
