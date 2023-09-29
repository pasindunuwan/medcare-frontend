import React from 'react'
import Image from 'next/image';
import services1 from '../our_services/services1.png'

function page() {
  return (
    <div>
        <div>
            <h1 className=' text-4xl font-bold text-center my-16'>Our Services</h1>
        </div>

        <div className=' max-w-[1200px] mx-auto py-[50px] grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
            <div className=' shadow-lg p-4 text-center hover:bg-slate-300'>
                <h3 className=' p-4 text-center font-bold'>Electronic Prescription Management</h3>
                <p>Facilitating the electronic creation, transmission, and tracking of prescriptions, reducing paper-based processes and errors</p>
            </div>
            <div className=' shadow-lg p-4 text-center hover:bg-slate-300'>
                <h3 className=' p-4 text-center font-bold'>Medical Report Storage</h3>
                <p>Securely storing and organizing medical reports, test results, and patient records for easy access by authorized healthcare providers</p>
            </div>
            <div className=' shadow-lg p-4 text-center hover:bg-slate-300'>
                <h3 className=' p-4 text-center font-bold'>Mobile Access</h3>
                <p>Providing mobile applications for healthcare providers and patients to access the system from anywhere, improving accessibility</p>
            </div>
            <div className=' shadow-lg p-4 text-center hover:bg-slate-300'>
                <h3 className=' p-4 text-center font-bold'>Electronic Prescription Management</h3>
                <p>Facilitating the electronic creation, transmission, and tracking of prescriptions, reducing paper-based processes and errors</p>
            </div>
            <div className=' shadow-lg p-4 text-center hover:bg-slate-300'>
                <h3 className=' p-4 text-center font-bold'>Drug Availability</h3>
                <p>Providing a mass amount of pharmacy options to choose and check whether your desired place has the exact medicine you want in stoke</p>
            </div>
        </div>
    </div>
  )
}

export default page