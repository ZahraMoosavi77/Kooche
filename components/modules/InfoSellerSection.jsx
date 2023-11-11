'use client'
import AddImage from '@/components/elements/AddImage'
import ShowImage from '@/components/elements/ShowImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { infoSeller } from '@/constants/constantNewPage'
import TitleNewPage from '../elements/TitleNewPage'
import TextNewPage from '../elements/TextNewPage'
import MapNewPage from '../elements/MapNewPage'
import SelectOptionsNewPage from '../elements/SelectOptionsNewPage'
import { SEARCHCITY, SEARCHUNITED } from '@/constants/constantNewPage'
import { useState, useEffect, useContext } from 'react'
import { supabase } from '@/lib/supabase'
import { NewContext } from '@/context/NewPageContext'
import { ErrorMessageNameOfSeller } from '@/constants/constantNewPage'
import { ErrorMessagePhoneNumber } from '@/constants/constantNewPage'
import { REGex } from "@/constants/constantNewPage"
export default function InfoSellerSection() {
    const [cities, setCities] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const { isValidPhoneNumber, isValidSellerName, values } = useContext(NewContext);
    const getDataCity = async () => {
        // let { data, error } = await supabase
        //     .from('cities')
        //     .select('*')
        //     .order('name')
     

        let { data: cities, error } = await supabase
            .from('cities')

            .select(`*, provinces!inner(name,id)`)
                // .eq(`province.name`, 'اصفهان')

        setCities(cities);



    }
    const getDataProvince = async () => {
        let { data: provinces, error } = await supabase
            .from('provinces')
            .select('*')
            .order('name')
        setProvinces(provinces);




    }
    useEffect(() => {
        getDataCity();
        getDataProvince();



    }, [values.provinceTd])
    return (
        <div className=' flex flex-col gap-4'>
            <div className=' flex flex-col gap-1'>
                <TitleNewPage text={infoSeller.INFOSELLERTITLE} />
                <SubTitleNewPage text={infoSeller.INFOSELLERSUBTITLE} />
            </div>
            <div>
                <TextFieldNewPage validate={isValidSellerName} required={true} errormessage={ErrorMessageNameOfSeller} type={'text'} name={'sellername'} label={<div className='flex  items-center '>
                    <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERNAME} type={'text'} />
                </div>} />
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between gap-6'>
                    <div className='w-full relative'>
                        <SelectOptionsNewPage column={'provinceId'} required={true} optionsGroup={provinces} placeholderSearch={SEARCHUNITED} label={<div className='flex  items-center '>
                            <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERUNITED} type={'text'} />

                        </div>} />


                    </div>
                    <div className='w-full relative'>
                        <SelectOptionsNewPage column={'cityId'} required={true} optionsGroup={cities} placeholderSearch={SEARCHCITY} label={<div className='flex  items-center '>
                            <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERCITY} type={'text'} />
                        </div>} />

                    </div>
                </div>

                <MapNewPage />
            </div>



            <div>
                <TextFieldNewPage validate={isValidPhoneNumber} required={true} pattern={REGex} errormessage={ErrorMessagePhoneNumber} name={'phonenumber'} label={<div className='flex  items-center '>
                    <TextNewPage specialClass={'pr-3'} text={infoSeller.SELLERPHONE} type={'number'} />


                </div>} />

            </div>
        </div>
    )
}
