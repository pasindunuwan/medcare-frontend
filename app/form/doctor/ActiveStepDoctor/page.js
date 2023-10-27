"use client";
import React from 'react'
import { useFormStateF } from "@/app/form/items/FormContextF";
import Showformsd from "@/app/form/doctor/showformsd"
import Showformsfilesd from "@/app/form/doctor/showformsfilesd"
import  Doctoroption  from "@/app/form/items/doctor-option-page";
import  FormD from "@/app/form/items/formd";
import  Get_patient_mail  from "@/app/form/items/get_patient_mail";
import  Patient_veri_pg from "@/app/form/items/patient_veri_pg";
function ActiveStepDoctor() {
    const { Step } =  useFormStateF();
    switch (Step) {
     
      case 0:
        return < Get_patient_mail />;
        case 1:
         
          return < Patient_veri_pg/>;
     
      case 2:
        return < Doctoroption />;
  
      case 3:
        return <Showformsfilesd />;
      case 4:
        return <Showformsd />;
        case 5:
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
  