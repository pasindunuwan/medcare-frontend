import { useState, useEffect } from "react";

export default function CountdownTimer(props) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  const { handleResend } = props;

  useEffect(() => {
    let interval;

    if (minutes === 0 && seconds === 0) {
      // Timer is up, do something or stop the countdown
      // For example, you can show a message, trigger an action, etc.
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, handleResend]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <div>
          <button
           className=" mt-5 py-1 px-10 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleResend}
          >
            Resend code
          </button>
        </div>
      ) : (
        <p>{`You can request a new code in ${minutes}:${seconds
          .toString()
          .padStart(2, "0")}`}</p>
      )}
    </div>
  );
}
