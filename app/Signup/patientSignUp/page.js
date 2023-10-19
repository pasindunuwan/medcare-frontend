"use client";

import SentemailAddress from "@/app/components/Otp/Patiend/SentemailAddress";
import GetDetailsPatient from "@/app/components/Otp/Patiend/getDetailsPa";
import Verifiedotp from "@/app/components/Otp/Patiend/verifiedotp";
import Getotp from "@/app/components/Otp/Patiend/getotp";
import { useFormStatePa } from "@/app/components/Otp/Patiend/FormContextPa";
//import { useFormState } from "@/app/components/(Otp)/FormContext";

function ActiveStepFormComponent() {
  const { step } = useFormStatePa();
  switch (step) {
    case 0:
      return <GetDetailsPatient />;
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
