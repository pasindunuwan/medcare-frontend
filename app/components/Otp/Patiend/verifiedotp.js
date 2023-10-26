"use client";
import React from "react";

import { useFormStatePa } from "@/app/components/Otp/Patiend/FormContextPa";

import { useRouter } from "next/navigation";

export default function Verifiedotp() {
  // const { formData } = useFormState();
  const router = useRouter();

  const { onHandleBack, onHandleNext, setFormData, FormData } =
    useFormStatePa();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">OTP Verified</h1>
      <p className="text-gray-500 text-center">
        Your email has been verified successfully
      </p>

      <a
        href="/sign-in"
        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
      >
        Continue
      </a>
    </div>
  );
}
