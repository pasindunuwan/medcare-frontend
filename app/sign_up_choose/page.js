import React from 'react';
import Image from 'next/image';
import s_u_c_bg from '../sign_up_choose/suc_bg.png';
import logo from '../sign_up_choose/logo.png';


function Page() {
  return (
    <div className="h-screen w-full relative  bg-slate-500">
      <Image
        className="absolute bg-cover bg-center h-screen w-full sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src={s_u_c_bg}
        layout="fill"
        quality={100}
        priority
      /> 
      <div className="p-9 opacity-80 cursor-pointer">
        <Image src={logo} alt="logo" />
      </div>

      <div className='mx-2 p-10 m-10 pt-10'>
        <h2 className=' lg:text-5xl md:text-4xl text-4xl font-bold opacity-80'>WELCOME TO <div className='text-[#0F0677] my-6'>MED CARE</div></h2>
      </div>

      <div className=' my-16 flex flex-col md:flex-row items-center gap-10 mx-10 cursor-pointer'>
        <div className=' w-[354px] h-[200px] px-5 py-8 rounded-lg border border-primary bg-slate-400 opacity-90 font-extrabold text-center'> 
          <h1 className=' text-center lg:text-2xl '>Doctor  </h1>
        </div>
        <div className=' w-[354px] h-[200px] px-5 py-8 rounded-lg border border-primary bg-slate-400 opacity-90 font-extrabold text-center'>
          <h1  className=' text-center lg:text-2xl '>Pharmacy</h1>
        </div>
        <div className=' w-[354px] h-[200px] px-5 py-8 rounded-lg border border-primary bg-slate-400 opacity-90 font-extrabold text-center'>
          <h1 className=' text-center lg:text-2xl '>Patient </h1>
        </div>
      </div>
    </div>
  );
}

export default Page;