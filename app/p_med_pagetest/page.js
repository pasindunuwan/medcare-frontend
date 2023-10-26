import React from 'react'
import Image from "next/image";
import docsign from "./signup.png";

function page() {
  return (
    <div>
        <div className='h-screen w-full relative py-24 text-black'>
            <div className=''>
                <Image
                className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
                alt="doctor sign"
                src={docsign}
                layout="fill"
                quality={100}
                priority
            />
            </div>
            <div className=' pt-72 flex justify-center items-center'>
                <div className=' border-blue-400 p-16 absolute border bg-slate-300'>
                    <form className=''>
                        <div>
                            <input type="date" className=" mt-5 mb-5 border"></input>
                        </div>
                        <div>
                            <lable>Medicine Name  :</lable>
                            <input type="text" className=" mx-1 w-64 mt-3 mb-3 border" placeholder='Osatil 10 mg'></input>
                        </div>
                        <div>
                            <lable>Brand Name  :</lable>
                            <input type="text" className=" mx-7 w-64 mt-2 mb-2 border "></input>
                        </div>
                        <div>
                            <lable>Quantity :</lable>
                            <input type="number" className="w-64 m-14 mt-3 border "></input>
                        </div>
                        <div>
                            <lable className=' text-xl'>Taking Method</lable>
                            <div className='p-5 gap-8 flex'>
                                <div className=' '>
                                    <input type='checkbox' className=' w-4 h-4'></input>
                                    <lable> Before Meal</lable>
                                </div>
                                <div>
                                    <input type='checkbox' className=' w-4 h-4'></input>
                                    <lable> After Meal</lable>
                                </div>
                            </div>
                            <div className='p-5 gap-8 flex'>
                                <div className=' '>
                                    <input type='checkbox'className=' w-4 h-4'></input>
                                    <lable> Morning</lable>
                                </div>
                                <div>
                                    <input type='checkbox'className=' w-4 h-4'></input>
                                    <lable> Afternoon</lable>
                                </div>
                                <div className=' '>
                                    <input type='checkbox' className=' w-4 h-4'></input>
                                    <lable> Evening</lable>
                                </div>
                            </div>
                            <div>
                                    <input type='text' placeholder='Inscructions' className='h-20 w-96 px-6 text-lg border-2 border-black border-opacity-50 outline-none focus:border-blue-500 transition duration-200'></input>
                            </div>
                            <div className=" mx-12 flex gap-5">
                                <button type="submit" className=" mt-8 py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold">Add</button>
                                <button type="submit" className=" mt-8 py-1 px-12 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}

export default page