import React from 'react'
import Image from 'next/image';
import logo from '../sign_up_choose/logo.png';
import verifyone from '../verify_page/verifypng.png';


function page() {
  return (
    <div className='h-screen w-full relative  bg-slate-600'>
        <Image
        className="absolute bg-cover bg-center  sm:h-48 w-full h-auto opacity-60"
        alt="verify"
        src={verifyone}
        layout="fill"
        quality={100}
        priority
      />
      <div className="absolute top-2 left-0 opacity-80 cursor-pointer">
        <Image src={logo} alt="logo" />
      </div>
    <section className=' relative flex items-center justify-center h-screen'>
      <div>
        <div className=' bg-white w-auto mx-10 flex flex-col gap-4 rounded-lg p-4 text-black items-center justify-center'>

            <h1 className='text-center leading-normal font-extrabold text-4xl mb-6'>Enter Your Code</h1>
            <div className=' bg-slate-300 rounded-xl p-8  mx-5 text-xl shadow-lg mb-5'>
              <h1 className='text-center leading-normal font-medium text-lg mb-6'>Please check your email ***01@gmail.com for your account <br/> verification code and enter it below.</h1>
              <div className=' flex flex-rowo my-6 gap-6 justify-center'>
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl  ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl  ' maxLength={1}/>
              </div>
                <h1 className='text-center leading-normal font-light text-sm mb-6'>Note: This can take a few minutes. Retry after 60 seconds</h1>
                <div className=' flex justify-center'>
                  <button type='submit'className= ' mt-7 py-2 px-8 text-blue-900 font-bold bg-slate-400 shadow-2xl rounded-xl'>Resend</button>
                </div> 
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
