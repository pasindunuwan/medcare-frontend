"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextD = createContext({
  FormData: {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  Step: 0,
});
function FormProviderD({ children }) {
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
    <FormContextD.Provider
      value={{ FormData, setFormData, onHandleBack, onHandleNext, Step }} //what are the value pass the using context hook
    >
      {children}
    </FormContextD.Provider>
  );
}
function useFormStateD() {
  return useContext(FormContextD); //custom hook
}

export { FormProviderD, useFormStateD }; //export multiple function
