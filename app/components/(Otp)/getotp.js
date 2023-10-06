"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useFormState } from "@/app/components/(Otp)/FormContext";

import OtpCountdownTimer from "../app/components/(Otp)/otpcountdown";

const { onHandleNext, onHandleBack, formData } = useFormState();
export default function getotp() {
  const [otp, setotp] = useState(["", "", "", ""]); // Assuming a 4-digit OTP
  const [otpError, setotpError] = useState(null);

  useEffect(() => {
    // Check if all digits are entered
    const isComplete = otp.every((digit) => digit !== "");

    // Perform length validation when the OTP array changes
    if (isComplete) {
      //create the OTP string from the array

      // API call to verify the OTP

      fetchData();
    } else {
      setotpError("fill all input");
      return;
    }
  }, [otp]);

  const fetchData = async () => {
    console.log(formData.email);
    const Otp = otp.join("");
    console.log("OTP:", Otp);


    const userData = {
      ...formData,
      Otp,
    };

    try {
      const response = await fetch("http://localhost:8070/doctor/verify", {
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
  };
  //handel resend
  async function handleResend(e) {
    e.preventDefault();
    const email = formData.email;
    if(formData.user==doctor)
    {

      try {
        const response = await fetch("http://localhost:8070/doctor/resendmail", {
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
   
    elseif(formData.user==patient)
    {

      try {
        const response = await fetch("http://localhost:8070/doctor/resendmail", {
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

    elseif(formData.user==pharmacy)
    {

      try {
        const response = await fetch("http://localhost:8070/doctor/resendmail", {
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
    
  
  }


  
  //handle onchage input

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Handle backspace
    if (e.code === "Backspace") {
      // Clear the current digit
      const newOtp = [...otp];
      newOtp[index] = "";
      setotp(newOtp);

      // Move focus to the previous input
      const prevIndex = index > 0 ? index - 1 : index;
      document.getElementById(`otp-input-${prevIndex}`).focus();
      otpError(null); // Clear any previous errors
      return;
    }

    // Ensure the input is a number and update the corresponding position in the OTP array
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setotp(newOtp);
      otpError(null);
      //  automatically move to the next input field after input, you can uncomment the following lines:
      // const nextIndex = index < otp.length - 1 ? index + 1 : index;
      // document.getElementById(`otp-input-${nextIndex}`).focus();
    } else {
      setotpError("Please enter only numeric values.");
    }
  };

  return (
    <div>
      <label htmlFor="otp-input">Enter OTP:</label>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          id={`otp-input-${index}`}
          value={digit}
          maxLength={1}
          onChange={(e) => handleOtpChange(e, index)}
          onKeyDown={(e) => handleOtpChange(e, index)} // Handle keydown events
        />
      ))}
      {otpError && (
        <div className="flex flex-row text-sm font-medium text-red-600">
          {" "}
          <p>{otpError}</p>
        </div>
      )}
      <OtpCountdownTimer Resend={handleResend} />
    </div>
  );
}
