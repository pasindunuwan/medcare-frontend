import React from 'react'
import Image from 'next/image';
import doctor_page from '../doctor_page/doctor_pg.png';
import logo from '../sign_up_choose/logo.png';

function page() {
  return (
    <div className=' justify-center h-screen items-center w-full min-h-screen flex bg-slate-500'>
        <Image
        className="absolute bg-cover bg-center h-screen w-full sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src={doctor_page}
        layout="fill"
        quality={100}
        priority
      /> 
        <div className=" mx-5 opacity-80 cursor-pointer">
            <Image src={logo} alt="logo" />
        </div>
        <div class=" mx-10 -mx-10 p-10 bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-xl text-gray-600 w-full md:flex-row bg-black"><h1>A tutorial in which you will see how to create a fully responsive login page using Next.js (React), Tailwind CSS and react-iconsdhdhwihcnclkdl</h1></div>
    </div>
  )
}

export default page
