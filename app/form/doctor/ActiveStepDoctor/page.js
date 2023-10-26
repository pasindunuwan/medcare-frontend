"use client";
import React from 'react'
import { useFormStateF } from "@/app/form/items/FormContextF";
import Showformsd from "@/app/form/doctor/showformsd"
import Showformsfilesd from "@/app/form/doctor/showformsfilesd"
import  Doctoroption  from "@/app/form/items/doctor-option-page";
import  FormD from "@/app/form/items/formd";
function ActiveStepDoctor() {
    const { Step } =  useFormStateF();
    switch (Step) {
      case 0:
        return < Doctoroption />;
  
      case 1:
        return <Showformsfilesd />;
      case 2:
        return <Showformsd />;
        case 2:
          return <  FormD/>;
      default:
        return null;
    }
  }
  
  export default function SignUp() {
    return (
      <div>
        < ActiveStepDoctor />
      </div>
    );
  }
  