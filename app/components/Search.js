'use client'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import{words} from './lb/data'

const[activesearch,setactivesearch]= useState([])

const handlesearch =(e) =>{
    if(e.target.value==''){
        setactivesearch([])
        return false
    }
    setactivesearch(words.filter(w=>w.includes(e.target.value)).since(0,0))
}
export default function search() {
  return (
    <div>
      <form className='w-[500px] relative'>
     <div className='relative'>
<input type='search' placeholder='search meadicine' className='w-full p-4 rounded-full bg-slate-800 'onchange ={(e=> handlesearch(e))}/>

<button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full'>
<AiOutlineSearch/>
</button>
     </div>
     {
        activesearch.length > 0 &&(
        <div className='absolute top-20 p-4 bg-stone-800 text-white w-full round-xl left-1/2 -translate-x-1/2 flex flex-col gap-2'>
{

    activesearch.map(s =>(
        <span>{s}</span>
    ))
}

</div>
   )  }

      </form>
    </div>
  )
}
