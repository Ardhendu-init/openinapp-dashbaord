"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage: React.FC = () => {
  const { status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex w-full h-[100vh] font-mont">
      <div className="bg-black md:flex justify-center items-center w-[40%] hidden ">
        <h1 className="text-white text-7xl font-bold">Board.</h1>
      </div>
      <div className="flex flex-col justify-center items-center md:w-[60%] w-full">
        <div>
          <h1 className="text-4xl font-bold text-center md:text-left">
            Sign In{" "}
          </h1>
          <p className="font-lato text-base text-center md:text-left">
            Sign in to your account
          </p>
          <div className="mt-8 flex sm:flex-row flex-col text-xs text-[#858585] gap-6     ">
            <div
              className="flex px-5 py-2 rounded-xl bg-white items-center gap-3 cursor-pointer "
              onClick={() => signIn("google")}
            >
              <Image
                src="/google-icon.svg"
                alt="Google-Icon"
                width={12}
                height={12}
              />
              <p>Sign in with Google</p>
            </div>
            <div className="flex px-5 py-2 rounded-xl bg-white items-center gap-3 cursor-pointer">
              <Image
                src="/apple-icon.svg"
                alt="Apple-Icon"
                width={12}
                height={12}
              />
              <p>Sign in with Apple</p>
            </div>
          </div>
        </div>
        <div className=" bg-white rounded-xl p-6 shadow-md mt-6 sm:min-w-[385px] w-[350px] font-lato text-base text-black">
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-lg outline-none "
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block  mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                className="w-full p-2 border rounded-lg outline-none "
                required
              />
            </div>
            <div className="text-left mb-4">
              <Link href="#" className="text-[#346BD4] hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-bold p-2 rounded-xl "
            >
              Sign In
            </button>
          </form>
        </div>
        <p className="mt-5 font-lato text-base text-[#858585]">
          Don&apos;t have an account?{" "}
          <span className="text-[#346BD4] cursor-pointer hover:underline">
            Register here{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
