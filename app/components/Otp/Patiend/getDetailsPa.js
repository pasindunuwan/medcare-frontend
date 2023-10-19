"use client";

// Patient frontend
import React, { useState } from "react";
import Image from "next/image";

import { useFormStatePa } from "@/app/components/Otp/Patiend/FormContextPa";

export default function GetDetailsPatient() {
  const user = "patient";
  const { onHandleBack, onHandleNext, setFormData, formData } =
    useFormStatePa(); //use custom hook
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tel: "",
    nic: "",
    password: "",
    confirm_password: "", //default usestate object element
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData, //get user data without doesn't not  effecting other user data
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (userData.password !== userData.confirm_password) {
      setPasswordError(true);
      setUserData((prevUserData) => ({
        ...prevUserData,
        password: "",
        confirm_password: "",
      }));
      return;
      //if password and confirm password doesn't match excute this function
    }

    setFormData((prev) => ({
      ...prev,

      name: userData.name,
      email: userData.email,
      tel: userData.tel,
      nic: userData.number,
      password: userData.password,
      role: user,
      //final data output
    }));

    console.log(userData, "user data");
    onHandleNext(); //call this funtion to go next step of multi stepform
  }
  return (
    <div>
      <div className="h-screen w-full relative py-24 text-black">
        <div>
          <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src="/signup.png"
            layout="fill"
            quality={100}
            priority
            width="100"
          />
        </div>
        <div className="absolute top-2 left-0 cursor-pointer">
          <Image src="/logo.png" alt="logo" width="50" />
        </div>
        <div className=" container mx-auto opacity-80">
          <div className=" flex w-8/12 bg-white mx-auto overflow-hidden ">
            <div className=" w-1/2 flex flex-col justify-center">
              <h2
                className="mb-8 mr-2-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                                    font-extrabold"
              >
                Registration <br /> for <br /> Patient
              </h2>
              <dev className=" mr-5 text-lg md:xl lg:2xl">
                <p>
                  Join <b>MedCare</b> to easily manage your records.
                </p>
              </dev>
            </div>
            <div className=" w-1/2  bg-black text-white py-8 px-8">
              <form method="post" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white-700"
                  >
                    Full Name:
                  </label>

                  <input
                    name="name"
                    type="text"
                    value={userData.name}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 
              rounded-md shadow-sm py-2 px-3 focus:outline-none 
              focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
              text-black"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white-700"
                  >
                    Email(Username):
                  </label>

                  <input
                    name="email"
                    type="email"
                    value={userData.email}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white-700"
                  >
                    Contact No:
                  </label>
                  <input
                    name="tel"
                    type="tel"
                    value={userData.tel}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 
              rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="nic"
                    className="block text-sm font-medium text-white-700"
                  >
                    NIC:
                  </label>
                  <input
                    name="nic"
                    type="text"
                    value={userData.nic}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white-700"
                  >
                    Password:
                  </label>
                  <input
                    name="password"
                    type="password"
                    value={userData.password}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white-700"
                  >
                    confirm Password:
                  </label>
                  <input
                    name="confirm_password"
                    type="password"
                    value={userData.confirm_password}
                    required={true}
                    onChange={(e) => handleInputChange(e)}
                    className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
                  />
                </div>

                <div className="mb-4 flex items-center justify-center">
                  <button
                    type="submit"
                    className={`w-4/5 h-10 mt-4 bg-[#41A1F0] text-white font-medium py-2 px-4 rounded 
                hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                `}
                  >
                    Confirm
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
