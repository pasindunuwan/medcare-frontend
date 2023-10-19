"use client";
import React from "react";
import { useFormStateD } from "@/app/components/Otp/Doctor/FormContextD";

export default function SentemailAddress() {
  const { onHandleNext, onHandleBack, formData } = useFormStateD();
  const Email = formData.email;
  async function sendusername() {
    try {
      const response = await fetch("http://localhost:8070/doctor/docreg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email }), // Send the email as an object
      });

      if (response.ok) {
        onHandleNext();
        console.log("mail address send successfull");
      } else {
        console.log("mail address send failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  sendusername();
}
