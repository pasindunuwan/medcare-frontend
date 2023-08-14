"use client";
import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import bg_image from "../public/bg_image.jpg";
export default function Home() {
  return (
    <div className="h-screen w-full relative">
      <Image
        className=" absolute bg-cover bg-center h-screen w-full  sm:h-48"
        alt="Mountains"
        src={bg_image}
        layout="fill"
        quality={100}
        priority
      />

      <div className="bg-[#8b8ac6] h-full w-full  absolute opacity-60"></div>
      <Navbar />

      <div className="h-screen flex items-center justify-left   ml-10 md:ml-20 lg:ml-20 xl:ml-20 ">
        <h1 className="text-[#0F0677] font-serif font-extrabold absolute text-5xl  md:text-6xl lg:text-7xl xl:text-7xl">
          MED CARE
        </h1>
        <span className=" text-black absolute  font-sans  pt-40 text-2xl  md:text-3xl lg:text-3xl xl:text-3xl">
          Organize and maintain your medical records
          <br />
          and reports with us digitally ..
        </span>
      </div>
    </div>
  );
}
