import RegisterAd from '@/components/elements/RegisterAd'
import { REGISTERADVERTISE, infoGame } from '@/constants/constantNewPage'
import { CANCEL } from '@/constants/constantNewPage'
import CancelButton from '@/components/elements/CancelButton'
import RegisterAdButton from '@/components/elements/RegisterAdButton'
import InfoGameSection from '@/components/modules/InfoGameSection'
import InfoSellerSection from '@/components/modules/InfoSellerSection'
import InfoSaleSection from '@/components/modules/InfoSaleSection'
export default function page() {
  return (
    <div className='flex flex-col   justify-center items-center mt-30 mb-10 '>
      <div className='flex flex-col items-start gap-8'>
        <div className=' flex flex-col  gap-8'>

          <RegisterAd />
          <InfoGameSection />
          <InfoSellerSection />
          <InfoSaleSection />

        </div>

        <div className='flex items-end gap-6 '>
          <CancelButton text={CANCEL} />
          <RegisterAdButton text={REGISTERADVERTISE} />
        </div>

      </div>



    </div>
  )
}
