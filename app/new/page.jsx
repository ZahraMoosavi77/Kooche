import React from 'react'
import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'
import TitleNewPage from '@/components/elements/TitleNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { infoGame } from '@/constants/constantNewPage'
import { infoSale } from '@/constants/constantNewPage'
import { infoSeller } from '@/constants/constantNewPage'
export default function page() {
  return (
    <div className='flex flex-col justify-center items-center p-12'>
    <RegisterAd/>
    <TitleNewPage text={infoGame.INFOGAMETITLE}/>
    <TitleNewPage text={infoSeller.INFOSELLERTITLE}/>
    <TitleNewPage text={infoSale.INFOSALETITLE}/>
    <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE}/>
    <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE}/>
    <SubTitleNewPage text={infoSale.INFOSALESUBTITLE}/>

    <Optional/>
    <Optional/>
    </div>
  )
}
