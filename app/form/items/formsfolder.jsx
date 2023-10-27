"use client";
import React from 'react'
import { useState } from 'react';
import { useFormStateF } from "@/app/form/items/FormContextF";
import { useRouter } from "next/router";

export default function Formsfolder() {
  const router = useRouter(); 
    const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext } = useFormStateF();
    const handleCopyData = (index) => {
        // Copy the inner array at the specified index
       // const setData  =copiedArray[index];
        setData(copiedArray[index]);
        onHandleNext();
      };


  return (
    <div>

{copiedArray .map((items, index) => (
            <div key={index}>
              {/* Display a symbol for each index */}
              <span role="img" aria-label="Symbol" onClick={() => handleCopyData(index)}>
                📋
              </span>
              {/* Display the inner array */}
              {JSON.stringify(items)}
            </div>
          ))}
      
    </div>
  )
}
