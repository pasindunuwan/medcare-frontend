"use client";

import SentemailAddress from "@/app/components/Otp/Pharmacy/SentemailAddress";
import GetDetailsph from "@/app/components/Otp/Pharmacy/getDetailsPh";
import Verifiedotp from "@/app/components/Otp/Pharmacy/verifiedotp";
import Getotp from "@/app/components/Otp/Pharmacy/getotp";
import { useFormStatePh } from "@/app/components/Otp/Pharmacy/FormContextPh";
//import { useFormState } from "@/app/components/(Otp)/FormContext";

function ActiveStepFormComponent() {
  const { Step } = useFormStatePh();
  switch (Step) {
    case 0:
      return <GetDetailsph />;

    case 1:
      return <Getotp />;
    case 2:
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
