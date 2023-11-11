'use client'
import down from '../../asset/icons/Down.svg'
import Image from 'next/image'
import Search from '../../asset/icons/Serarch.svg'
import { useState, useContext } from 'react'
import { NewContext } from '@/context/NewPageContext'
import TextError from './TextError'

export default function SelectOptionsNewPage({ label, optionsGroup, placeholderSearch, column, errormessage, validate }) {
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState({ name: '', id: '' });
    // console.log(column,optionsGroup);
    const [isOpen, setIsOpen] = useState(false);
    const { values, setIsValidProvince, setIsValidCity,cities, setCities } = useContext(NewContext)
    values[column] = selected.id;

    return (
        <>
            <label>{label}</label>
            <div onClick={() => { setIsOpen(!isOpen); }} className={` ${selected.name ? "justify-between" : 'justify-end'} flex  items-center appearance-none bg-gray-200 text-gray-900 rounded-xl font-peyda-medium  outline-none px-3 py-[9.5px] w-full mt-1 focus:bg-white focus:border focus:border-primary focus:text-primary`}>
                {selected.name ? selected.name : ''}
                <Image className={`${isOpen && "rotate-180"}   `} src={down} width={24} height={24} alt='down' />
            </div>
            {validate ? '' : <TextError text={errormessage} />}
            <ul className={` absolute bg-white w-full pb-2 pr-2 pl-2 border rounded-xl border-gray-200 mt-1 max-h-[162px] overflow-y-auto ${isOpen ? 'block' : 'hidden'} `}>
                <div className='flex justify-between items-center sticky top-0'>
                    {/* <Image src={Search} width={20} height={20} alt='search' color='blue' className='text-primary' /> */}
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder={placeholderSearch} className='placeholder:text-primary-200 font-peyda-medium w-full outline-none p-2 ' />
                </div>

                {optionsGroup?.map((item) => {
                    return <li key={item.id} onClick={
                        () => {
                            if (column === 'cityId') setIsValidCity(true)
                            if (column === 'provinceId') {setIsValidProvince(true); setCities(item.cities) ; }
                            if (item.name !== selected.name) setSelected({ name: item.name, id: item.id }); setIsOpen(false); setInputValue("")
                        }
                    } className={`py-[6px] px-3 font-peyda-regular ${item.name?.startsWith(inputValue) ? 'block' : 'hidden'} hover:bg-primary-50 `}>{item.name}</li>
                })}
            </ul>
        </>

    )
}
