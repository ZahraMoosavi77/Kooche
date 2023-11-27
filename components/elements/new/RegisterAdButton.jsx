'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { NewContext } from "@/context/NewContext"
import { useRouter } from 'next/navigation'

export default function RegisterAdButton({ text }) {
  const router = useRouter();
  const {
    isValidName,
    isValidSellerName,
    isValidPrice,
    isValidPhoneNumber,
    setIsValidCity,
    setIsValidProvince,
    isValidPlatform,
    setIsValidPlatform,
    values,
    setValues,
    setIsValidName,
    setIsValidPhoneNumber,
    setIsValidSellerName,
    setIsValidPrice,
    imageUrl,
    gameLocation,
  } = useContext(NewContext);
  const {
    name,
    price,
    preferedExchange,
    moreInfo, 
    platformId,
    cityId, 
    provinceId,
    exchange,
    locId,
    phonenumber,
    sellername,
  } = values;


  const handleInsertData = async (e) => {
    e.preventDefault();
    const insertData = {
      name: name,
      platformId: platformId ,
      moreInfo: moreInfo || null,
      price: price || null,
      cityId: cityId,
      provinceId: provinceId,
      preferedExchange: preferedExchange || null,
      exchange: exchange || null,
      imageUrl: imageUrl || null,
      locId:locId,
    }

    if (!name.trim()) setIsValidName(false)
    if (!sellername.trim()) setIsValidSellerName(false)
    if (!price.trim()) setIsValidPrice(false);
    if (!phonenumber.trim()) setIsValidPhoneNumber(false);
    if (!provinceId) setIsValidProvince(false);
    if (!cityId) setIsValidCity(false);
    if(!platformId) setIsValidPlatform(false)


    if ((isValidName && isValidPrice && isValidPhoneNumber && isValidSellerName ) === true) {
      const { data, error } = await supabase
        .from('games')
        .insert([insertData,
        ])
        .select()
        console.log('send');
        if(data){
          // router.push('/')
          let valuesArray = Object.values(values);
          for (let value of valuesArray) {
            // console.log(values);
           setValues({...values, [value]:null})


        }
        // if(error) console.log(error);
        }
    }
  }
  return (
    <form onSubmit={handleInsertData}>

      <button  className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
    </form>
  )
}
