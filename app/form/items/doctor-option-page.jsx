"use client";
import React from 'react'
import Image from 'next/image';
import doctor_page from '../doctor_page/doctor_pg.png';
import logo from '../sign_up_choose/logo.png';
//import medicineimg from '../doctor_option_page/medicne.png'
//import medreport from '../doctor_option_page/Reports.png'
//import { useRouter } from "next/navigation";
import { useFormStateF } from "@/app/form/items/FormContextF";
function Doctoroption() {
  const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext} = useFormStateF();
 // const router = useRouter(); 
  async function handlereport(e) {
    e.preventDefault();
   // const email = email;

    try {
      const  response = await fetch("http://localhost:8070/doctor/docresendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email as an object
      });
      const data = await  response.json()
      setForm( data);
      console.log('Form data:', data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
    forward();
  }

  function forward (){

    onHandleNext();
  }

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
            <Image className=' mx-3 ' src="/logo.png" alt="logo" />
        </div>
        <div class=" p-8  flex-col  relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
        <div className='flex-col'>
          <h1 className='font-bold p-6 text-center text-3xl opacity-90'>
            Welcome to <span className='text-[#0F0677]'>Mr. Nuwan’s</span> Page
          </h1>
        </div>
            <div className=' bg-slate-200 rounded-xl p-8 relative mx-5 text-xl m-6 shadow-lg'>
            <div className=' flex items-center gap-5 justify-center '>
                <div className=' bg-slate-500 rounded-lg items-center justify-center'>
                  <div className=' items-center justify-center'>
                    <Image className='m-11' src="/Reports.png"alt="medreport" />
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <button onClick={handlereport} type='submit'className= ' m-3 py-1 px-8 text-blue-900 bg-slate-300 shadow-2xl rounded-xl font-semibold'>View Reports</button>
                  </div>
                </div>
                <div className=' bg-slate-500 rounded-lg'>
                  <div>
                    <Image className=' m-11 ' src="/medicne.png" alt="medicineimg" />
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <button type='submit'className= ' m-3 py-1 px-8 text-blue-900 bg-slate-300 shadow-2xl rounded-xl font-semibold'>Add Medicine</button>
                  </div>
                </div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Doctoroption