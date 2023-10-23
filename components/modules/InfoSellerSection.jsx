import AddImage from '@/components/elements/AddImage'
import ShowImage from '@/components/elements/ShowImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { REGISTERADVERTISE, infoGame, infoSeller } from '@/constants/constantNewPage'
import TitleNewPage from '../elements/TitleNewPage'
import Optional from '@/components/elements/Optional'
import TextNewPage from '../elements/TextNewPage'




export default function InfoSellerSection() {
    return (
        <div className=' flex flex-col gap-4'>
            <div className=' flex flex-col gap-1'>
                <TitleNewPage text={infoSeller.INFOSELLERTITLE} />
                <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE} />
            </div>
            <div>
                <TextFieldNewPage label={<div className='flex  items-center '>
                    <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERNAME} type={'textarea'} />
                </div>} />
            </div>
            <div>
            <TextFieldNewPage label={<div className='flex  items-center '>
                <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERUNITED} type={'textarea'} />
                <Optional />
            </div>} />

            </div>
            <div>
                  <TextFieldNewPage label={<div className='flex  items-center '>
                <TextNewPage  specialClass={'pr-3'} text={infoSeller.SELLERCITY} type={'textarea'} />
            </div>} />

            </div>
          
             <div>
             <TextFieldNewPage label={<div className='flex  items-center '>
                <TextNewPage  specialClass={'pr-3'} text={infoSeller.SELLERPHONE} type={'textarea'} />
              

            </div>} />
             </div>
        </div>
    )
}
