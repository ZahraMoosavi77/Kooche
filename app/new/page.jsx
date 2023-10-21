import React from 'react'
import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'
import TitleNewPage from '@/components/elements/TitleNewPage'
import { infoGame } from '@/constants/constantNewPage'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center p-12'>
    <RegisterAd/>
    <TitleNewPage text={infoGame.INFOGAMETITLE}/>
    <Optional/>
    <Optional/>
    </div>
  )
}
