import React from "react";
import Image from "next/image";
export default function sing_in() {
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

      <div className=" h-screen flex items-center justify-center overflow-hidden  ">
        <div className="w-2/5  h-2/3 rounded-2xl fixed  bg-white shadow-md  content-center">
          <div className="text-3xl  flex fixed font-serif font-medium pt-4">
            <div>
              <h2 className="ml-52"> Welcome to </h2>
            </div>
            <div>
              <h1 className="ml-4 text-[#1565C0] text-3xl  "> Medcare</h1>
            </div>
          </div>
          <div className="flex justify-center pr-3 h-screen pt-14">
            <h1>lOGIN</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
