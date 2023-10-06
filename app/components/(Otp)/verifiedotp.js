"use client";
import React from "react";
import { useFormState } from "@/app/components/(Otp)/FormContext";
const { onHandleBack, onHandleNext, setFormData, formData } = useFormState();
import { useRouter } from "next/navigation";

export default function verifiedotp() {
 // const { formData } = useFormState();
  const router = useRouter();

  

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">OTP Verified</h1>
      <p className="text-gray-500 text-center">
        Your email has been verified successfully
      </p>

      <Link href="/sign-in"
        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
        
      >
        Continue
      </Link>
    </div>
  );
}
