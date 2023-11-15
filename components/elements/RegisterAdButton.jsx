'use client'
import { supabase } from "@/lib/supabase"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { NewContext } from "@/context/NewContext"
import { UseGlobalContext } from "@/context/AuthContext";
import { CDNURL } from "@/constants/constantNewPage";

export default function RegisterAdButton({ text }) {
  const { isValidName, isValidSellerName, isValidPrice, isValidPhoneNumber, setIsValidCity, setIsValidProvince,
    values, setIsValidName, setIsValidPhoneNumber, setIsValidSellerName, setIsValidPrice, file,imageUrl } = useContext(NewContext);
  const { name, price, preferedExchange, moreInfo, platformId, cityId, provinceId, exchange } = values;

  const { id } = UseGlobalContext();

  const [fileName, setFileName] = useState('')



  // const handleSubmitImage = async (e) => {
  //   // e.preventDefault();
  //   setFileName(`${uuidv4()}-${file.name}`);
  //   const { data, error } = await supabase.storage
  //     .from("test")
  //     .upload(id + '/' + fileName, file, {
  //       cacheControl: "3600",
  //       upsert: false,
  //     });
  //     if(data) console.log(data);
  
  // }
  



  const handleInsertData = async () => {
    const insertData = {
      name: name, platformId: platformId || null, moreInfo: moreInfo || null, price: price || null,
      cityId: cityId, provinceId: provinceId, preferedExchange: preferedExchange || null, exchange: exchange || null, imageUrl:imageUrl||null
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
      if (data) {
        // handleSubmitImage();
        console.log('send');
      }
      if (error) console.log('try again');
    }



  }
  return (
    <>

      

      <button onClick={handleInsertData} className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
    </>
  )
}
