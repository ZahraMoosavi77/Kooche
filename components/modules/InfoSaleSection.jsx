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

export default function () {
    return (
        <div className=' flex flex-col gap-4'>
            <TitleNewPage text={infoSale.INFOSALETITLE} />
            <SubTitleNewPage text={infoSale.INFOSALESUBTITLE} />
            <div >
                <div className='flex items-center gap-2 mb-2'>
                    <CheckBox />
                    <TextNewPage text={infoSale.SALEGAME} />

                </div>
                <TextFieldNewPage label={<div className='flex  items-center  '>
                    <TextNewPage specialClass={'pr-3'} text={infoSale.PRICEGAME} type={'textarea'} />
                </div>} />

            </div>

            <div>

                <div className='flex items-center gap-2 mb-2'>
                    <CheckBox />
                    <TextNewPage text={infoSale.EXCHANGEGAME} />

                </div>
                <TextFieldNewPage label={<div className='flex  items-center '>
                    <TextNewPage text={infoSale.PREFEREDEXCHANGEGAME} type={'textarea'} />
                    <Optional />
                </div>} />
            </div>
        </div>
    )
}
