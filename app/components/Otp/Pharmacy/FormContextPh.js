"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextPh = createContext({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0, //default value of hook

});
function FormProviderPh({ children }) {
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
    <FormContextPh.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextPh.Provider>
  );
}
function useFormStatePh() {
  return useContext(FormContextPh); //custom hook
}

export { FormProviderPh, useFormStatePh }; //export multiple function
