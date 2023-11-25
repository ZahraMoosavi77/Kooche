import Image from 'next/image'
import React from 'react'


const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        <Image className='rotate-center mr-2.5' src={"/images/loading/loading.png"} width={104} height={104} alt='gamepad' />
        <span className='text-gray-800 font-peyda-regular text-scales-default'>در حال بارگذاری ...</span>
    </div>
  )
}

export default Loading