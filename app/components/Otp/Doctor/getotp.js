"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useFormStateD } from "@/app/components/Otp/Doctor/FormContextD";

//import { useFormStateD } from "@/app/components/Otp/Doctor/FormContextD";

import OtpCountdownTimer from "./otpcountdown";

export default function Getotp() {
  const { onHandleNext, onHandleBack, FormData, Step } = useFormStateD();
  const [otp, setotp] = useState(["", "", "", ""]); // Assuming a 4-digit OTP
  const [otpError, setotpError] = useState(null);
  console.log(Step, "wad ");
  console.log(FormData.email, "wad ");
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(FormData.email);
    const Otp = otp.join("");
    console.log("OTP:", Otp);

    const userData = {
      ...FormData,
      Otp,
    };

    try {
      const response = await fetch("http://localhost:8070/doctor/Docverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send the otp as an object
      });

      if (response.ok) {
        console.log("OTP verified successfully");
        onHandleNext();
      } else {
        console.log("OTP verification failed");
        setotpError("OTP verification failed");
        setotp(new Array(otp.length).fill(""));
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  //handel resend
  async function handleResend(e) {
    e.preventDefault();
    const email = FormData.email;

    try {
      const response = await fetch("http://localhost:8070/doctor/docresendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email as an object
      });

      if (response.ok) {
        console.log("OTP Resend successfull");
      } else {
        console.log("OTP Resend Request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  //handle onchage input

  function handleInputChange(index, value) {
    if (value.length === 1 && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput.focus();
    } else if (value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput.focus();
    }

    if (value.length > 1) return;

    const updatedValues = [...otp];
    updatedValues[index] = value;
    setotp(updatedValues);
  }

  return (
    <div>
      <p>Enter OTP</p>
      <form onSubmit={handleSubmit}>
        {otp.map((value, index) => (
          <input
            key={index}
            type="number"
            id={`otp-input-${index}`}
            value={value}
            autoFocus={index === 0 ? true : false}
            min={0}
            max={9}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
        {otpError && (
          <div className="flex flex-row text-sm font-medium text-red-600">
            <p>This code is incorrect</p>
          </div>
        )}
        <div>
          <button
            className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
            type="submit"
            onClick={handleSubmit}
          >
            send otp
          </button>
        </div>

        <OtpCountdownTimer Resend={handleResend} />
      </form>
    </div>
  );
}
