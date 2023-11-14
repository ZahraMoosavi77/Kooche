'use client'
import { supabase } from "@/lib/supabase"
import { useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { NewContext } from "@/context/NewContext"
import { useUser } from "@supabase/supabase-js";
import { useEffect } from "react";
export default function RegisterAdButton({ text }) {
  const { isValidName, isValidSellerName, isValidPrice, isValidPhoneNumber, setIsValidCity, setIsValidProvince, values, setIsValidName, setIsValidPhoneNumber, setIsValidSellerName, setIsValidPrice,file } = useContext(NewContext);
  const { name, price, preferedExchange, moreInfo, platformId, cityId, provinceId , exchange} = values;
  const [userId, setUserId] = useState(null)
 useEffect(()=>{
    const ckeckUserIsLogin = async () =>{
      const { data: { user } , error} = await supabase.auth.getUser();
      console.log(user.id);
      if(user){
       setUserId(user.id) 
      }
      if(error) console.log(error);
    };
    const LogOut = async () =>{
      const { error } = await supabase.auth.signOut()
      console.log(error);
    }
    

    // ckeckUserIsLogin();
    // LogOut();
    ckeckUserIsLogin();
  
  },[])
  // console.log(user);
  const handleSubmitImage = async (e) => {
    // e.preventDefault();
    const fileName = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("test")
      .upload(userId+ '/'+ fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (data) {
     
      console.log("okkk");
    } else {
      console.log(error);
    }
  }



  const handleInsertData = async () => {
    if (!values.name.trim()) setIsValidName(false)
    if (!values.sellername.trim()) setIsValidSellerName(false)
    if (!values.price.trim()) setIsValidPrice(false);
    if (!values.phonenumber.trim()) setIsValidPhoneNumber(false);
    if (!values.platformId) setIsValidProvince(false);
    if (!values.cityId) setIsValidCity(false);

     
    if (isValidName && isValidPrice && isValidPhoneNumber && isValidSellerName) {
      
      const { data, error } = await supabase
        .from('games')
        .insert([

          { name: name, platformId: platformId || null, moreInfo: moreInfo || null, price: price || null, cityId: cityId, provinceId: provinceId, preferedExchange: preferedExchange || null , exchange:exchange || null },
        ])
        .select()
        if (data) {
          handleSubmitImage();
          console.log('send');
        }
        if(error) console.log('try again');
    }



  }
  return (
   
    <button onClick={handleInsertData} className='font-peyda-medium text-white bg-primary leading-leading-3 rounded-xl px-4 py-2 w-[72%] sm:w-[184px]  h-12 hover:bg-primary-600'>{text}</button>
  )
}
