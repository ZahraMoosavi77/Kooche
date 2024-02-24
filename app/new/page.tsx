'use client'
import RegisterAd from '@/components/elements/new/RegisterAd'
import InfoGameSection from '@/components/modules/InfoGameSection'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import InfoSaleSection from '@/components/modules/InfoSaleSection'
import BackButton from '@/components/modules/BackButton'
import ButtonGroup from '../../components/modules/ButtonGroup'

import {Colors} from '../../components/colors/Colors'
export default function Page() {

  
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='flex flex-col gap-8 xs:w-[80%] sm: md: lg:w-[600px] mt-30 mb-10   '>
        <div className=' flex flex-col gap-8'>
          {/* <BackButton /> */}
          <RegisterAd />
          <InfoGameSection />
          <InfoSellerSection />
          <InfoSaleSection />
        </div>
        <div className='flex justify-center sm:justify-end gap-6  w-full '>
          {/* <ButtonGroup /> */}
          {/* <Colors/> */}
        </div>
      </div>
    </div>
  )
}
