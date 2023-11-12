'use client'
import { NewContext } from "@/context/NewPageContext"
import { useContext} from "react"
import TextError from "./TextError";
import TextHelper from '../elements/TextHelper'
import { TEXTHELPER } from '@/constants/constantNewPage'

export default function TextField({ type, label, name, errormessage, helpText, value, validate }) {

  const { onChange } = useContext(NewContext);
  
  return (
    <>
      <label htmlFor={name}>{label} </label>
      <input id={name} type={type} onChange={onChange} value={value} name={name} className={` ${!validate ? 'bg-accent-error' : 'bg-gray-200'}  text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`} />
      {!validate ? <TextError text={errormessage} /> : ''}
      {helpText && <TextHelper specialClass={'pr-3'} text={TEXTHELPER} />}
    </>


  )
}
