"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
//import docsign from "./signup.png";

function P_med_page({ onSubmit }) {
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
    onSubmit(FormData);
    // console.log("Form submitted:", FormData);
    console.log("Checkbox Values:", FormData.TakingMethod);
    //reset
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

  return (
    <div>
      <div className="h-screen w-full relative py-24 text-black">
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
                <div className=" mx-12 flex gap-5"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P_med_page;
