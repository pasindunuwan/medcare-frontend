import React from 'react'
import Image from 'next/image';
import about_bk_img from '../about/about us.png'



export default function about() {
  return (
    <div>
      <div>
        <div >
          <Image
                className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
                alt="about image"
                src={about_bk_img}
                layout="fill"
                quality={100}
                priority
                />
          </div>
        <div>
          <div className=' opacity-95 mx-5 my-16 text-4xl font-extrabold'>
            <h1>About Us ...</h1>
        </div>
          <div>
            <h1 className='opacity-95 text-2xl font-semibold mx-10'>Vision</h1>
            <div className='opacity-95 text-xl m-5 mx-10 mr-96'>Empowering Healthcare Excellence through <br/> Seamless e-Prescription and Report Management</div>
          
          </div>
          <div>
            <h1 className='opacity-95 text-2xl font-semibold mx-10'>Mission</h1>
            <div className='opacity-95 text-xl m-5 mx-10 mr-96'>Our mission is to provide a user-friendly  <br/> and comprehensive medical report management <br/> website that simplifies the storage, retrieval, <br/> and sharing of patient medical records, ensuring efficiency, <br/> accuracy, and security throughout the <br/> healthcare ecosystem.</div>
          </div>
          <div>
            <h1 className='opacity-95 text-2xl font-semibold mx-10'>Our Values</h1>
            <div className='opacity-95 text-xl m-5 mx-10 mr-96'>We are dedicated to transparency, patient 
empowerment, <br/> ethical data handling, and continuous 
learning, prioritizing  <br/>user-centered design to make a 
positive societal impact in healthcare <br/> while fostering 
diversity, security, and accountability.</div>
          </div>
        </div>
      </div>

    </div>
  );
}
