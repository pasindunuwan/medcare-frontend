import React from 'react'
import Image from 'next/image';
import doctor_page from '../add_medcine/medicine.png';
import logo from '../sign_up_choose/logo.png';

function page() {
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
            <div class=" p-5  flex-col relative rounded-xl bg-white mx-5 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
                <h1 className=' text-center text-4xl opacity-90 font-extrabold'>Add Medicine</h1>
                
                <div className=' bg-slate-300 rounded-xl p-8 relative mx-5 text-xl m-6 shadow-lg'>
                <form action='#'>
                      <lable>Drug Name</lable>
                      <input type='text' className=' text-black mt-1 mb-1 border w-full'></input>
                      <lable>Brand Name</lable>
                      <input type='text' className=' text-black mt-1 mb-1 border w-full'></input>
                      <lable>Mfg Date</lable>
                      <input type='date' class=' text-black mt-1 mb-1 border w-full'></input>
                      <lable>Exp Date</lable>
                      <input type='date' class=' text-black mt-1 mb-1 border w-full'></input>
                      <lable>Quantity</lable>
                      <input type='number' class=' text-black mt-1 mb-1 border w-full'></input>
                      <lable>Batch No</lable>
                      <input type='number' class=' text-black mt-1 mb-1 border w-full'></input>

                      <dev className='items-center justify-center flex gap-7'>
                        <button type='submit' className= ' mt-5 py-1 px-10 text-white bg-slate-800 rounded-xl font-bold'>Confirm</button>
                      </dev>
                    </form>
                </div>            
            </div>
    </div>
  )
}

export default page