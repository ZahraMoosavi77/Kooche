import React from 'react'
import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'
import TitleNewPage from '@/components/elements/TitleNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { REGISTERADVERTISE, infoGame } from '@/constants/constantNewPage'
import { infoSale } from '@/constants/constantNewPage'
import { infoSeller } from '@/constants/constantNewPage'
import { CANCEL } from '@/constants/constantNewPage'
import TextNewPage from '@/components/elements/TextNewPage'

import CheckBox from '@/components/elements/CheckBox'

import CanccelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/elements/InfoGameSection'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
export default function page() {
  return (
    <div className='flex flex-col justify-center items-center mt-30 mb-10'>
      <div className='items-start'>
        <RegisterAd />
        <InfoGameSection/>
       
        {/* <CheckBox checked={false} /> */}
        <TitleNewPage text={infoSeller.INFOSELLERTITLE} />
        <SubTitleNewPage text={infoSale.INFOSALESUBTITLE} />
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSeller.SELLERNAME} type={'textarea'} />
          <Optional />

        </div>} />
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSeller.SELLERUNITED} type={'textarea'} />
          <Optional />

        </div>} />
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSeller.SELLERCITY} type={'textarea'} />
          <Optional />

        </div>} />
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSeller.SELLERPHONE} type={'textarea'} />
          <Optional />

        </div>} />
        <TitleNewPage text={infoSale.INFOSALETITLE} />
        <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE} />
        <TextNewPage text={infoSale.SALEGAME}/>
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSale.PRICEGAME} type={'textarea'} />
          <Optional />
        </div>} />

        <TextNewPage text={infoSale.EXCHANGEGAME} />
        <TextFieldNewPage label={<div className='flex  items-center '>
          <TextNewPage text={infoSale.PREFEREDEXCHANGEGAME} type={'textarea'} />
          <Optional />
        </div>} />
        <CanccelButton text={CANCEL}/>
        <RegisterAdButton text={REGISTERADVERTISE}/>

      </div>

    </div>
  )
}
