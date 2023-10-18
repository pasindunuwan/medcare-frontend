"use client";
import React from "react";
import Link from "next/link";
import SentemailAddress from "@/app/components/(Otp)/SentemailAddress";
import getDetailsD from "@/app/components/(Otp)/getDetailsD";
import verifiedotp from "@/app/components/(Otp)/verifiedotp";
import getotp from "@/app/components/(Otp)/getotp";

import { useFormState } from "@/app/components/(Otp)/FormContext";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 0:
      return <getDetailsD />;
    case 1:
      return <SentemailAddress />;
    case 2:
      return <getotp />;
    case 3:
      return <verifiedotp />;
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
