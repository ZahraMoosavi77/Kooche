import CheckBoxImage from '../../asset/icons/Check_Big.svg'
import Image from 'next/image'
export default function CheckBox({ checked }) {
    return (
        <>
            {checked ? <Image src={CheckBoxImage} /> : <input type='checkbox' className='border-1 border-primary-100 rounded border-solid w-5 h-5'/>  }

        </>

    )
}
