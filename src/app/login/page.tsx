import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { useFormState } from "react-dom";
import BrandName from "@ui/brandName";
import { FcGoogle } from "react-icons/fc";
import activate from "@public/images/activate.jpg";
import { login } from "@lib/action";
console.log(activate);

const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(login, initialState);

  return (
    <section className="min-h-screen md:h-screen md:flex">
      <section className="grow md:max-w-[300px] lg:max-w-[500px] flex flex-col h-full">
        <header className="mx-auto mt-8 mb-4 w-4/5 md:mx-4">
          <BrandName text="Paddy" classes="ml-0" />
        </header>
        {}
        <main className={"grow  md:flex md:gap"}>
          <form action={dispatch} className=" w-4/5  mx-auto my-4 md:px-4">
            <div className="shout-out font-lato mb-6">
              <p className="text-base font-bold text-secondary pb-1">
                Hello there, I greet you paddy!
              </p>
              <p className="text-[0.85rem] font-medium ">
                Login to connect with your paddy, don't be left out.
              </p>
            </div>
            <label htmlFor="email" className="text-[0.85rem]">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-[primary] border-[1px] rounded-sm block w-full mb-4 px-1 py-1 text-sm font-lato focus:border-primary "
              placeholder="example@gmail.com"
              required
              defaultValue={"mail@paddy.com"}
            />
            <div className="password">
              <label htmlFor="password" className="text-[0.85rem]">
                Password
              </label>
              <input
                type="password"
                id="password"
                className=" border-[1px] rounded-sm block w-full mb-4 px-1 py-1 text-sm font-lato focus:border-primary "
                placeholder="********"
                required
                defaultValue={"12345678"}
              />
              {/* {error} */}
            </div>
            <div className="extra flex items-center justify-between text-[0.75rem]">
              <div className="rem-me flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="border-[primary] border-[1px] "
                />
                <label htmlFor="remember-me" className="pl-[0.1rem]">
                  Remember Me.
                </label>
              </div>
              <Link href="" className="">
                Forgot Password?
              </Link>
            </div>
            <div className="btn flex items-center justify-center gap-3 my-6 text-white text-[0.85rem]">
              <button
                type="submit"
                className="login bg-primary px-4 py-1 rounded-lg"
              >
                Login
              </button>
              <Link href={"/register"}></Link>
              <button className="signup bg-secondary px-4 py-1 rounded-lg">
                sign Up
              </button>
            </div>
            <section className="alternative-login">
              <p className="text-center text-[0.8rem]">OR Connect with</p>
              <button className="flex justify-center items-center w-24 mx-auto my-4 py-1 rounded-lg border-[1px] ">
                <FcGoogle size={25} />
                <p className="text-[0.8rem]">Google</p>
              </button>
            </section>
          </form>
        </main>
        <footer className="grow flex justify-center pt-8 pb-4">
          <BrandName text="Paddy" makeLink={false} />
        </footer>
      </section>
      <div className="grow bg-activate bg-right-top  bg-no-repeat bg-cover  hidden md:block ">
        {/* <Image
        //   src="/images/activate.jpg"
        //   width={500}
        //   height={400}
        //   alt="image showing two people sharing"
        //   className="w-full object-cover"
        // /> */}
      </div>
    </section>
  );
}
