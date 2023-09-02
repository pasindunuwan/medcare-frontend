import React from 'react'
import Image from 'next/image';
import logo from '../sign_up_choose/logo.png';
import docsign from '../doctor_signup/signup.png';

function page() {
  return (
    <div>
        <div className='h-screen w-full relative'>
            <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto opacity-60"
            alt="doctor sign"
            src={docsign}
            layout="fill"
            quality={100}
            priority
      />
            <div className="absolute top-2 left-0 opacity-80 cursor-pointer">
        <Image src={logo} alt="logo" />
      </div>
       </div>
    </div>
  )
}

export default page


