'use client'
import { useContext, useState } from "react"
import { NewContext } from "@/context/NewPageContext"

export default function TextAreaNewPage({ type,label,name }) {
  const {insertData}= useContext(NewContext);
  const [inputValue, setInputValue] = useState('')
  const handelInput = (e)=>{
    setInputValue(e.target.value);
}


insertData[name] = inputValue;
  return (
    <>
    <label>{label} </label>
    <textarea type={type} onChange={ handelInput} value={inputValue} name={name} className="h-[100px] w-full overflow-hidden resize-none bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] mt-1 focus:bg-white  focus:border focus:border-primary focus:text-primary" ></textarea>


  </>  )
}
