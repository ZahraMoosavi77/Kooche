'use client'

import Optional from '@/components/elements/Optional'
import TitleNewPage from '@/components/elements/TitleNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { infoSale } from '@/constants/constantNewPage'
import TextNewPage from '@/components/elements/TextNewPage'
import CheckBox from '@/components/elements/CheckBox'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import { useContext } from 'react'
import { NewContext } from '@/context/NewPageContext'
import { ErrorMessagePrice } from '@/constants/constantNewPage'
export default function InfoSaleSection() {
    const { isSale } = useContext(NewContext);
    const { isExchange } = useContext(NewContext);
    const { setIsExchange } = useContext(NewContext);
    const { setIsSale, isValidPrice } = useContext(NewContext);
    const { values } = useContext(NewContext);


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
