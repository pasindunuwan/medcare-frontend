import React from 'react'
import Image from 'next/image';
import logo from '../sign_up_choose/logo.png';
import docsign from '../doctor_signup/signup.png';
import docform from './signup_form.png';

function page() {
  return (
    <div>
        <div className='h-screen w-full relative py-36 text-black'>
          <div>
            <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src={docsign}
            layout="fill"
            quality={100}
            priority
            />
          </div>
            <div className="absolute top-3 left-0 cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
            <div className=' container mx-auto opacity-80'>
                <div className=' flex w-8/12 bg-white mx-auto overflow-hidden '>
                  <div className=' w-1/2 flex flex-col justify-center' >
                    
                    <h2 className='mb-8 mr-2-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>Registration <br/> for <br/>Doctors</h2>
                    <dev className=' mr-5 text-lg md:xl lg:2xl'>
                      <p>Join to <b className=' text-blue-700'>MedCare</b> to easily manage your patients</p>
                    </dev>
                  </div>
                  <div className=' w-1/2  bg-black text-white py-8 px-8'>
                    <form action='#'>
                      <lable>Full Name</lable>
                      <input type='text' className=' text-black mt-2 mb-2 border w-full'></input>
                      <lable>Email</lable>
                      <input type='email' class=' text-black mt-2 mb-2 border w-full'></input>
                      <lable>Contact No</lable>
                      <input type='tel' class=' text-black mt-2 mb-2 border w-full'></input>
                      <lable>SLMC No</lable>
                      <input type='number' class=' text-black mt-2 mb-2 border w-full'></input>
                      <lable>Password</lable>
                      <input type='password' class=' text-black mt-2 mb-2 border w-full'></input>
                      <lable>Re-Enter Passsword</lable>
                      <input type='password' class=' text-black mt-2 mb-2 border w-full'></input>
                      <dev className='items-center justify-center flex gap-7'>
                        <button type='submit' className= ' mt-5 py-1 px-10 text-white bg-slate-800 rounded-xl font-bold'>Confirm</button>
                      </dev>
                    </form>
                  </div>
                </div>
            </div>           
       </div>
       
    </div>
  )
}

export default page