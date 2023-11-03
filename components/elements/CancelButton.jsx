'use client'

import Link from "next/link"


export default function CancelButton({text}) {
  return (
   <Link href={'/'}>
    <button  className='font-peyda-medium text-gray-800 leading-leading-3 rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-gray-900 '>{text}</button>
   </Link>
   
  )
}
