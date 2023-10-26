"use client";
import React from 'react'
import Image from "next/image";
import React, { useState } from 'react';
import { useFormStateF } from "@/app/form/items/FormContextF";
//import { useRouter } from "next/navigation";
import { useRouter } from "next/router";

export default function Reportfolder() {
  const router = useRouter(); 
  const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext } = useFormStateF();
   

    
    
      
    
      const handleCopyArray = (index) => {
        // Copy the inner array at the specified index
       // const innerArray = Form[index];
        //setCopiedArray([...copiedArray, [...innerArray]]);
        setCopiedArray([...copiedArray, [...Form[index]]]);
        next();
      };
    
      function next(){

        onHandleNext();

      }

      return (
        <div>
          <h2>Outer Array</h2>
          {Form.map((innerArray, index) => (
            <div key={index}>
              {/* Display a symbol for each index */}
              <span role="img" aria-label="Symbol" onClick={() => handleCopyArray(index)}>
                📋
              </span>
              {/* Display the inner array */}
              {JSON.stringify(innerArray)}
            </div>
          ))}
    
          <h2>Copied Array</h2>
          {/* Display the copied array */}
          {JSON.stringify(copiedArray)}
        </div>
      );
    }
    

