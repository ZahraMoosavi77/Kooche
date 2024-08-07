'use client'
import AddImage from '@/components/elements/new/AddImage'
import TextFieldNewPage from '@/components/elements/new/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/new/SubTitleNewPage'
import { SEARCH, infoGame } from '@/constants/constantNewPage'
import TitleNewPage from '@/components/elements/new/TitleNewPage'
import Optional from '@/components/elements/new/Optional'
import TextNewPage from '@/components/elements/new/TextNewPage'
import TextAreaNewPage from '../elements/new/TextAreaNewPage'
import SelectOptionsNewPage from '../elements/new/SelectOptionsNewPage'
import { CHOOSECONSOLE } from '@/constants/constantNewPage'

import { useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { ErrorMessageNameOfGame,ErrorMessagePlatform } from '@/constants/constantNewPage'
import { NewContext } from "@/context/NewContext"
import BasicInput from '@/app_dev/_component_dev/Basic-Input/BasicInput'



export default function InfoGameSection() {
    const [platforms, setPlatforms] = useState([]);
    const { values, isValidName, isValidPlatform } = useContext(NewContext)
    const getData = async () => {
        let { data, error } = await supabase
            .from('platforms')
            .select('*')
        setPlatforms(data);
    }
    useEffect(() => {
        getData()
    }, [])
    return (

        <div className=' flex flex-col gap-4 '>
            <div className=' flex flex-col gap-2'>
                <TitleNewPage text={infoGame.INFOGAMETITLE} />
                <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
            </div>
            <div>
                <BasicInput />
                {/* <TextFieldNewPage value={values.name} validate={isValidName} required={true} errormessage={ErrorMessageNameOfGame} helpText={true} name={'name'} type={'text'} label={<TextNewPage specialClass={'pr-3'} text={infoGame.GAMENAME} />} /> */}
            </div>

            <div className='relative'>
                <SelectOptionsNewPage 
                column={'platformId'}
                 validate={isValidPlatform}
                    defualtValue={CHOOSECONSOLE}
                     placeholderSearch={SEARCH} 
                     optionsGroup={platforms} 
                     errormessage={ErrorMessagePlatform}
                     label={<div className='flex  '>
                        <TextNewPage specialClass={'pr-3'} text={infoGame.GAMECONSOLE} />
                    </div>} />
            </div>
            <div >
                <TextAreaNewPage name={'moreInfo'} value={values.moreInfo} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} />

            </div>
            <TextNewPage text={infoGame.GAMEIMAGES} />
            <AddImage />
        </div>
    )
}
