"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
//import { useRouter } from "next/router";

import { signIn } from "next-auth/react";

export default function signin() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  const [error, seterror] = useState("");

  const onSubmit = async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.status === 200) {
        // Redirect based on user role
        if (result?.user?.role === "doctor") {
          router.push("/Home");
        } else if (result?.user?.role === "pharmacy") {
          router.push("/Home");
        } else if (result?.user?.role === "paitent") {
          router.push("/HOme");
        }
      } else {
        router.push("/doctor-dashboard");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <Image
        className="absolute bg-cover bg-center h-screen"
        alt="Mountains"
        src="/lgbg.jpg"
        layout="fill"
        quality={100}
        priority
      />

      <div className="bg-[#9FAFE9] h-full w-full  absolute opacity-60"></div>

      <div className=" h-screen flex items-center justify-center ">
        <div className="w-2/5  h-2/3 rounded-2xl fixed  bg-white   content-center shadow-2xl">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={onSubmit} method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="abc@gamil.com"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <a
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </a>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder="••••••••"
                      length="8"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="text-red-500 text-sm font-light text-left mt">
                invalid password or email
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <a
                  href="./sign_up_choose"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
