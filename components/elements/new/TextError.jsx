import Image from 'next/image'
import error from '../../../asset/icons/erroe.svg'
export default function TextError({text}) {
  return (
    <div className='flex  items-center justify-start pr-3 gap-1'>
      <Image src={error} width={16} height={16} alt='error' className='pb-[.5px]'/>
     <div  className={`text-scales-caption font-peyda-regular leading-leading-3 text-accent-error   ` }>{text}</div>
     
    </div>
   
  )
}
