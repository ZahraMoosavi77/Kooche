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
import BackButton from '@/components/modules/BackButton'

export default function Page() {

  const [isSale, setIsSale] = useState(false)
  const [isExchange, setIsExchange] = useState(false)


  const [clicked, setClicked] = useState(true);
  const [isCorrect, setIsCorrect] = useState("-");
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isValidSellerName, setIsValidSellerName] = useState(true);
  const [isValidPrice, setIsValidPrice] = useState(true);
  const [isValidProvince, setIsValidProvince] = useState(true);
  const [isValidCity, setIsValidCity] = useState(true);
  const [cities, setCities] = useState([]);
  const [values, setValues] = useState({
    name: '',
    sellername: '',
    phonenumber: '',
    price: '',
    preferedExchange: '',
    moreInfo:'',
    platformId:'',
    cityId:'',
    provinceId:'',
    exchange:''

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
    <NewContext.Provider value={{   isSale, setIsSale, isExchange, setIsExchange, isValidName, isValidPhoneNumber, setIsValidPhoneNumber, setIsValidName, isValidSellerName, setIsValidSellerName,
     isValidPrice, setIsValidPrice, clicked, setClicked, isCorrect, setIsCorrect, values, setValues, onChange,isValidProvince, setIsValidProvince,isValidCity, setIsValidCity,cities, setCities }}>

      
      <div className='flex flex-col justify-center items-center '>
        <div className='flex flex-col gap-8 xs:w-[80%] sm: md: lg:w-[600px] mt-30 mb-10   '>
          <div className=' flex flex-col gap-8'>
            <BackButton />
            <RegisterAd />
            <InfoGameSection />
            <InfoSellerSection />
            <InfoSaleSection />
          </div>
          <div className='flex justify-center sm:justify-end gap-6  w-full '> 
            <CancelButton text={CANCEL} />
            <RegisterAdButton text={REGISTERADVERTISE} />
          </div>
        </div>
      </div>
     </NewContext.Provider>
  )
}
