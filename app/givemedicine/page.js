"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
//import docsign from "./signup.png";
import { useFormStateF } from "@/app/form/items/FormContextF";
function page() {
  const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext,email, setEmail } = useFormStateF();
  const [formDataArray, setFormDataArray] = useState([]);
  const [FormData, setFormData] = useState({
    MedicineName: "",
    BrandName: "",
    Quantity: "",
    TakingMethod: {
      beforeMeal: false,
      afterMeal: false,
      morning: false,
      afternoon: false,
      evening: false,
    },
    Inscructions: "",
    //default usestate object element
  });
  /* const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckBox = (e) => {
    const { name, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      TakingMethod: {
        ...prevFormData.TakingMethod,
        [name]: checked,
      },
    }));
  };
*/

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type !== "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        TakingMethod: {
          ...prevFormData.TakingMethod,
          [name]: checked,
        },
      }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // onSubmit(FormData);
    console.log("Form submitted:", FormData);
    console.log("Checkbox Values:", FormData.TakingMethod);
    //reset

    // Save the current form data to the array
    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, FormData]);
    console.log("array Values:", formDataArray);
    setFormData({
      MedicineName: "",
      BrandName: "",
      Quantity: "",
      TakingMethod: {
        beforeMeal: false,
        afterMeal: false,
        morning: false,
        afternoon: false,
        evening: false,
      },
      Inscructions: "",
    });
  }
  async function handleSubmitArray(e) {
    console.log("array Values in handleSubmitArray:", formDataArray);
    console.log("email from usecontext",email);
    const dataarray={...formDataArray,
      email};
     try {
      // Make an API request to your backend
      // You can replace the URL with your actual backend API endpoint
      const response = await fetch("https://your-backend-api-endpoint.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataarray),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log("Data sent to the backend successfully");
        // You can perform additional actions if needed
      } else {
        console.error("Failed to send data to the backend");
        // Handle the error
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle any unexpected errors
    }
  }
  useEffect(() => {
    console.log("array Values:", formDataArray);
  }, [formDataArray]);

  return (
    <div>
      <div className="h-screen w-full relative py-24 text-black">
        <div className="">
          <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src="/signup.png"
            layout="fill"
            quality={100}
            priority
          />
        </div>

        <div className=" pt-72 flex justify-center items-center">
          <div className=" border-blue-400 p-16 absolute border bg-slate-300">
            <form className="" method="post" onSubmit={handleSubmit}>
              <div>
                <input type="date" className=" mt-5 mb-5 border"></input>
              </div>
              <div>
                <lable>Medicine Name :</lable>
                <input
                  type="text"
                  className=" mx-1 w-64 mt-3 mb-3 border"
                  placeholder="Osatil 10 mg"
                  onChange={handleInputChange}
                  name="MedicineName"
                  value={FormData.MedicineName}
                />
              </div>
              <div>
                <lable>Brand Name :</lable>
                <input
                  type="text"
                  className=" mx-7 w-64 mt-2 mb-2 border "
                  onChange={handleInputChange}
                  name="BrandName"
                  value={FormData.BrandName}
                />
              </div>
              <div>
                <lable>Quantity :</lable>
                <input
                  type="number"
                  className="w-64 m-14 mt-3 border "
                  onChange={handleInputChange}
                  name="Quantity"
                  value={FormData.Quantity}
                />
              </div>
              <div>
                <lable className=" text-xl">Taking Method</lable>
                <div className="p-5 gap-8 flex">
                  <div className=" ">
                    <input
                      type="checkbox"
                      className=" w-4 h-4"
                      onChange={handleInputChange}
                      name="beforeMeal"
                      checked={FormData.TakingMethod.beforeMeal}
                    />

                    <lable> Before Meal</lable>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className=" w-4 h-4"
                      onChange={handleInputChange}
                      name="afterMeal"
                      checked={FormData.TakingMethod.afterMeal}
                    />
                    <lable> After Meal</lable>
                  </div>
                </div>
                <div className="p-5 gap-8 flex">
                  <div className=" ">
                    <input
                      type="checkbox"
                      className=" w-4 h-4"
                      onChange={handleInputChange}
                      name="morning"
                      checked={FormData.TakingMethod.morning}
                    />
                    <lable> Morning</lable>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className=" w-4 h-4"
                      onChange={handleInputChange}
                      name="afternoon"
                      checked={FormData.TakingMethod.afternoon}
                    />
                    <lable> Afternoon</lable>
                  </div>
                  <div className=" ">
                    <input
                      type="checkbox"
                      className=" w-4 h-4"
                      onChange={handleInputChange}
                      name="evening"
                      checked={FormData.TakingMethod.evening}
                    />
                    <lable> Evening</lable>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Inscructions"
                    className="h-20 w-96 px-6 text-lg border-2 border-black border-opacity-50 outline-none focus:border-blue-500 transition duration-200"
                    onChange={handleInputChange}
                    name="Inscructions"
                    value={FormData.Inscructions}
                  />
                </div>

                <div className=" mx-12 flex gap-5">
                  <button
                    type="submit"
                    className=" mt-8 py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
                    onClick={handleSubmit}
                  >
                    save
                  </button>
                </div>
              </div>
            </form>
            <div className=" mx-12 flex gap-5">
              <button
                type="submit"
                className=" py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
                onClick={handleSubmitArray}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
