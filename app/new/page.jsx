import React from 'react'
import Optional from '@/components/elements/Optional'
import RegisterAd from '@/components/elements/RegisterAd'

export default function page() {
  return (
    <div className='flex flex-col justify-center items-center p-12'>
    <RegisterAd/>
    <Optional/>
    <Optional/>
    </div>
  )
}
