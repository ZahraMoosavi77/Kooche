import React from 'react'

export default function TextAreaNewPage({ type,value,label,name }) {
  return (
    <>
    <label>{label} </label>
    <textarea type={type} value={value} name={name} className="h-[100px] w-[560px] overflow-hidden resize-none bg-gray-200 text-gray-900 rounded-xl  outline-none px-3 py-[9.5px] mt-1 focus:bg-white  focus:border focus:border-primary focus:text-primary" ></textarea>


  </>  )
}
