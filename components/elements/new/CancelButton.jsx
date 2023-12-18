'use client'
import { useRouter } from "next/navigation";
import { NewContext } from "@/context/NewContext"
import { useContext } from "react";
export default function CancelButton({text}) {
  const router = useRouter();
  const { values} = useContext(NewContext)
  const handleCancel = ()=>{
    for (let v of Object.keys(values) ) {
      values[v] =""
    } 
    router.back()
  }
  return (
    <button   onClick={handleCancel} className='font-peyda-medium text-gray-800 leading-leading-3 rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-gray-900 '>{text}</button>
  )
}
