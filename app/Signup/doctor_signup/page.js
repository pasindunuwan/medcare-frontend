//"use client";
import React from "react";
import Link from "next/link";
import SentemailAddress from "@/app/components/Otp/Doctor/SentemailAddress";
import GetDetailsD from "@/app/components/Otp/Doctor/getDetailsD";
import Verifiedotp from "@/app/components/Otp/Doctor/verifiedotp";
import Getotp from "@/app/components/Otp/Doctor/getotp";
import { useFormStateD } from "@/app/components/Otp/Doctor/FormContextD";
//import { useFormStateD } from "@/app/components/Otp/Doctor/FormContextD";

function ActiveStepFormComponent() {
  const { step, formData } = useFormStateD();
  switch (step) {
    case 0:
      return <GetDetailsD />;
    case 1:
      return <SentemailAddress />;
    case 2:
      return <Getotp />;
    case 3:
      return <Verifiedotp />;
    default:
      return null;
  }
}

export default function SignUp() {
  return (
    <div>
      <ActiveStepFormComponent />
    </div>
  );
}
