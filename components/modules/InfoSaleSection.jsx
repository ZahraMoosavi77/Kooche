'use client'

import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'
import TitleNewPage from '@/components/elements/TitleNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { REGISTERADVERTISE, infoGame } from '@/constants/constantNewPage'
import { infoSale } from '@/constants/constantNewPage'

import { CANCEL } from '@/constants/constantNewPage'
import TextNewPage from '@/components/elements/TextNewPage'

import CheckBox from '@/components/elements/CheckBox'

import CanccelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/modules/InfoGameSection'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import { useState, useContext } from 'react'
import { NewContext } from '@/context/NewPageContext'
import {ErrorMessagePrice} from '@/constants/constantNewPage'
export default function () {
    const { isSale } = useContext(NewContext);
    const { isExchange } = useContext(NewContext);
    const { setIsExchange } = useContext(NewContext);
    const { setIsSale, isValidPrice } = useContext(NewContext);
    const {insertData} = useContext(NewContext);
   
   
    return (
        <div className=' flex flex-col gap-4'>
            <TitleNewPage text={infoSale.INFOSALETITLE} />
            <SubTitleNewPage text={infoSale.INFOSALESUBTITLE} />
            <div >
                <div onClick={() => {setIsSale(!isSale);setIsExchange(false); console.log(insertData);}} className='flex items-center gap-2 mb-2'>
                    <CheckBox checked = {isSale} />
                    <TextNewPage text={infoSale.SALEGAME} />

                </div>
                <div className={`${isSale ? 'block' : 'hidden'}`}>
                    <TextFieldNewPage validate={isValidPrice} name={'price'} required={true} errormessage={ErrorMessagePrice}  label={<div className='flex  items-center  '>
                        <TextNewPage specialClass={'pr-3'} text={infoSale.PRICEGAME} type={'textarea'} />
                    </div>} />
                </div>
            </div>
            <div>
                <div onClick={() =>{ setIsExchange(!isExchange);setIsSale(false); `${isExchange ? insertData.exchange = false : true }`;console.log(insertData);}} className='flex items-center gap-2 mb-2'>
                    <CheckBox checked = {isExchange} />
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
