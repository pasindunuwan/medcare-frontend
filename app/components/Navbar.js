"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuopen, setMenuopen] = useState(false);
  const handleNav = () => {
    setMenuopen(!menuopen);
  };
  return (
    <div>
      <nav className="fixed w-full  bg-transparent">
        <div className="flex justify-between items-centerh-full w-full px-4 2xl:px-16 ">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width="98"
              height="98"
              className="cursor-pointer left-[-5]"
              priority
            />
          </Link>
          <div className="hidden  justify-center sm:flex">
            <ul className="hidden  sm:flex">
              <div className="flex space-x-20 ">
                <div>
                  <Link href="/">
                    <li className=" uppercase  text-black hover:text-sky-500 active:text-sky-700  text-xl space-x-4 font-semibold mt-4 ">
                      Home
                    </li>
                  </Link>
                </div>
                <div>
                  <Link href="/about">
                    <li className=" uppercase text-black hover:text-sky-500 active:text-sky-700 text-xl font-semibold mt-4">
                      About us
                    </li>
                  </Link>
                </div>
                <div>
                  <Link href="/our_service">
                    <li className=" uppercase  text-black hover:text-sky-500 active:text-sky-700  text-xl font-semibold mt-4">
                      our service
                    </li>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
          <div className="hidden  sm:flex">
            <Link href="/sign-in">
              <div className="bg-blue-500 hover:bg-blue-600 rounded border-8-8 mt-6 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800">
                <div className=" text-white font-bold py-2 px-4  ">Log In</div>
              </div>
            </Link>
          </div>

          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            menuopen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen  bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className=" cursor-pointer  ">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="pt-10 justify-left">
            <header className="bg-blue-500/10 h-15 w-[70%] flex items-center absolute ">
              <Image
                src="/logo.png"
                alt="logo"
                width="50"
                height="50"
                className="cursor-pointer ustify-items-center ml-8 "
                priority
              />
            </header>
          </div>

          <div className=" pt-20 flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuopen(false)}
                  className="py-4 cursor-pointer border"
                >
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setMenuopen(false)}
                  className="py-4 cursor-pointer"
                >
                  About
                </li>
              </Link>
              <Link href="/our_service">
                <li
                  onClick={() => setMenuopen(false)}
                  className="py-4 cursor-pointer"
                >
                  Our service
                </li>
              </Link>
              <li>
                <Link href="/sign-in">
                  <div className="bg-blue-500 hover:bg-blue-600 rounded border-8-8 mt-6 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-800">
                    <div className=" text-white font-bold py-2 px-4 ml-8 ">
                      Log In
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
