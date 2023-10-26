"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
//import docsign from "./signup.png";
//const [FormData, setFormData] = useState([])
function page() {
  const [FormData, setFormData] = useState([]);

  useEffect(() => {
    const fetchDataFromBackend = () => {
      // Replace 'http://example.com/api/data' with the actual URL of your backend API
      const apiUrl = "http://example.com/api/data";

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((dataFromServer) => {
          // Set the fetched data in the state
          setFormData(dataFromServer);
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching data from backend:", error);
        });
    };
    fetchDataFromBackend;
  }, []);

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
            <div className="">
              {FormData &&
                FormData.map((item, index) => (
                  <div>
                    <div>
                      <lable>Medicine Name :</lable>
                      <p className=" mx-1 w-64 mt-3 mb-3 border">
                        {item.MedicineName}{" "}
                      </p>
                    </div>
                    <div>
                      <lable>Brand Name :</lable>
                      <p className=" mx-7 w-64 mt-2 mb-2 border ">
                        {" "}
                        {item.BrandName}
                      </p>
                    </div>
                    <div>
                      <lable>Quantity :</lable>
                      <p className="w-64 m-14 mt-3 border "> {item.Quantity}</p>
                    </div>
                    <div>
                      <lable className=" text-xl">Taking Method</lable>
                      <div className="p-5 gap-8 flex">
                        <div className=" ">
                          <p className=" w-4 h-4">
                            {" "}
                            {item.TakingMethod.beforeMeal.toString()}
                          </p>
                          <lable> Before Meal</lable>
                        </div>
                        <div>
                          <p className=" w-4 h-4">
                            {" "}
                            {item.TakingMethod.afterMeal.toString()}
                          </p>
                          <lable> After Meal</lable>
                        </div>
                      </div>
                      <div className="p-5 gap-8 flex">
                        <div className=" ">
                          <p className=" w-4 h-4">
                            {" "}
                            {item.TakingMethod.morning.toString()}
                          </p>
                          <lable> Morning</lable>
                        </div>
                        <div>
                          <p className=" w-4 h-4">
                            {item.TakingMethod.afternoon.toString()}
                          </p>
                          <lable> Afternoon</lable>
                        </div>
                        <div className=" ">
                          <p className=" w-4 h-4">
                            {item.TakingMethod.evening.toString()}
                          </p>
                          <lable> Evening</lable>
                        </div>
                      </div>
                      <div>
                        <div className="h-20 w-96 px-6 text-lg border-2 border-black border-opacity-50 outline-none focus:border-blue-500 transition duration-200">
                          <p>{item.Inscructions}</p>
                        </div>
                      </div>
                      <div className=" mx-12 flex gap-5"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
