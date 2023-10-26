"use client";
import React from "react";
import P_med_page from "@/app/utility/p_med_page";
import { useState } from "react";
import Image from "next/image";
export default function page() {
  const [forms, setForms] = useState([]);
  const handleSubmitAll = () => {
    console.log(forms);
    // Assuming you have a function to send data to the backend
    // sendFormDataToBackend(forms);
  };
  const handleFormSubmit = (formData) => {
    setForms([...forms, formData]);
  };

  return (
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
      <div>
        <h1>Dynamic Form Example</h1>
        {forms.map((form, index) => (
          <div key={index}>
            <p>Form {index + 1} Data:</p>
            <pre>{JSON.stringify(form, null, 2)}</pre>
          </div>
        ))}
        <P_med_page onSubmit={handleFormSubmit} />
        <div>
          <button
            className=" mt-8 py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
            onClick={() => setForms([...forms, {}])}
          >
            Add New Form
          </button>
          <button
            className=" mt-8 py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
            onClick={handleSubmitAll}
          >
            Submit All Forms
          </button>
        </div>
      </div>
    </div>
  );
}
