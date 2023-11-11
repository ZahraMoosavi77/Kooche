'use client'
import AddImage from '@/components/elements/AddImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import {  infoGame } from '@/constants/constantNewPage'
import TitleNewPage from '@/components/elements/TitleNewPage'
import Optional from '@/components/elements/Optional'
import TextNewPage from '@/components/elements/TextNewPage'
import TextAreaNewPage from '../elements/TextAreaNewPage'
import SelectOptionsNewPage from '../elements/SelectOptionsNewPage'
import { CHOOSECONSOLE } from '@/constants/constantNewPage'
import { SEARCHCONSOLE } from '@/constants/constantNewPage'
import { useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import {ErrorMessageNameOfGame} from '@/constants/constantNewPage'

import { NewContext } from '@/context/NewPageContext'



export default function InfoGameSection() {
    const [platforms , setPlatforms] = useState([]);
  
    const{ values, isValidName} = useContext(NewContext);
    // console.log('insertData.name',insertData.name);
    const getData= async () =>{
        let { data, error } = await supabase
            .from('platforms')
            .select('*')
           
         setPlatforms(data);
      

    }
    useEffect( () => {
        getData()
  

        
    }, [])
    return (
        <div className=' flex flex-col gap-4 '>
            <div className=' flex flex-col gap-2'>
                <TitleNewPage text={infoGame.INFOGAMETITLE} />
                <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
            </div>
            <div>

                <TextFieldNewPage value={values.name} validate={isValidName}  required={true} errormessage={ErrorMessageNameOfGame} helpText={true} name={'name'} type={'text'} label={<TextNewPage specialClass={'pr-3'} text={infoGame.GAMENAME} />} />
               
            </div>

            <div className='relative'>
                <SelectOptionsNewPage column={'platformId'} validate={true} defualtValue={CHOOSECONSOLE} placeholderSearch={SEARCHCONSOLE} optionsGroup={platforms} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMECONSOLE} />
                    <Optional />
                </div>} />
            </div>
            <div >
                <TextAreaNewPage  name={'moreInfo'} value={values.moreInfo} label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} />

            </div>
            <TextNewPage text={infoGame.GAMEIMAGES} />
            <AddImage />
        </div>
    )
}
