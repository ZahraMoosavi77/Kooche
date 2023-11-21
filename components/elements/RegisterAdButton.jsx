
'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { NewContext } from "@/context/NewContext"

export default function RegisterAdButton({ text }) {
  const {
    isValidName,
    isValidSellerName,
    isValidPrice,
    isValidPhoneNumber,
    setIsValidCity,
    setIsValidProvince,
    values,
    setIsValidName,
    setIsValidPhoneNumber,
    setIsValidSellerName,
    setIsValidPrice,
    imageUrl,
    gameLocation
  } = useContext(NewContext);
  const {
    name,
    price,
    preferedExchange,
    moreInfo, platformId,
    cityId, provinceId,
    exchange
  } = values;

  const handleInsertData = async () => {
    const insertData = {
      name: name,
      platformId: platformId || null,
      moreInfo: moreInfo || null,
      price: price || null,
      cityId: cityId,
      provinceId: provinceId,
      preferedExchange: preferedExchange || null,
      exchange: exchange || null,
      imageUrl: imageUrl || null
    }

    if (!values.name.trim()) setIsValidName(false)
    if (!values.sellername.trim()) setIsValidSellerName(false)
    if (!values.price.trim()) setIsValidPrice(false);
    if (!values.phonenumber.trim()) setIsValidPhoneNumber(false);
    if (!values.platformId) setIsValidProvince(false);
    if (!values.cityId) setIsValidCity(false);


    if (isValidName && isValidPrice && isValidPhoneNumber && isValidSellerName) {
      const { data, error } = await supabase
        .from('games')
        .insert([insertData,
        ])
        .select()
    }
  }
  return (
    <>
      <button onClick={handleInsertData} className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
    </>
  )
}

