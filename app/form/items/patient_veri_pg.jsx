import React from "react";
import Image from "next/image";
import doctor_page from "../doctor_page/doctor_pg.png";
import logo from "../sign_up_choose/logo.png";
import { useFormStateF } from "@/app/form/items/FormContextF";
function Patient_veri_pg() {
    const { Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleNext,email, setEmail } = useFormStateF();
    const [otp, setotp] = useState(["", "", "", ""]); // Assuming a 4-digit OTP
    const [otpError, setotpError] = useState(false);
    console.log(Step, "wad ");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        const Otp = otp.join("");
        console.log("OTP:", Otp);
    
      
        try {
          const response = await fetch("http://localhost:8070/doctor/Docverify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Otp), // Send the otp as an object
          });
    
          if (response.ok) {
            console.log("OTP verified successfully");
            onHandleNext();
          } else {
            console.log("OTP verification failed");
            setotpError(true);
            setotp(new Array(otp.length).fill(""));
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }

      async function handleResend(e) {
        e.preventDefault();
        
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
    <div className="relative justify-center h-screen items-center w-full min-h-screen flex bg-slate-500">
      <Image
        className="absolute bg-cover bg-center sm:h-48 w-full h-auto opacity-60"
        alt="Mountains"
        src={doctor_page}
        layout="fill"
        quality={100}
        priority
      />
      <div className=" absolute top-2 left-0 opacity-80 cursor-pointer">
        <Image className=" mx-3 " src={logo} alt="logo" />
      </div>
      <div class=" p-5  flex-col relative rounded-xl bg-white mx-10 bg-cover bg-image items-center max-w-screen-lg overflow-hidden shadow-xl text-black w-full md:flex-row justify-center">
        <h1 className=" p-6 text-center text-3xl opacity-90 font-bold">
          {" "}
          Welcome to MedCare <br /> Doctors’ page
        </h1>

        <div className=" bg-slate-300 rounded-xl p-8 relative mx-5 text-xl m-6 shadow-lg">
          <h1 className="p-3 text-center font-light">
            Enter 4 digit verification code sent to your number{" "}
          </h1>
          <div className=" flex flex-row m-auto my-6 gap-6 justify-center">
            
          <form onSubmit={handleSubmit}>
          {otp.map((value, index) => (
          <input
            key={index}
            type="number"
            className=" border-2 border-black w-12 h-12 text-xl rounded-xl "
            id={`otp-input-${index}`}
            value={value}
            autoFocus={index === 0 ? true : false}
            min={0}
            max={9}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))} 
        
        <button
              type="submit"
              className=" mt-5 py-1 px-10 text-blue-900 bg-slate-400 shadow-2xl rounded-xl font-bold"
            >
              Submit
            </button>
            
            {otpError && (
          <div className="flex flex-row text-sm font-medium text-red-600">
            <p>This code is incorrect</p>
          </div>
        )}
         <div className=" items-center justify-center flex gap-7">
          <OtpCountdownTimer Resend={handleResend} />
          </div>
          
         
          </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patient_veri_pg;
