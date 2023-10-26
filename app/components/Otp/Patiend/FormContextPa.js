"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextPa = createContext({
  FormData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  Step: 0,
  //default value of hook
});
function FormProviderPa({ children }) {
  const [FormData, setFormData] = useState({});
  const [Step, setStep] = useState(0);

  function onHandleNext() {
    console.log("ballo");
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    //rap by usig the hook
    <FormContextPa.Provider
      value={{ FormData, setFormData, onHandleBack, onHandleNext, Step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextPa.Provider>
  );
}
function useFormStatePa() {
  return useContext(FormContextPa); //custom hook
}

export { FormProviderPa, useFormStatePa }; //export multiple function
