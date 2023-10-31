'use client'
import CheckBoxImage from '../../asset/icons/Check_Big.svg'
import Image from 'next/image'
import { useState , useContext} from 'react'
import { NewContext } from '@/context/NewPageContext'
export default function CheckBox({ checked}) {
    
    const { isShowSale } = useContext(NewContext);
    const { isExchange } = useContext(NewContext);
    const { setIsExchange } = useContext(NewContext);
    const { setIsShowSale } = useContext(NewContext);

    
    return (
        <button >
            {checked ? <Image src={CheckBoxImage} alt='check' /> : <div className='border-1 border-primary-100 rounded border-solid w-5 h-5' />}
        </button>


    )
}
