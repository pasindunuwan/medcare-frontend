import React from 'react'
import Image from 'next/image';
import doctor_page from '../doctor_page/doctor_pg.png';
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
          <div class=" p-5  flex-col relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
            <h1 className=' p-6 text-center text-3xl opacity-90 font-bold'> Welcome to MedCare <br/> Doctors’ page</h1>
            
              <div className=' bg-slate-300 rounded-xl p-8 relative mx-5 text-xl m-6 shadow-lg'>
                <h1 className='p-3 text-center font-light'>Enter 4 digit verification code sent to your number  </h1>
                <div className=' flex flex-row m-auto my-6 gap-6 justify-center'>
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1} />
                <input type='text' className=' border-2 border-black w-12 h-12 text-xl rounded-xl ' maxLength={1}/>
                </div>
                    <h1 className='text-center leading-normal font-light text-sm mb-6'>Note: This can take a few minutes. Retry after 60 seconds</h1>
                    <div className=' items-center justify-center flex gap-7'>
                        <button type='submit'className= ' mt-5 py-1 px-10 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold'>Resend</button>
                        <button type='submit'className= ' mt-5 py-1 px-10 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold'>Submit</button>
                    </div>

              </div>
           
          </div>
      </div>
    )
  }
  
  export default page