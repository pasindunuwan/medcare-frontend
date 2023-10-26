"use client";
import { createContext, useContext, useState } from "react";
//create contexthook
const FormContextF = createContext({
  
});
function FormProviderF({ children }) {
    const [copiedArray, setCopiedArray] = useState([]);
    const [Step, setStep] = useState(0);
  const [Form, setForm] = useState([])
  const [Data, setData]=useState({});
  
  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    //rap by usig the hook
    <FormContextF.Provider
      value={{Form, setForm,Data, setData,copiedArray, setCopiedArray,onHandleBack, onHandleNext, Step  }} //what are the value pass the using context hook
    >
      {children}
    </FormContextF.Provider>
  );
}
function useFormStateF() {
  return useContext(FormContextF); //custom hook
}

export { FormProviderF, useFormStateF }; //export multiple function
