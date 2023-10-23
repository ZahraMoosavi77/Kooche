'use client'
import CheckBoxImage from '../../asset/icons/Check_Big.svg'
import Image from 'next/image'
import { useState } from 'react'
export default function CheckBox({ }) {
    const [checked, setChecked] = useState(false)
    return (
        <button onClick={() => setChecked(!checked)} >
            {checked ? <Image src={CheckBoxImage} /> : <div className='border-1 border-primary-100 rounded border-solid w-5 h-5' />}
        </button>


    )
}
