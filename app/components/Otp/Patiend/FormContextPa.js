"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextPa = createContext({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0, //default value of hook

});
function FormProviderPa({ children }) {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(0);
  
  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    //rap by usig the hook
    <FormContextPa.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextPa.Provider>
  );
}
function useFormStatePa() {
  return useContext(FormContextPa); //custom hook
}

export { FormProviderPa, useFormStatePa }; //export multiple function
