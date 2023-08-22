"use client";
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginUser: React.FC = () => {
  const { status, data } = useSession();
  const router = useRouter();

  return (
    <div className="relative group">
      {/* User dropdown */}
      {status === "unauthenticated" ? (
        <button
          className="bg-black text-white py-1 px-2 text-sm font-medium rounded-lg"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      ) : (
        <>
          <Image
            src={data?.user?.image || "/user_icon.svg"}
            alt="User Icon"
            width={30}
            height={30}
            className="cursor-pointer rounded-full"
          />
          <div className="absolute top-full right-0 hidden group-hover:block bg-white text-black py-2 px-4 space-y-2 border border-gray-200 rounded-lg shadow-lg z-10">
            <p>{data?.user?.email}</p>
            <button
              className="bg-black text-white py-1 px-2 text-sm font-medium rounded-lg"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginUser;
