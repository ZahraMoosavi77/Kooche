'use client'
import RegisterAd from '@/components/elements/RegisterAd'
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/modules/InfoGameSection'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import InfoSaleSection from '@/components/modules/InfoSaleSection'
import { REGISTERADVERTISE } from '@/constants/constantNewPage'

import BackButton from '@/components/modules/BackButton'

export default function Page() {


  return (


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

  )
}
