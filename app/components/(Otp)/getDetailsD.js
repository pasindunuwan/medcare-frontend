"use client";
import React from "react";
import Image from "next/image";
import logo from "../sign_up_choose/logo.png";
import docsign from "../public/signup.png";
import docform from "../public/signup_form.png";
import { useState } from "react";
import Link from "next/link";
import { useFormState } from "@/app/components/(Otp)/FormContext";

function getDetailsD() {
  const user=doctor
  const { onHandleBack, onHandleNext, setFormData, formData } = useFormState(); //use custom hook
  const [userData, setUserData] = useState({
    FullName: "",
    email: "",
    tel: "",
    number: "",
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

      FullName: userData.FullName,
      email: userData.email,
      tel: userData.tel,
      number: userData.number,
      password: userData.password,
      role:user,
      //final data output
    }));

    console.log(userData, "user data");
    onHandleNext(); //call this funtion to go next step of multi stepform
  }
  return (
    <div>
      <div className="h-screen w-full relative py-36 text-black">
        <div>
          <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src={docsign}
            layout="fill"
            quality={100}
            priority
          />
        </div>
        <div className="absolute top-3 left-0 cursor-pointer">
          <Image src={logo} alt="logo" />
        </div>
        <div className=" container mx-auto opacity-80">
          <div className=" flex w-8/12 bg-white mx-auto overflow-hidden ">
            <div className=" w-1/2 flex flex-col justify-center">
              <h2 className="mb-8 mr-2-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                Registration <br /> for <br />
                Doctors
              </h2>
              <dev className=" mr-5 text-lg md:xl lg:2xl">
                <p>
                  Join to <b className=" text-blue-700">MedCare</b> to easily
                  manage your patients
                </p>
              </dev>
            </div>
            <div className=" w-1/2  bg-black text-white py-8 px-8">
              <form method="post" onSubmit={handleSubmit}>
                <lable>Full Name</lable>
                <input
                  type="text"
                  className=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="FullName"
                  value={userData.FullName}
                />

                <lable>Email</lable>
                <input
                  type="email"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="email"
                  value={userData.email}
                />

                <lable>Contact No</lable>
                <input
                  type="tel"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="tel"
                  value={userData.tel}
                />

                <lable>SLMC No</lable>
                <input
                  type="number"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="number"
                  value={userData.number}
                />

                <lable>Password</lable>
                <input
                  type="password"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="password"
                  value={userData.password}
                />

                <lable>Re-Enter Passsword</lable>
                <input
                  type="password"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="confirm_password"
                  value={userData.confirm_password}
                />
                <dev className="items-center justify-center flex gap-7">
                  {passwordError && (
                    <p className="text-red-500 text-xs italic">
                      Passwords do not match.
                    </p>
                  )}
                  <button
                    type="submit"
                    className=" mt-5 py-1 px-10 text-white bg-slate-800 rounded-xl font-bold"
                  >
                    Confirm
                  </button>
                </dev>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getDetailsD;
