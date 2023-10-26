"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextPh = createContext({
  FormData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  Step: 0, //default value of hook
});
function FormProviderPh({ children }) {
  const [FormData, setFormData] = useState({});
  const [Step, setStep] = useState(0);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    //rap by usig the hook
    <FormContextPh.Provider
      value={{ FormData, setFormData, onHandleBack, onHandleNext, Step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextPh.Provider>
  );
}
function useFormStatePh() {
  return useContext(FormContextPh); //custom hook
}

export { FormProviderPh, useFormStatePh }; //export multiple function
