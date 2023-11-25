
'use client'
import { supabase } from "@/lib/supabase"
import { useContext } from "react"
import { NewContext } from "@/context/NewContext"
import { useRouter } from "next/router"
export default function RegisterAdButton({ text }) {
  const router = useRouter()

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
    gameLocation,
    isValidCity,
    isValidProvince,
  
  } = useContext(NewContext);
  const {
    name,
    price,
    preferedExchange,
    moreInfo, platformId,
    cityId, provinceId,
    exchange,
    phonenumber,
    sellername,
  } = values;

  const handleInsertData =  () => {
    // const insertData = {
    //   name: name,
    //   platformId: platformId || null,
    //   moreInfo: moreInfo || null,
    //   price: price || null,
    //   cityId: cityId,
    //   provinceId: provinceId,
    //   preferedExchange: preferedExchange || null,
    //   exchange: exchange || null,
    //   imageUrl: imageUrl || null
    // };

    console.log(provinceId,'provinceId');

    // if (!name.trim()) await setIsValidName(false)
    // if (!sellername.trim())  await setIsValidSellerName(false)
    // if (!price.trim())  await setIsValidPrice(false);
    // if (!phonenumber.trim())  await setIsValidPhoneNumber(false);
    // if(provinceId){
    //   console.log(isValidProvince,'isvalidprovince');
    // }
    // if (!provinceId)  {
    //   await setIsValidProvince(false);
    //   console.log('ok');}
    // if (!cityId)  await setIsValidCity(false);


    // if (isValidName && isValidPrice && isValidPhoneNumber && isValidSellerName && isValidCity) {
    //   const { data, error } = await supabase
    //     .from('games')
    //     .insert([insertData,
    //     ])
    //     .select()
        
    //     if(data){
    //        router.push('/auth');
    //        console.log('s');
    //     }
      
    
    // }
  }
  return (
    <>
      <button onClick={handleInsertData} className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
    </>
  )
}

