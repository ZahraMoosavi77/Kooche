'use client'
import { NewContext } from "@/context/NewContext"
import { useContext, useEffect } from "react"
import TextError from "./TextError";
import TextHelper from './TextHelper'
import { TEXTHELPER } from '@/constants/constantNewPage'
import { REGex } from "@/constants/constantNewPage";
import { useForm } from "react-hook-form";
export default function TextField({ type, label, name, errormessage, helpText, value, validate ,register,errors}) {
  const { onChange, values, setIsValidPhoneNumber } = useContext(NewContext);
  const { phonenumber } = values;
  useEffect(()=>{
    if (name === "phonenumber") {
      const result = REGex.test(phonenumber);
      if (!result && !phonenumber.trim()) setIsValidPhoneNumber(false);
      if (result && phonenumber.trim()) setIsValidPhoneNumber(true);
    }
  },[])
   {/* {!validate ? <TextError text={errormessage} /> : ''} */}

  return (
    <>
      <label htmlFor={name}>{label} </label>
      <input {...register(name, {required:errormessage})} id={name} type={type}   name={name} className={` ${errors.name?.type === "required" ? 'bg-accent-error' :'bg-gray-200' }  text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`}  />
      {/* <input {...register(name,{required:errormessage})} id={name} type={type}   name={name} className={` ${validate ? 'bg-gray-200' : 'bg-accent-error'}  text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`} /> */}
      {errors.name?.type === "required" && (
        <TextError text={errormessage} />
      )}
      {/* {helpText && <TextHelper specialClass={'pr-3'} text={TEXTHELPER} />} */}
    </>


  )
}
