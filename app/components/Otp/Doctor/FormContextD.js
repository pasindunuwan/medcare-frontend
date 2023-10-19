"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextD = createContext({
  formData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0, //default value of hook
});
function FormProviderD({ children }) {
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
    <FormContextD.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextD.Provider>
  );
}
function useFormStateD() {
  return useContext(FormContextD); //custom hook
}

export { FormProviderD, useFormStateD }; //export multiple function
