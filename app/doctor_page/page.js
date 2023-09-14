import React from "react";
import Image from "next/image";
import doctor_page from "./doctor_pg.png";
import logo from "../sign_up_choose/logo.png";

function page() {
  return (
    <div className=" relative justify-center h-screen items-center w-full min-h-screen flex bg-slate-500">
      <Image
        className="absolute bg-cover bg-center  sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src={doctor_page}
        layout="fill"
        quality={100}
        priority
      />
      <div className=" absolute top-2 left-0 opacity-80 cursor-pointer">
        <Image className=" mx-3 " src={logo} alt="logo" />
      </div>
      <div class=" p-5  flex-col  relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
        <h1 className=" font-bold p-6 text-center text-3xl opacity-90">
          {" "}
          Welcome to MedCare <br /> Doctors’ page
        </h1>
        <from>
          <div className=" bg-slate-300 rounded-xl p-8 relative mx-5 text-xl m-6 shadow-lg">
            <h1 className="p-3">Enter patient’s username</h1>
            <input
              type=" email"
              className="w-full rounded-md p-2"
              placeholder="someone123@gmail.com"
            />
            <div className="flex flex-col items-center">
              <button
                type="submit"
                className=" mt-5 py-1 px-8 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-semibold"
              >
                Send OTP
              </button>
            </div>
          </div>
        </from>
      </div>
    </div>
  );
}

export default page;
