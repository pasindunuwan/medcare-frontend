import React from 'react'
import Image from "next/image";
import file_prof from "./file_prof.png";
import logo from '/public/logo.png';
import user from '/public/user.jpg';

function page() {
  return (

  
  
    <div style={{margin: '0px', padding: '0px', boxSizing: 'border-box', }}>
      <div style={{backgroundColor: 'lightgray', lineHeight: '50px', padding: '15px',}}>
        <Image className=' mx-3 ' src={logo} alt="logo" />
      </div>

      <div style={{width:'100%', minHeight:'850px' , }}>
        <div style={{width:'25%', minHeight:'850px', backgroundColor: 'lightblue', float:'left', alignItems: 'center'}}>
          <Image className=' p-16' src={user} alt="user" />
          <h1 className=' font-semibold  text-center text-2xl'>Mr. Nuwan Weerasinghe</h1>
          <h1 className=' text-center pt-5'>60yrs</h1>
        </div>
        <div style={{width:'75%', minHeight:'850px', float:'right'}}>
          {/* this section for file upload hansi&pasidu aiya */}
        </div>
      </div>


      
    </div>
 



  )
}

export default page