"use client"

// Doctor's frontend
import { useState } from "react";
import axios from "axios";
import Image from 'next/image';
import logo from '/public/logo.png';
import doctor_page from '/public/doctor_pg.png';


export default function RegistrationForm() {
  // state variables for form inputs
  const [email, setEmail] = useState("");

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
      // send a post request to the backend with form data
      const response = await axios.post("http://localhost:3000/api/doctorOTP", {
        email,
      });
      // if successful, set status to success message
      if (response.status === 201) {
        setStatus("OTP sent successful! 😊");
      }
    } catch (error) {
      // if error, set status to error message
      setStatus(error.response.data.message || "OTP failed! 😔 check username and try again");
    }
  };
  

  return (
    <div className=' relative justify-center h-screen items-center w-full min-h-screen flex bg-slate-500'>
        <Image
        className="absolute bg-cover bg-center  sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src={doctor_page}
        layout="fill"
        quality={100}
        priority
      /> 
        <div className=" absolute top-2 left-0 opacity-80 cursor-pointer">
            <Image className=' mx-3 ' src={logo} alt="logo" />
        </div>
        <div class=" p-5  flex-col  relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
          <h1 className=' font-bold p-6 text-center text-3xl opacity-90'> Welcome to MedCare <br/> Doctors’ page</h1>
          <form onSubmit={handleSubmit}>
          
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
             >
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