'use client'
import React from 'react'
import Image from 'next/image'
import{AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link'
import{AiOutlineClose} from 'react-icons/ai'

export default function Navbar() {

  const[menuopen,setMenuopen]=useState(false)
const handleNav =()=> {
  setMenuopen(!menuopen)
}
  return (
    <div>
        <nav className='fixed w-full h-24 shadow-xl bg-[#c1d1d8]'>
<div className = 'flex justify-between items-center h-full w-full px-4 2xl:px-16'>
<Link href="/">
<Image src="/logo.jpg"
alt="logo"
width="98"
height="98"
className="cursor-pointer left-[-5]"
priority
/>
</Link>
<div className='hidden sm:flex'>
<ul className='hidden sm:flex'>
<Link href="/">  
<li className='ml-10 uppercase hover:boder-b text-xl'>Home</li>
</Link>
<Link href="/about">
<li className='ml-10 uppercase hover:blue text-xl'>About</li>
</Link>
<Link href="/view_profile">
<li className='ml-10 uppercase hover:boder-b text-xl'>View Profile</li>
</Link>
<Link href="/sing_in">
<li className='ml-10 uppercase hover:boder-b text-xl'>Sing in</li>
</Link>
<Link href="/sing_up">
<li className='ml-10 uppercase hover:boder-b text-xl'>Sing up</li>
</Link>
</ul>
</div>


<div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'>
  <AiOutlineMenu size={25}/>
</div>
</div>
<div className={
  menuopen
  ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen  bg-[#ecf0f3] p-10 ease-in duration-500"
  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
}>
  <div className='flex w-full items-center justify-end'>
  <div onClick={handleNav} className=' cursor-pointer  '>
  <AiOutlineClose size={25}/>
</div>
  </div>
   <div className='flex-col pt-6 pb-4'>
    <ul>
      <Link href="/">
        <li
        onClick={()=> setMenuopen(false)}
        className='py-4 cursor-pointer'>
          Home
        </li>
      </Link>
      <Link href="/about">
        <li
        onClick={()=> setMenuopen(false)}
        className='py-4 cursor-pointer'>
          About
        </li>
      </Link>
      <Link href="/view_profile">
        <li
        onClick={()=> setMenuopen(false)}
        className='py-4 cursor-pointer'>
          View Profile
        </li>
      </Link>
 </ul>  
</div>
<footer className="bg-white h-20 w-[98%] flex items-center justify-left">
<Image src="/logo.jpg"
alt="logo"
width="50"
height="50"
className="cursor-pointer "
priority
/>

    </footer>
</div>
        </nav>
      
    </div>
  )
}
