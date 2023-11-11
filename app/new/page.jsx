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
import { REGex } from '@/constants/constantNewPage'

export default function page() {



  const insertData = {
    name: 'first', platformId: '', cityId: '', provinceId: null, locId: '', statusId: '', price: '', moreInfo: '', data: ''
    , exchange: false, preferedExchange: '',
  };
  const [isSale, setIsSale] = useState(false)
  const [isExchange, setIsExchange] = useState(false)
  const relatedCities = [];
  const disable = false;

  const [clicked, setClicked] = useState(true);
  // const [validNameSeller, setValidNameSeller] = useState(true);
  const [isCorrect, setIsCorrect] = useState("-");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidSellerName, setIsValidSellerName] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);

  const [values, setValues] = useState({
    name: '',
    sellername: '',
    phonenumber: '',
    price: '',
    preferedExchange: '',
    moreInfo:'',
    platformId:'',
    cityId:'',
    provinceId:''

  })

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'name') setIsValidName(true);
    if (e.target.name === 'sellername') setIsValidSellerName(true);;
    if (e.target.name === 'price') setIsValidPrice(true);
    if (e.target.name === 'phonenumber') {
      
      const result = REGex.test(e.target.value)
      if(!result && !values.phonenumber.trim()) setIsValidPhoneNumber(false);
      if(result && values.phonenumber.trim()) setIsValidPhoneNumber(true);
      
    }
          
         
          
          

      }

  return (
    <NewContext.Provider value={{ insertData, relatedCities, disable, isSale, setIsSale, isExchange, setIsExchange, isValidName, isValidPhoneNumber, setIsValidPhoneNumber, setIsValidName, isValidSellerName, setIsValidSellerName, isValidPrice, setIsValidPrice, clicked, setClicked, isCorrect, setIsCorrect, values, setValues, onChange }}>


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
