"use client"

// pharmacy frontend
import React, {useState} from 'react'
import Image from 'next/image';
import docsign from '/public/signup.png';
import axios from "axios";
import logo from "/public/logo.png";
import { ClipLoader } from "react-spinners";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function RegistrationForm() {
  // state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [locatedTown, setLocatedTown] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // state variable for form submission status
  const [status, setStatus] = useState("");

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default browser behavior
    setLoading(true);
    // validate form inputs
    if (!name || !email || !phone || !registrationNo || !locatedTown || !password || !repassword) {
        alert("Please fill all the fields");
        return;
      }
      if (password !== repassword) {
        alert("Passwords do not match");
        return;
      }

    setStatus("Submitting..."); // set status to indicate loading
    try {
      // send a post request to the backend with form data
      const response = await axios.post("http://localhost:3000/api/registerPharmacy", {
        name,
        email,
        phone,
        registrationNo,
        locatedTown,
        password,
        repassword,
      });
      // if successful, set status to success message
      if (response.status === 201) {
        setStatus("Registration successful!");
      }else if (response.status === 400) { // User already exists
        setStatus("User already exists");
      }
    } catch (error) {
      // if error, set status to error message
      setStatus(error.response.data.message || "Registration failed!");
    }

    // Simulate a form submission 
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000); // Clear success message after 3 seconds
    }, 2000); // Simulated delay
  };


  return (
    <div>
        <div className='h-screen w-full relative py-24 text-black'>
          <div>
            <Image
            className="absolute bg-cover bg-center  sm:h-48 w-full h-auto"
            alt="doctor sign"
            src={docsign}
            layout="fill"
            quality={100}
            priority
            />
          </div>
            <div className="absolute top-2 left-0 cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
            <div className=' container mx-auto opacity-80'>
                
                <div className=' flex w-8/12 bg-white mx-auto overflow-hidden '>
                  <div className=' w-1/2 flex flex-col justify-center' >
                    
                    <h2 className='mb-8 mr-2-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>Registration <br/> for <br/> Pharmacy</h2>
                    <dev className=' mr-5 text-lg md:xl lg:2xl'>
                      <p>When you can, Always laugh.“ It’s a low-cost drug. “</p>
                    </dev>
                  </div>
                  <div className=' w-1/2  bg-black text-white py-8 px-8'>
                  <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-white-700">
                Pharmacy Name:
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 
              rounded-md shadow-sm py-2 px-3 focus:outline-none 
              focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
              text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-white-700">
                Email(Username):
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-white-700">
                Contact No:
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 
              rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="registrationNo" className="block text-sm font-medium text-white-700">
                Pharmacy Registration No:
              </label>
              <input
                id="registrationNo"
                type="text"
                value={registrationNo}
                onChange={(e) => setRegistrationNo(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="locatedTown" className="block text-sm font-medium text-white-700">
                Located Town:
              </label>
              <input
                id="locatedTown"
                type="text"
                value={locatedTown}
                onChange={(e) => setLocatedTown(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-white-700">
                Password:
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md 
              shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
              focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="repassword" className="block text-sm font-medium text-white-700">
                Re-Enter Password:
              </label>
              <input
                id="repassword"
                type="password"
                value={repassword}
                onChange={(e) => setRepassword(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md
                        shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 
                        focus:border-indigo-500 sm:text-sm text-black"
              />
            </div>
            <div className="mb-4 flex items-center justify-center">
              <button
                type="submit"
                className={`w-4/5 h-10 mt-4 bg-[#41A1F0] text-white font-medium py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  status === "Submitting..." ? "cursor-not-allowed" : ""
                }`}
                disabled={status === "Submitting..."}
              >
                              {status === "Submitting..." ? (
                  <ClipLoader size={30} color={"#fff"} loading={true} />
                ) : status === "Registration successful!" ? (
                  <>
                    <AiOutlineCheckCircle className="inline-block mr-2" />
                    
                  </>
                ) : (
                  "Confirm"
                )}
              </button>
            </div>
          </form>
                      {status === "Registration successful!" && (
                        <div className="text-center text-sm text-green-500">
                          <AiOutlineCheckCircle className="inline-block mr-2 text-lg" />
                          Registration Successful
                        </div>
                      ) }

                      {status === "User already exists" && (
                        <div className="text-center text-sm text-red-500">
                          User already exists
                        </div>
                      )}
                  </div>
                </div>
            </div>           
       </div>
       
    </div>
  )
}