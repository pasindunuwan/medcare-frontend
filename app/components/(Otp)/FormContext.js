"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContext = createContext({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0, //default value of hook

});
function FormProvider({ children }) {
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
    <FormContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }} //what are the value pass the using context hook
    >
      {children}
    </FormContext.Provider>
  );
}
function useFormState() {
  return useContext(FormContext); //custom hook
}

export { FormProvider, useFormState }; //export multiple function
