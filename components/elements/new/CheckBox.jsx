'use client'
import CheckBoxImage from '../../asset/icons/Check_Big.svg'
import checkbox from '../../asset/icons/Check.svg'
import Image from 'next/image'

export default function CheckBox({ checked}) {
    
    

    // <div className='border-1 border-gray-300 rounded border-solid w-5 h-5' >df </div>
    return (
        <button >
            {checked ? <Image src={CheckBoxImage} width={20} height={20} alt='check' /> : <Image src={checkbox} width={20} height={20} alt='check' />  }
        </button>


    )
}
