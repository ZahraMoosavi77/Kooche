'use client'
import { supabase } from "@/lib/supabase"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { NewContext } from "@/context/NewContext"
import { UseGlobalContext } from "@/context/AuthContext";

export default function RegisterAdButton({ text }) {
  const { isValidName, isValidSellerName, isValidPrice, isValidPhoneNumber, setIsValidCity, setIsValidProvince,
    values, setIsValidName, setIsValidPhoneNumber, setIsValidSellerName, setIsValidPrice, file } = useContext(NewContext);
  const { name, price, preferedExchange, moreInfo, platformId, cityId, provinceId, exchange } = values;

  const { id } = UseGlobalContext();

  const handleSubmitImage = async (e) => {
    // e.preventDefault();
    const fileName = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("test")
      .upload(id + '/' + fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
  }



  const handleInsertData = async () => {
    const insertData = {
      name: name, platformId: platformId || null, moreInfo: moreInfo || null, price: price || null,
      cityId: cityId, provinceId: provinceId, preferedExchange: preferedExchange || null, exchange: exchange || null
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
        handleSubmitImage();
        console.log('send');
      }
      if (error) console.log('try again');
    }



  }
  return (
    <>

      {/* <img src=  "https://vcclbeslusvmyuhuefmr.supabase.co/storage/v1/object/public/test/e1ab338f-713c-4349-ab54-20b463551aa8/4c4168b5-dbbf-4933-810b-2d9922aaa960-612c6182c8d3d.jpeg?t=2023-11-14T10%3A14%3A16.924Z"
/> */}

      <button onClick={handleInsertData} className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
    </>
  )
}
