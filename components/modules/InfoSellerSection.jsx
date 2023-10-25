import AddImage from '@/components/elements/AddImage'
import ShowImage from '@/components/elements/ShowImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { CHOOSECITY, CHOOSEUNITED, REGISTERADVERTISE, infoGame, infoSeller } from '@/constants/constantNewPage'
import TitleNewPage from '../elements/TitleNewPage'
import Optional from '@/components/elements/Optional'
import TextNewPage from '../elements/TextNewPage'
import MapNewPage from '../elements/MapNewPage'
import SelectOptionsNewPage from '../elements/SelectOptionsNewPage'
import { UNITEDS , CITIES } from '@/constants/constantNewPage'
import {SEARCHCITY,SEARCHUNITED} from '@/constants/constantNewPage'



export default function InfoSellerSection() {
    return (
        <div className=' flex flex-col gap-4'>
            <div className=' flex flex-col gap-1'>
                <TitleNewPage text={infoSeller.INFOSELLERTITLE} />
                <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE} />
            </div>
            <div>
                <TextFieldNewPage label={<div className='flex  items-center '>
                    <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERNAME} type={'text'} />
                </div>} />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between gap-6'>
                    <div className='w-full'>
                        <SelectOptionsNewPage defualtValue={CHOOSEUNITED} optionsGroup={UNITEDS} placeholderSearch={SEARCHUNITED} label={<div className='flex  items-center '>
                            <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERUNITED} type={'text'} />

                        </div>} />
                      

                    </div>
                    <div className='w-full'>
                        <SelectOptionsNewPage defualtValue={CHOOSECITY} optionsGroup={CITIES} placeholderSearch={SEARCHCITY} label={<div className='flex  items-center '>
                            <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERCITY} type={'text'} />
                        </div>} />

                    </div>
                </div>

                <MapNewPage />
            </div>



            <div>
                <TextFieldNewPage label={<div className='flex  items-center '>
                    <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERPHONE} type={'text'} />


                </div>} />
            </div>
        </div>
    )
}
