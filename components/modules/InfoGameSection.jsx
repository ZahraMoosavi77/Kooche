import AddImage from '@/components/elements/AddImage'
import ShowImage from '@/components/elements/ShowImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { REGISTERADVERTISE, infoGame } from '@/constants/constantNewPage'
import TitleNewPage from '@/components/elements/TitleNewPage'
import Optional from '@/components/elements/Optional'
import TextNewPage from '@/components/elements/TextNewPage'
import TextAreaNewPage from '../elements/TextAreaNewPage'
import SelectOptionsNewPage from '../elements/SelectOptionsNewPage'
import { consoleCategory } from '@/constants/constantNewPage'
import { CHOOSECONSOLE } from '@/constants/constantNewPage'
import {SEARCHCONSOLE} from '@/constants/constantNewPage'

export default function InfoGameSection() {
    return (
        <div className=' flex flex-col gap-4 '>
            <div className=' flex flex-col gap-2'>
                <TitleNewPage text={infoGame.INFOGAMETITLE} />
                <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
            </div>
            <div>

                <TextFieldNewPage name={'name'} type={'text'} label={<TextNewPage specialClass={'pr-3'} text={infoGame.GAMENAME} />} />
            </div>

            <div  className='relative'>
                <SelectOptionsNewPage name={'catId'} defualtValue={CHOOSECONSOLE} placeholderSearch={SEARCHCONSOLE} optionsGroup={consoleCategory} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMECONSOLE} />
                    <Optional />
                </div>} />
            </div>
            <div >
                <TextAreaNewPage name={'moreInfo'} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} />

            </div>
            <TextNewPage text={infoGame.GAMEIMAGES} />
            <AddImage />
        </div>
    )
}
