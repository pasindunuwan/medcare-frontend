import React from "react";
import Image from "next/image";
//import logo from "../sign_up_choose/logo.png";
//import docsign from "../public/signup.png";
//import docform from ".../public/signup_form.png";
import { useState } from "react";
import { useFormStatePh } from "@/app/components/Otp/Pharmacy/FormContextPh";

function GetDetailsph() {
  const user = "pharmacy";
  const { onHandleBack, onHandleNext, setFormData, FormData } =
    useFormStatePh();

  const [userData, setUserData] = useState({
    Pharmacy_Name: "",
    email: "",
    tel: "",
    number: "",
    town: "",
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

      Pharmacy_Name: userData.Pharmacy_Name,
      email: userData.email,
      tel: userData.tel,
      number: userData.number,
      town: userData.town,
      password: userData.password,
      role: user,
      //final data output
    }));
    // onHandleNext();
    console.log(userData, "user data");
    sendusername();
    //call this funtion to go next step of multi stepform
  }

  async function sendusername() {
    const email = userData.email;
    try {
      const response = await fetch(
        "http://localhost:8070/pharmacy/pharmacyreg",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Send the email as an object
        }
      );

      if (response.ok) {
        onHandleNext();
        console.log("mail address send successfull");
      } else {
        console.log("mail address send failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  return (
    <div>
      <div className="h-screen w-full relative py-24 text-black">
        <div>
          <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src="/signup.png"
            //layout="fill"
            quality={100}
            priority
            width="100"
            height="100"
          />
        </div>
        <div className="absolute top-2 left-0 cursor-pointer">
          <Image src="/logo.png" width="50" height="50" alt="logo" />
        </div>
        <div className=" container mx-auto opacity-80">
          <div className=" flex w-8/12 bg-white mx-auto overflow-hidden ">
            <div className=" w-1/2 flex flex-col justify-center">
              <h2 className="mb-8 mr-2-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
                Registration <br /> for <br /> Pharmacy
              </h2>
              <dev className=" mr-5 text-lg md:xl lg:2xl">
                <p>When you can, Always laugh.“ It’s a low-cost drug. “</p>
              </dev>
            </div>
            <div className=" w-1/2  bg-black text-white py-8 px-8">
              <form method="post" onSubmit={handleSubmit}>
                <lable>Pharmacy Name</lable>
                <input
                  type="text"
                  className=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="Pharmacy_Name"
                  value={userData.Pharmacy_Name}
                />

                <lable>Email(Username)</lable>
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

                <lable>Pharmacy Registration No</lable>
                <input
                  type="number"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="number"
                  value={userData.number}
                />

                <lable>Located Town</lable>
                <input
                  type="text"
                  class=" text-black mt-2 mb-2 border w-full"
                  required={true}
                  onChange={(e) => handleInputChange(e)}
                  name="town"
                  value={userData.town}
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
                  <button
                    onClick={handleSubmit}
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

export default GetDetailsph;
