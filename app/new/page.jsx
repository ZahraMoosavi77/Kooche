import React from 'react'
import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'
import TitleNewPage from '@/components/elements/TitleNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { infoGame } from '@/constants/constantNewPage'
import { infoSale } from '@/constants/constantNewPage'
import { infoSeller } from '@/constants/constantNewPage'
import TextNewPage from '@/components/elements/TextNewPage'
export default function page() {
  return (
    <div className='flex flex-col justify-center items-center mt-30'>
      <div className='items-start'>
        <RegisterAd />
        <TitleNewPage text={infoGame.INFOGAMETITLE} />
        <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
        <TitleNewPage text={infoSeller.INFOSELLERTITLE} />
        <TitleNewPage text={infoSale.INFOSALETITLE} />
        <div className='flex  items-center '>
        <TextNewPage text={infoGame.GAMEDESCRIPTION}/>
        <Optional />
        
        </div>
        <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE} />
        <SubTitleNewPage text={infoSale.INFOSALESUBTITLE} />
       
        <Optional />

      </div>

    </div>
  )
}
