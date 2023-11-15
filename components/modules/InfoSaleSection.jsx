'use client'

import Optional from '@/components/elements/new/Optional'
import TitleNewPage from '@/components/elements/new/TitleNewPage'
import SubTitleNewPage from '@/components/elements/new/SubTitleNewPage'
import { infoSale } from '@/constants/constantNewPage'
import TextNewPage from '@/components/elements/new/TextNewPage'
import CheckBox from '@/components/elements/new/CheckBox'
import TextFieldNewPage from '@/components/elements/new/TextFieldNewPage'
import { useContext } from 'react'
import { NewContext } from '@/context/NewContext'
import { ErrorMessagePrice } from '@/constants/constantNewPage'
export default function InfoSaleSection() {
    const { isSale,isExchange,setIsExchange ,setIsSale, isValidPrice,values } = useContext(NewContext);
   


    return (
        <div className=' flex flex-col gap-4'>
            <TitleNewPage text={infoSale.INFOSALETITLE} />
            <SubTitleNewPage text={infoSale.INFOSALESUBTITLE} />
            <div >
                <div onClick={() => { setIsSale(!isSale); }} className='flex items-center gap-2 mb-2'>
                    <CheckBox checked={isSale} />
                    <TextNewPage text={infoSale.SALEGAME} />

                </div>
                <div className={`${isSale ? 'block' : 'hidden'}`}>
                    <TextFieldNewPage validate={isValidPrice} name={'price'} required={true} errormessage={ErrorMessagePrice} label={<div className='flex  items-center  '>
                        <TextNewPage specialClass={'pr-3'} text={infoSale.PRICEGAME} type={'textarea'} />
                    </div>} />
                </div>
            </div>
            <div>
                <div onClick={() => { setIsExchange(!isExchange); `${isExchange ? values.exchange = false : values.exchange = true}` }} className='flex items-center gap-2 mb-2'>
                    <CheckBox checked={isExchange} />
                    <TextNewPage text={infoSale.EXCHANGEGAME} />
                </div>
                <div className={`${isExchange ? 'block' : 'hidden'}`}>
                    <TextFieldNewPage validate={true} name={'preferedExchange'} required={false} label={<div className='flex  items-center '>
                        <TextNewPage specialClass={'pr-3'} text={infoSale.PREFEREDEXCHANGEGAME} type={'textarea'} />
                        <Optional />
                    </div>} />
                </div>
            </div>
        </div>
    )
}
