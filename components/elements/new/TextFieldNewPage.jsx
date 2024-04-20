'use client'
import { NewContext } from "@/context/NewContext"
import { useContext, useEffect } from "react"
import TextError from "./TextError";
import { TEXTHELPER } from '@/constants/constantNewPage'
import { REGex } from "@/constants/constantNewPage";

export default function TextField({ type, label, name, errormessage, helpText, value, validate }) {

  const { onChange, values, setIsValidPhoneNumber } = useContext(NewContext);
  const { phonenumber } = values;
  useEffect(()=>{
    if (name === "phonenumber") {
      const result = REGex.test(phonenumber);
      if (!result && !phonenumber.trim()) setIsValidPhoneNumber(false);
      if (result && phonenumber.trim()) setIsValidPhoneNumber(true);
    }
  },[])
  

  return (
    <>
      <label htmlFor={name}>{label} </label>
      <input id={name} type={type} onChange={onChange} value={value} name={name} className={` ${validate ? 'bg-gray-200' : 'bg-accent-bgerror'}  text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`} />
      {!validate ? <TextError text={errormessage} /> : ''}
      {/* {helpText && <TextHelper specialClass={'pr-3'} text={TEXTHELPER} />} */}
    </>


  )
}
