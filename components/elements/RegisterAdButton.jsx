'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { InsertData } from "@/context/NewPageContext2"
import { NewContext } from "@/context/NewPageContext"
export default function RegisterAdButton({ text }) {
  const {insertData} = useContext(NewContext);
  const {validPhoneNumber} =  useContext(NewContext);
  const {name , price, moreInfo, platformId, preferedExchange, provinceId, cityId} = insertData;
  const{clicked, setClicked, setValidNameGame,validNameSeller, setValidNameSeller, setIsCorrect, isCorrect} = useContext(NewContext);


   
  // const handelCorrectData = ()=>{

  //   if(!insertData.name) setValidNameGame(false);

  // };
  const handelInsertData = async () => {
     
     setClicked(true)
     if(!isCorrect){
      setIsCorrect(false)
    } 
     if(validPhoneNumber)  { 
    const { data, error } = await supabase
      .from('games')
      .insert([
        {name:name,price:price, moreInfo:moreInfo, platformId:platformId ,preferedExchange:preferedExchange, cityId: cityId , provinceId:provinceId},
      ])
      .select()

  } 
  else {
    // console.log('enter coorect number');
    // console.log(validPhoneNumber);
  }


}
  return (
    
    <button onClick={()=>{handelInsertData} } className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[184px] h-12 hover:bg-primary-600'>{text}</button>
  )
}
