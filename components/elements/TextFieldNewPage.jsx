'use client'
import { NewContext } from "@/context/NewPageContext"
import { useContext, useState } from "react"
import { InsertData } from "@/context/NewPageContext2"
// import { InputValue } from "@/context/NewPageContext2"
// import { InputValueAction } from "@/context/NewPageContext2"

export default function TextField({ type,label,name }) {

 // const {inputValue} = useContext(InputValue);
  // const {setInputValue} = useContext(InputValueAction)
  // const {name} = useContext(InsertData);




  const [inputValue, setInputValue] = useState('')
  const {insertData}= useContext(NewContext);
  
  //const {inputValue,setInputValue} = useContext(NewContext);
  const handelInput = (e)=>{
      setInputValue(e.target.value);
      insertData[name] = inputValue.trim();
      
  }
  
  insertData[name] = inputValue
  return (
    <>
      <label>{label} </label>
      <input type={type} onChange={ handelInput} value={inputValue} name={name} className="bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary" />
    </>


  )
}
