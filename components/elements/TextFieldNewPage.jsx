'use client'
import { NewContext } from "@/context/NewPageContext"
import { useContext, useEffect, useState } from "react"
import { REGex } from "@/constants/constantNewPage"
import { validateConfig } from "next/dist/server/config-shared";
import TextError from "./TextError";
import { ERRORPHONENUMBER } from "@/constants/constantNewPage";
import TextHelper from '../elements/TextHelper'
import { TEXTHELPER } from '@/constants/constantNewPage'

export default function TextField({ type, label, name, validate, helpText }) {


  const{validNameGame, setValidNameGame,validNameSeller, setValidNameSeller} = useContext(NewContext);
  const { setValidPhoneNumber, clicked } = useContext(NewContext);
  const { validPhoneNumber } = useContext(NewContext);
  const [inputValue, setInputValue] = useState('');
  const { insertData } = useContext(NewContext);


  const handelInput = (e) => {
    setInputValue(e.target.value);
    insertData[name] = inputValue.trim();
   
   

  }
  
 
  
  
  useEffect(() => {
  
    if (name === 'phoneNumber' && inputValue ) {
      const result = REGex.test(inputValue)
      if (result) { 
        setValidPhoneNumber(true);
         }
      if (!result) {setValidPhoneNumber(false)}  
    }
    
    insertData[name] = inputValue
  }, [inputValue])


  // insertData[name] = inputValue

  return (
    <>
      <label>{label} </label>
      <input type={type} onChange={handelInput} value={inputValue} name={name} className={` ${ clicked ? inputValue  ? 'bg-accent-error' :'bg-gray-200' :   validate   ? 'bg-gray-200' :'bg-accent-error'}  text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`} />
      {helpText && <TextHelper specialClass={'pr-3'} text={TEXTHELPER}/>}
      {!validate  && inputValue &&  <TextError text={ERRORPHONENUMBER}/>}

    </>


  )
}
