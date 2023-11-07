'use client'
import RegisterAd from '@/components/elements/RegisterAd'
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/modules/InfoGameSection'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import InfoSaleSection from '@/components/modules/InfoSaleSection'
import { REGISTERADVERTISE } from '@/constants/constantNewPage'
import { NewContext } from "@/context/NewPageContext"
import { useState } from 'react'
import {useFormik} from 'formik'
export default function page() {
  const initialValues = {
    name:'',
    price:'',
    sellername:''
    
   };
   const formik = useFormik({initialValues});
  
   const insertData = {
    name: 'first', platformId: '', cityId: '', provinceId: null, locId:'', statusId: '', price: '', moreInfo: '', data: ''
    , exchange: false, preferedExchange: '',
};
   const[isSale, setIsSale] = useState(false)
   const[isExchange, setIsExchange] = useState(false)
   const relatedCities =[];
   const disable = false;
   const [validPhoneNumber, setValidPhoneNumber] = useState(true);
      const [clicked, setClicked] = useState(true);
      const [validNameSeller, setValidNameSeller] = useState(true);
      const [isCorrect, setIsCorrect] = useState("-");
      const [values, setValues]= useState({
        name:'',
        sellername:'',
        phonenumber:'',
        price:'',

      })
      
      const onChange = (e,name)=>{
          setValues({...values, [e.target.name]:e.target.value })
      }

  return (
    <NewContext.Provider value={{insertData,relatedCities,disable, isSale,setIsSale,isExchange, setIsExchange,validPhoneNumber, setValidPhoneNumber,clicked, setClicked, formik,isCorrect, setIsCorrect,values, setValues, onChange}}>

  
    <div className='flex flex-col justify-center items-center mt-30 mb-10 '>
      <div className='flex flex-col gap-8'>
        <div className=' flex flex-col gap-8'>
          <RegisterAd />
          <InfoGameSection />
          <InfoSellerSection />
          <InfoSaleSection />
        </div>
        <div className='flex justify-end gap-6 w-full '>
          <CancelButton text={CANCEL} />
          <RegisterAdButton text={REGISTERADVERTISE} />
        </div>
      </div>
    </div>
    </NewContext.Provider>
  )
}
