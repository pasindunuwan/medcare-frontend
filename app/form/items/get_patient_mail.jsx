"use client"

// Doctor's frontend
import { useState } from "react";

import Image from 'next/image';
//import logo from '/public/logo.png';
//import doctor_page from '/public/doctor_pg.png';
import { useFormStateF } from "@/app/form/items/FormContextF";

export default function Get_patient_mail() {
  const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext,email, setEmail } = useFormStateF();
  // state variables for form inputs
  
  // state variable for form submission status
  const [status, setStatus] = useState("");

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default browser behavior

    // validate form inputs
    if (!email) {
        alert("Please fill all the fields");
        return;
      }
      
    setStatus("Submitting..."); // set status to indicate loading
    
    try {

     
        
        console.log(email, "mail ek awooo");
      
          const response = await fetch("http://localhost:3001/doctor/docreg", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }), // Send the email as an object
          });

      // if successful, set status to success message
      if (response.ok) {
        setStatus("OTP sent successful! 😊");
        console.log("mail address send successfull");
        onHandleNext();
      }
      else {
        console.log("mail address send failed");
      }
    } catch (error) {
      // if error, set status to error message
      console.error("An error occurred:", error);
      setStatus(error || "OTP failed! 😔 check username and try again");
    }
  };
  

  return (
    <div className=' relative justify-center h-screen items-center w-full min-h-screen flex bg-slate-500'>
        <Image
        className="absolute bg-cover bg-center  sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src="/doctor_pg.png"
        layout="fill"
        quality={100}
        priority
      /> 
        <div className=" absolute top-2 left-0 opacity-80 cursor-pointer">
            <Image className=' mx-3 ' src="/logo.png" alt="logo" />
        </div>
        <div class=" p-5  flex-col  relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
          <h1 className=' font-bold p-6 text-center text-3xl opacity-90'> Welcome to MedCare <br/> Doctors’ page</h1>
          <form  method="post"onSubmit={handleSubmit} >
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter patient username:
            </label>
            <input
              id="email"
              placeholder = "someone123@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
            />
          </div>
          
          <div className="mb-4 flex items-center justify-center">
            <button
              type="submit"
              className="w-2/5 h-10 mt-4 bg-[#41A1F0] text-white font-medium py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             onClick={handleSubmit}>
              Send OTP
            </button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-500">
          {status}
        </div>
        </div>
    </div>
  )
  
}