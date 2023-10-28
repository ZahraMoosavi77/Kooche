'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { InsertData } from "@/context/NewPageContext2"
import { NewContext } from "@/context/NewPageContext"
export default function RegisterAdButton({ text }) {
  const {insertData} = useContext(NewContext);
  // const {name} = useContext(InsertData)
  const handelInsertData = async () => {
    console.log(insertData.price);
    const { data, error } = await supabase
      .from('games')
      .insert([
        { name:insertData.name, price: insertData.price, moreInfo: insertData.moreInfo },
      ])
      .select()

  }
  return (
    <button onClick={handelInsertData } className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[184px] h-12 hover:bg-primary-600'>{text}</button>
  )
}
