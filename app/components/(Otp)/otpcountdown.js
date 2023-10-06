"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function OtpCountdownTimer(props) {
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(59);
  const { Resend } = props;
  useEffect(() => {
    // Exit if the timer reaches 0

    if (minutes === 0 && seconds === 0) {
      return;
    }

    // Update the countdown every second
    const timerId = setInterval(() => {
      if (seconds === 0) {
        // If seconds reach 0, decrement minutes and set seconds to 59
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);
      } else {
        // Otherwise, decrement seconds
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    // Clear the interval when the component unmounts or when the timer reaches 0
    return () => clearInterval(timerId);
  }, [minutes, seconds]);

  const isResendVisible = minutes === 0 && seconds === 0;

  return (
    <div>
      <p>
        Countdown: {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
      <p>{isResendVisible ? <button onClick={Resend}>Resend</button> : null}</p>
    </div>
  );
}
